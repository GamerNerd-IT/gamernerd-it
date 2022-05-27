<template>
    <div v-html="adsStore.ads[0].iframe">
  </div>
</template>

<script setup>
/* import { defineProps, toRefs } from "vue";
 */import {useAdsStore} from "@/store/ads";
/* const props = defineProps({
  index: {
    type: Number,
    default: () => {},
  },
}); */
const adsStore = useAdsStore();
</script>

<style>

</style>