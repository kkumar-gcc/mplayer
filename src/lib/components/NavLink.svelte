<script lang="ts">
  import { tw } from "$lib/twind.js";

  export let active = false;

  let className =
    active ?? false
      ? `${tw(
          "inline-flex items-center px-1 pt-1 border-b-2 border-skin-600 text-base font-medium leading-5 text-gray-900 focus:outline-none focus:border-skin-700 transition duration-150 ease-in-out"
        )}`
      : `${tw(
          "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
        )}`;

  /**
   * You can use reserved words as prop names.
   * https://svelte.dev/docs#component-format-script-1-export-creates-a-component-prop
   */
  export { className as class };
  export let id = "";
  export let href = "#";
</script>

<a {href} {id} class={`${className}`}>
  <slot />
</a>
