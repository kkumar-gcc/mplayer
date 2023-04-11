<script lang="ts">
    import { tw } from "$lib/twind.js";
  
    export let vertical = true;
  
    let className =
      vertical ?? true
        ? `${tw("flex flex-col-reverse items-stretch justify-center p-4 sm:p-6")}`
        : `${tw(
            "flex flex-col-reverse items-stretch justify-center p-4 sm:p-6 sm:flex-row"
          )}`;
    export { className as class };
    export let item = [];
    console.log(item);
  </script>
  
  <div
    class={`${vertical ? "" : tw("first:mt-0 ")} ${tw(
      " relative  mt-8  mt-3 w-full px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm hover:shadow-md"
    )}`}
  >
    <div class={className}>
      <div class={tw("basis-2/3 mt-2 relative leading-normal sm:mt-0 sm:pr-4")}>
        <a href="/playlist/" class="link link-secondary">
          <h5
            class="mb-2 text-xl font-bold line-clamp-3 tracking-wide text-gray-900 dark:text-white"
          >
            {item?.title}
          </h5>
        </a>
        <p
          class={tw(
            "mt-3 text-sm font-bold text-gray-600 truncate dark:text-white"
          )}
        >
          {item?.subtitle}
        </p>
        <slot />
      </div>
      <div class={tw("basis-1/3 relative text-center min-h-fit")}>
        <img
          class={`${
            vertical
              ? tw("min-h-[120px] max-h-[150px]  mb-2")
              : tw("sm:absolute sm:top-0 sm:left-0 sm:min-h-full")
          } ${tw(
            "block relative w-full rounded-xl   object-cover shadow-md hover:shadow-sm"
          )}`}
          src={item?.images?.coverarthq}
          alt=""
        />
        <!-- {item?.images[0].coverarthq} -->
      </div>
    </div>
  </div>
  