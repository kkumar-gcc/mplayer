<script>
  import MPlayer from "$lib/MPlayer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { tw } from "../lib/twind";
</script>

<svelte:head>
  <title>MPlayer</title>
  <meta name="description" content="Svelte music player component" />
</svelte:head>

<section
  class={tw(
    "font-sans 2xl:max-w-7xl 2xl:mx-auto 2xl:shadow-lg 2xl:border-x min-h-screen "
  )}
>
  <Navbar />
  <div
    class={tw(
      "flex-1 w-full mt-2 text-gray-700 sm:mt-6 md:mt-8 mb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    )}
  >
    <MPlayer />
  </div>
</section>

<style>
</style>
