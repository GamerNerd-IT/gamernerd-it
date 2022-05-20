<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div class="space-y-20">
    <header>
      <header-component />
    </header>
    <div class="max-w-7xl mx-auto overflow-x-hidden bg-slate-100">
      <RouterView />
    </div>
  </div>
</template>

<style></style>
