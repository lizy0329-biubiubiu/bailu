<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
  >
    <div class="container flex justify-between h-14 items-center">
      <button
        class="inline-flex items-center justify-center rounded-md whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 py-2 mr-2 px-2 text-base flex-shrink-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden mr-2 px-2 text-base flex-shrink-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-1098"
        data-state="closed"
      >
        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="h-5 w-5">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8 2h5.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H8V2ZM7 2H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H7V2Zm-7 .5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10Z"
            clip-rule="evenodd"
          ></path></svg
        ><span class="sr-only">Toggle Menu</span>
      </button>
      <div class="mr-4 hidden md:flex">
        <a href="/" class="mr-6 flex items-center space-x-2"
          ><svg
            class="h-6 w-6"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_102_1338)">
              <path
                d="M208 128L128 208"
                stroke="#41B883"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M192 40L40 192"
                stroke="#41B883"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_102_1338">
                <rect width="256" height="256" fill="white"></rect>
              </clipPath>
            </defs></svg
          ><span class="font-bold"> shadcn-vue </span></a
        >
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <a
            href="/docs/introduction"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Documentation</a
          ><a
            href="/docs/components/accordion"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Components</a
          ><a
            href="/themes"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Themes</a
          ><a
            href="/examples/dashboard"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Examples</a
          ><a
            href="https://github.com/radix-vue/shadcn-vue"
            target="_target"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >GitHub</a
          >
        </nav>
      </div>
      <div class="flex items-center justify-end space-x-4">
        <button
          class="items-center justify-center rounded-md whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 mr-2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path></svg
            ><span class="text-muted-foreground"> Search for anything... </span>
          </div>
          <div class="flex items-center gap-x-1">
            <kbd
              class="inline-flex items-center pointer-events-none h-5 select-none items-center gap-1 rounded border border-border bg-muted font-sans font-medium min-h-[20px] text-[11px] h-5 px-1"
              ><span>⌘</span>K
            </kbd>
          </div>
        </button>
        <div class="flex items-center gap-x-1">
          <a
            class="inline-flex items-center justify-center rounded-md whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            href="https://github.com/radix-vue/shadcn-vue"
            target="_blank"
            ><svg
              viewBox="0 0 15 15"
              width="1.2em"
              height="1.2em"
              class="w-[20px] h-[20px]"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A6.963 6.963 0 0 1 7.5 3.756A6.97 6.97 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25Z"
                clip-rule="evenodd"
              ></path></svg></a
          ><button
            class="rounded-md whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            <div class="w-[20px] h-[20px] text-foreground"></div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

console.log('hello script setup');
</script>
