<template>
  <splitpanes
    class="flex-1 divide-dotted divide-[hsl(var(--accent-foreground))] [&>*:not(.splitpanes\_\_pane)]:border-r-1"
  >
    <pane min-size="20" max-size="25" class="!bg-transparent">
      <LeftSideBar>
        <Button>Left</Button>
      </LeftSideBar>
    </pane>
    <pane class="!bg-transparent">
      <Editor />
    </pane>
    <pane min-size="20" max-size="25" class="!bg-transparent"
      ><RightSideBar>
        <Button>Right</Button>
      </RightSideBar>
    </pane>
  </splitpanes>
</template>

<script setup lang="ts">
import Editor from '@/components/Editor.vue';
import { Button } from '@/components/ui/button';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
</script>
