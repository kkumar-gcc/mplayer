<script lang="ts">
  import { tw } from "$lib/twind.js";
  import ApplicationLogo from "./ApplicationLogo.svelte";
  import NavLink from "./NavLink.svelte";
</script>

<nav class={tw("border-b border-gray-100 z-10 border-t")}>
  <!-- Primary Navigation Menu -->
  <div class={tw("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
    <div class={tw("flex justify-between h-20")}>
      <div class={tw("flex")}>
        <!-- Logo -->
        <div class={tw("shrink-0 flex items-center")}>
          <a href="/home">
             <!-- Replace this with ApplicationLogo component -->
            <ApplicationLogo class={tw("block h-16 w-auto fill-current text-skin-500")}  />
           </a>
        </div>
        <!-- Navigation Links -->
        <div class={tw("hidden space-x-8 sm:-my-px sm:ml-10 lg:flex")}>
          <!-- <NavLink href="/home">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/about">About</NavLink> -->
        </div>
      </div>

      <!-- Hamburger -->
      <div class="-mr-2 flex items-center lg:hidden">
        <button
          class={tw(
            "ml-3 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          )}
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              class="inline-flex"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              class="hidden"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
