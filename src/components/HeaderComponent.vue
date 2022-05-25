<template>
  <div class="flex w-full h-20 text-white bg-blue-700 bg-opacity-95 shadow-md items-center justify-center fixed top-0">
    <img v-lazy="logo" alt="logo" class="w-full max-w-sm" width="400" height="400" rel="preload" />
    <button class="w-6 h-6 mr-10" @click="filter.toggleFilter">
      <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
  import logo from '@/assets/logo.webp';
  import {useFilterStore} from "@/store/filter";
  const filter = useFilterStore();
</script>

<style></style>
