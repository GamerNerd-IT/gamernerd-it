<template>
    <div class="flex justify-center">
      <iframe title="amazon-ads" :src="adsStore.ads[0].iframe" frameborder="0" scrolling="no" style="width:120px;height:240px" rel="preload" loading="lazy"></iframe>
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