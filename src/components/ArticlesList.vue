<template>
  <div
    v-for="feedGame in feedGames"
    v-bind:key="feedGame.guid"
    class="p-2 mb-16 md:mb-24"
  >
    <Article :feedGame="feedGame" />
  </div>
</template>

<script setup>
import Article from "@/components/ArticleComponent.vue";
import RssParsify from '@saintbull/vue-rss-parsify';

var feedGames = await RssParsify.parseToJSON(
  'https://www.gamesource.it/feed/'
);
</script>

<style></style>


<style></style>
