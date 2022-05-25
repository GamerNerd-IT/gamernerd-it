<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useFeedStore} from "@/store/feed";
import {websiteSources} from "@/config";

const feed = useFeedStore();
feed.addBulkFeed(websiteSources);

</script>

<template>
  <div class="space-y-20">
    <header>
      <header-component />
    </header>
    <div class="bg-slate-100">
      <div class="max-w-7xl mx-auto overflow-x-hidden">
        <RouterView />
      </div>
    </div>
    <footer>
      <footer-component />
    </footer>
  </div>
</template>

<style></style>
