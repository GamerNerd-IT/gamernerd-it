<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <header>
    <header-component />
  </header>
  <div class="max-w-7xl mx-auto bg-slate-100">
    <RouterView />
  </div>
</template>

<style></style>
