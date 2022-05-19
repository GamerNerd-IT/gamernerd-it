<script setup>
import ArticlesList from "@/components/ArticlesList.vue";
</script>

<template>
  <Suspense>
    <ArticlesList />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
