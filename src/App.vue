<script setup>

import BlankLayout from "@/layout/BlankLayout.vue";
import Layout from "@/layout/Layout.vue";

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

function currentLayout()  {
  const components = {
    BlankLayout: BlankLayout,
    Layout: Layout,
  };

  return components[route.meta.layout];
}

</script>

<template>
  <VApp>
    <component :is="currentLayout()" />
  </VApp>
</template>
