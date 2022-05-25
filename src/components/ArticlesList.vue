<template>
  <div class="p-2">
    <div class="">
      <websites-list :websiteSources="feeds" :open="status" />
    </div>
    <Article
      v-for="feedGame in rss"
      :feedGame="feedGame"
      v-bind:key="feedGame.guid"
    />
  </div>
</template>

<script setup>
import Article from "@/components/ArticleComponent.vue";
import WebsitesList from "@/components/WebsitesList.vue";
import { useFeedStore } from "@/store/feed";
import {useFilterStore} from "@/store/filter";
import { storeToRefs } from "pinia";
const feedStore = useFeedStore();
const { rss, feeds } = storeToRefs(feedStore);
const filterStore = useFilterStore();
const { status } = storeToRefs(filterStore);
feedStore.setRssFeed();
</script>

<style></style>

<style></style>
