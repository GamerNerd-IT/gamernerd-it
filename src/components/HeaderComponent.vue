<template>
  <div class="flex w-full h-20 text-white bg-blue-700 bg-opacity-95 shadow-md items-center justify-center fixed top-0">
    <img v-lazy="logo" alt="logo" class="w-full max-w-sm" width="400" height="400" rel="preload" />
  </div>
</template>

<script setup>
  import logo from '@/assets/logo.webp';
</script>

<style></style>
