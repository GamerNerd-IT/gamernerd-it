<template>
  <div class="flex flex-col w-full">
    <h1 class="text-2xl truncate mb-6">{{ feedGame.title[0] }}</h1>
    <div>
      <p class="text-gray-600">{{ RssParsify.parseHTML(feedGame.description[0])}}</p>
      <span class="text-blue-500">fonte: {{
        /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim.exec(
          feedGame.link
        )[0].replace(/.*www./, "")
      }}</span>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl w-full self-center"
      @click="openInNewTab(feedGame.link)"
    >
      Read more
    </button>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import RssParsify from '@saintbull/vue-rss-parsify'
defineProps({
  feedGame: {
    type: Object,
    default: () => {},
  },
});
const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
</script>

<style></style>
