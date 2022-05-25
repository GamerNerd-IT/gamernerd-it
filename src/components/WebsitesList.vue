<template>
  <div v-show="open" class="flex justify-center flex-col mb-10 items-start border-b-[1px]" >
    <div v-for="website in websiteSources" v-bind:key="website.label">
      <toggle-component :website="website" />
    </div>
  </div>
</template>

<script setup>
  import ToggleComponent from "@/components/ToggleComponent.vue";
  import { defineProps, toRefs } from "vue";
 
  const props = defineProps({
    websiteSources : {
      type: Array,
      default: () => [],
    },
    open : {
      type: Boolean,
      default: false,
    },
  });
  
  const { websiteSources, open } = toRefs(props);
</script>

<style></style>
