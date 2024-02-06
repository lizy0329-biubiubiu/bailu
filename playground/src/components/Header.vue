<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
  >
    <div class="container flex justify-between h-14 items-center">
      <span>bailu 低代码引擎</span>

      <div class="flex items-center justify-end space-x-4">
        <!-- <Button
          variant="outline"
          class="w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center"
          @click="isOpen = true"
        >
          <div class="flex items-center">
            <SearchIcon class="w-4 h-4 mr-2 text-muted-foreground" />
            <span class="text-muted-foreground"> Search for anything... </span>
          </div>
          <div class="flex items-center gap-x-1">
            <Kbd> <span>⌘</span>K </Kbd>
          </div>
        </Button> -->

        <div class="flex items-center gap-x-1">
          <Button
            v-for="link in links"
            as="a"
            :href="link.href"
            target="_blank"
            class="flex items-center justify-center"
            :aria-label="link.ariaLabel"
            :variant="'ghost'"
            :size="'icon'"
          >
            <div :class="link.icon" class="w-[20px] h-[20px]" />
          </Button>

          <Button
            class="flex items-center justify-center"
            aria-label="Toggle dark mode"
            :variant="'ghost'"
            :size="'icon'"
          >
            <!-- <component
              :is="isDark ? 'i-radix-icons-moon' : 'i-radix-icons-sun'"
              class="w-[20px] h-[20px]"
              @click="toggleDark()"
            /> -->
            <div
              class="i-radix-icons:sun dark:i-radix-icons:moon !w-[20px] !h-[20px] text-foreground"
              @click="toggleDark()"
            />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { Button } from '@/components/ui/button';

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/radix-vue/shadcn-vue',
    icon: 'i-radix-icons:github-logo',
    ariaLabel: 'i-radix-icons:github-logo'
  }
];

// const isOpen = ref(false);

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
