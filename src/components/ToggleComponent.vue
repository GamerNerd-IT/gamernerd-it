<template>
  <div class="flex justify-start p-2 ">
    <input
      type="checkbox"
      v-bind:checked="feedStatus"
      v-bind:id="website.label"
      v-on:change="toggleCheckbox(website, $event)"
      class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none bg-no-repeat bg-center bg-contain float-left mr-2 mt-2 cursor-pointer"
    />
    <label class="inline-block text-gray-800 text-2xl font-extralight" v-bind:for="website.label">
      {{ website.label }}
    </label>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import {useFeedStore} from "@/store/feed";
 const props = defineProps({
  website: {
    type: Object,
    default: () => {},
  },
});
const feed = useFeedStore();
const { website } = toRefs(props);
const feedStatus = feed.getFeedStatus(website.value)
const toggleCheckbox = (website) => {
 feed.setFeed(website);
};
</script>

<style></style>
