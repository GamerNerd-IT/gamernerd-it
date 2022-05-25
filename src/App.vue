<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useFeedStore} from "@/store/feed";
const websiteSources = [
  {
    label: "eurogamer.it",
    url: "https://eurogamer.it/feed",
    active: true,
  },
  {
    label: "everyeye.it",
    url: "https://www.everyeye.it/feed/feed_news_rss.asp",
    active: false,
  },
  {
    label: "ign.com",
    url: "https://it.ign.com/feed.xml",
    active: false,
  },
  {
    label: "gamepare.it",
    url: "https://gamepare.it/feed/",
    active: false,
  }
];
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
