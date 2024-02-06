<template>
  <div
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-t border-border"
  >
    <div class="container flex justify-between h-10 items-center">
      <span>状态栏</span>

      <div class="flex items-center justify-end space-x-4">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/radix-vue/shadcn-vue',
    icon: 'i-radix-icons:github-logo',
    ariaLabel: 'i-radix-icons:github-logo'
  }
];
</script>
