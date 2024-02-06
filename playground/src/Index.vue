<template>
  <div class="flex flex-col min-h-screen bg-background">
    <Header />
    <Container />
    <StatusBar />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import StatusBar from '@/components/StatusBar.vue';
</script>
