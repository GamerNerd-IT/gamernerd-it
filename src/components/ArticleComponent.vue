<template>
  <div class="flex flex-col w-full text-center">
    <h1 class="text-2xl truncate mb-6">{{ feedGame.title[0] }}</h1>
    <div class="flex flex-col justify-center items-center">
      <img :src="feedGameImg" class="max-w-lg">
      <p class="text-gray-600">
        {{ RssParsify.parseHTML(feedGame.description[0]) }}
      </p>
      <span class="text-blue-500 self-start"
        >fonte:
        {{
          /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim
            .exec(feedGame.link)[0]
            .replace(/.*www./, "")
        }}</span
      >
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl w-full self-center"
      @click="openInNewTab(feedGame.link)"
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
const {feedGame} = toRefs(props);
const feedGameImg = feedGame.value['post-thumbnail'][0].url[0]
const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
</script>

<style></style>
