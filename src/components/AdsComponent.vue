<template>
    <div v-html="adsStore.ads[0].iframe">
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import {useAdsStore} from "@/store/ads";
const props = defineProps({
  index: {
    type: Number,
    default: () => {},
  },
});
const { index } = toRefs(props);
console.log(index.value);
const adsStore = useAdsStore();
console.log(adsStore.ads[0].iframe);
</script>

<style>

</style>