<script lang="ts">
    import { tw } from "$lib/twind.js"

    let className = `${tw('w-10 h-10')}`

    /**
     * You can use reserved words as prop names.
     * https://svelte.dev/docs#component-format-script-1-export-creates-a-component-prop
     */
    export { className as class }
    export let id = ''
</script>

<button type="button" {id} class={`button-neomorphism ${className} ${tw('grid place-items-center rounded-full outline-none')}`}>
    <slot />
</button>

<style>
    /** 
     * We are using Neomorphism
     * https://neumorphism.io/#fdba74
     */
    .button-neomorphism {
        background: linear-gradient(145deg, #ffc77c, #e4a768);
        box-shadow:  5px 5px 11px #d79e63, -5px -5px 11px #ffd685;
    }

    .button-neomorphism:hover {
        background: #fdba74;
    }

    .button-neomorphism:focus {
        background: #fdba74;
        box-shadow: inset 5px 5px 11px #d79e63, inset -5px -5px 11px #ffd685;
    }
</style>