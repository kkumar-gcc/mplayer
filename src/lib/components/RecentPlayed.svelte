<script lang="ts">
  import { tw } from "$lib/twind.js";
  export let recentlyPlayed = [];
</script>

<div>
  {#if recentlyPlayed.length > 0}
    <div class={tw("flex flex-row ")}>
      <div class={tw("flex-1")}>
        <h3
          class={tw(
            "py-3 text-2xl font-semibold text-gray-900 dark:text-white"
          )}
        >
          <a href="/blogs">Recently played</a>
        </h3>
      </div>
      <div>
        <a
          href="/blogs"
          class={tw(
            "py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center"
          )}
        >
          More
          <svg
            class={tw("w-5 h-5 ml-1")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 480"
            fill="currentColor"
            ><title>right</title><path
              d="M290 250l-180-190-30 30 150 160-150 150 30 30 180-180z"
            /></svg
          >
        </a>
      </div>
    </div>
    <div class={tw("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")}>
      {#each recentlyPlayed as song, index}
        <li>{index}</li>
      {/each}
    </div>
    <h2 class={tw("flex flex-col items-center justify-center mt-16")}>
      <svg
        class={tw("text-gray-700 h-6 opacity-10 w-20")}
        role="img"
        viewBox="0 0 136 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"
        />
      </svg>
    </h2>
  {/if}
</div>
