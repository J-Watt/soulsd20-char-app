<template>
  <div class="w-full h-full bg-black">
    <!-- Top bar -->
    <TopBar class="border-b-2 border-gray-400"/>
    <TabOptions :active-tab="activeTab" @tab="activeTab = $event"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'app'
})

const activeTab = ref('character')
const tabOptions = ['character', 'inventory', 'equipment', 'skills', 'proficiencies', 'feats', 'compendium']
</script>