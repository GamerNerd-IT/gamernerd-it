<template>
  <div v-if="index % 3 === 0" class="flex flex-col w-full">
    <ads-component :index="index / 3"/>
  </div>
  <div class="flex flex-col w-full">
    <h2 class="text-2xl truncate mb-6 text-center">{{ articleJson.title }}</h2>
    <div class="flex flex-col justify-center items-center">
      <img
        v-lazy="articleJson.image"
        class="w-full h-full max-w-lg"
        :alt="articleJson.title"
        rel="preload"
        width="400"
        height="400"
      />
      <span class="text-slate-700 font-extralight self-start"
        >fonte:
        {{ articleJson.source }}
        <br/> {{articleJson.pubDate}}</span
      >
      <p class="text-gray-600 line-clamp-3">
        {{ articleJson.description }}
      </p>
    </div>

    <button
      class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl w-full self-center mb-16"
      @click="openInNewTab(articleJson.link)"
    >
      Leggi di più
    </button>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import AdsComponent from "@/components/AdsComponent.vue";
import RssParsify from "@saintbull/vue-rss-parsify";
const props = defineProps({
  feedGame: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: () => {},
  },
});
const { feedGame, index } = toRefs(props);
const findImage = () => {
  if(feedGame.value['media:content']){
    return feedGame.value['media:content'][0]['$'].url;
  }
  if(feedGame.value.description[0].match(/<img[^>]+src="([^">]+)"/)){
    return feedGame.value.description[0].match(/<img[^>]+src="([^">]+)"/)[1];
  }
/*   if(feedGame.value.enclosure[0].$['url']){
    return feedGame.value.enclosure[0].$['url'];
  } */
};
const articleJson = {
  title: feedGame.value.title[0],
  link: feedGame.value.link,
  source: new URL(feedGame.value.link).hostname,
  description: RssParsify.parseHTML(feedGame.value.description[0]),
  image: findImage(),
  pubDate: new Date(feedGame.value.pubDate[0]).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }),
}
const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
</script>

<style></style>
