<template>
  <div class="flex flex-col w-full">
    <h1 class="text-2xl truncate mb-6 text-center">{{ articleJson.title }}</h1>
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
        {{
          /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim
            .exec(articleJson.link)[0]
            .replace(/.*www./, "")
        }}</span
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
import RssParsify from "@saintbull/vue-rss-parsify";
const props = defineProps({
  feedGame: {
    type: Object,
    default: () => {},
  },
});
const { feedGame } = toRefs(props);
const articleJson = {
  title: feedGame.value.title[0],
  link: feedGame.value.link,
  description: RssParsify.parseHTML(feedGame.value.description[0]),
  image: feedGame.value['media:content'] ? feedGame.value['media:content'][0].$.url : feedGame.value.description[0].match(/<img[^>]+src="([^">]+)"/)[1],
}
const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
</script>

<style></style>
