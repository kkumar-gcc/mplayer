<script>
    import { onMount } from "svelte"
    /**
     * Using Twind in library mode
     * 
     * https://twind.style/library-mode
     */
    import { tw } from "./twind.js"

    /**
     * Components
     */
    import play from "$lib/images/play.svg"
    import Button from "$lib/components/Button.svelte"
    import backward from "$lib/images/backward.svg"
    import forward from "$lib/images/forward.svg"
    import audio from "$lib/audio/星街すいせい 2nd Album『SPECTER』クロスフェード [xdxROihdIEY].mp3"

    /**
     * Mplayer core functionality
     */
    import mplayer from "$lib/mplayer.js"

    /**
     * Expiremental mplayer functionality
     * Move the code in lib/mplayer.js once all is good
     * 
     * Code based on:
     * https://github.com/mdn/webaudio-examples/blob/main/audio-basics/index.html
     * 
     * Some helpful links:
     * https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#examples
     * https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource#examples
     * 
     * Some awesome reference
     * https://github.com/fengkx/svelte-aplayer
     */
    let playing = false
    /**
     * @type {AudioContext | undefined}
     */
    let audioContext
    /**
     * @type {HTMLMediaElement | null}
     */
    let audioElement = null
    let track
    let currentMusic
    onMount(() => {
        audioElement = document.querySelector("audio")
        const playButton = document.querySelector('#play-button')
        const masterVolume = document.querySelector('#audio-volume')

        playButton?.addEventListener('click', () => {
            if (!audioContext) {
                init()
            }

            // check if context is in suspended state (autoplay policy)
            if (audioContext?.state === "suspended") {
                audioContext.resume();
            }

            if (playing === false && audioElement instanceof HTMLMediaElement) {
                audioElement.play()
                playing = true
            } else if (playing === true && audioElement instanceof HTMLMediaElement) {
                audioElement.pause()
                playing = false
            }
        }, false)

        // If track ends
        audioElement?.addEventListener('ended', () => {
            playing = false
        }, false)

        masterVolume?.addEventListener('input', (event) => {
            if (event.target instanceof HTMLInputElement && audioElement instanceof HTMLMediaElement) {
                audioElement.volume = parseFloat(event?.target.value)
            }
        })
    })

    function init() {
        audioContext = new AudioContext()
        if (audioElement instanceof HTMLMediaElement) {
            track = audioContext.createMediaElementSource(audioElement)
            // track = new MediaElementAudioSourceNode(audioContext, {
            //     mediaElement: audioElement,
            // })

            /**
             * Create the node that controls the volume gain.
             * https://developer.mozilla.org/en-US/docs/Web/API/GainNode
             */
            // const gainNode = new GainNode(audioContext)
            const gainNode = audioContext.createGain()
            const volumeControl = document.querySelector('#colume-control')
            if (volumeControl instanceof HTMLInputElement) {
                volumeControl?.addEventListener('input', () => {
                    gainNode.gain.value = parseInt(volumeControl.value)
                }, false)
            }

            /**
             * Create the node that controls the panning
             * https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode
             */
            const panner = new StereoPannerNode(audioContext, { pan: 0 })
            const pannerControl = document.querySelector('#panner-control')
            if (pannerControl instanceof HTMLInputElement) {
                pannerControl?.addEventListener('input', () => {
                    panner.pan.value = parseInt(pannerControl.value)
                }, false)
            }

            // connect our graph
            track.connect(gainNode).connect(panner).connect(audioContext.destination)

            console.log('track: ', track)
        }

        console.log('audioContext: ', audioContext)
    }
</script>

<div class={tw('px-4 py-2')}>
    <h1 class={tw('text-2xl')}>MPlayer sample component</h1>
    <p>Functionality based on MDN webaudio-examples <a href="https://github.com/mdn/webaudio-examples/blob/main/audio-basics/index.html" class={tw('text-indigo-500')}>audio-basics</a> section</p>
    <ul class={tw('pl-4 list-disc')}>
        <li>Play/Pause</li>
        <li>Volume Control</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode" class={tw('text-indigo-500')}>Panner</a> (Pan an audio stream left or right)</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/GainNode" class={tw('text-indigo-500')}>Gain</a> control (Control the instensity of gained audio, probably not needed for our use case)</li>
    </ul>
</div>

<div id="mplayer" class={tw('flex items-center justify-between bg-orange-300 p-2')}>
    <!-- Loading audio from static folder, working -->
    <!-- <audio src="audio/星街すいせい 2nd Album『SPECTER』クロスフェード [xdxROihdIEY].m4a" crossorigin="anonymous"></audio> -->

    <!-- Loading mp3 audio from static folder does not work for some reason... -->
    <!-- <audio src="audio/星街すいせい 2nd Album『SPECTER』クロスフェード [xdxROihdIEY].mp3" crossorigin="anonymous"></audio> -->

    <!-- Loading audio using import, working -->
    <audio src={audio} crossorigin="anonymous"></audio>

    <div class={tw('flex items-center gap-2')}>
        <div id="mplayer-controls" class={tw('flex items-center gap-2 text-orange-500')}>
            <Button class={tw('w-8 h-8')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class={tw('w-6 h-6 text-orange-500')}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                </svg>
            </Button>
            
            <Button id="play-button">
                <!-- <img src={play} alt="Play" class={tw('w-6 h-6')} /> -->
                {#if playing}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class={tw('w-6 h-6 text-orange-500')}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class={tw('w-6 h-6 text-orange-500')}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                {/if}
            </Button>

            <Button class={tw('w-8 h-8')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class={tw('w-6 h-6 text-orange-500')}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
            </Button>
        </div>

        <div>
            <div>Current song title being played</div>

            <div class={tw('flex items-center gap-2')}>
                <label for="panner-control" class={tw('text-sm')}>Panner</label>
                <input id="panner-control" type="range" min="-1" max="1" value="0" step="0.01" list="pan-values">
                <datalist id="pan-values">
                    <option value="-1" label="left"></option>
                    <option value="1" label="right"></option>
                </datalist>
            </div>
        </div>
    </div>

    <div>
        <div class={tw('flex items-center gap-2')}>
            <label for="volume-control" class={tw('text-sm')}>Gain</label>
            <input id="volume-control" type="range" min="0" max="2" value="1" step="0.01" list="gain-values">
            <datalist id="gain-values">
                <option value="0" label="min"></option>
                <option value="2" label="max"></option>
            </datalist>
        </div>
        <div class={tw('flex items-center gap-2')}>
            <label for="audio-volume" class={tw('text-sm')}>Volume</label>
            <input id="audio-volume" type="range" min="0" max="1" value="1" step="0.01" list="audio-volume-values">
            <datalist id="audio-volume-values">
                <option value="0" label="min"></option>
                <option value="1" label="max"></option>
            </datalist>
        </div>
    </div>
</div>