<template>
  <div class="w-full h-full bg-blackish">
    <!-- Top bar -->
    <TopBar class="border-b-2 border-gray-400"/>
    <TabOptions :active-tab="activeTab" @tab="activeTab = $event"/>

    <!-- Tabs -->
    <CharacterTab v-if="activeTab === 'character'" class="w-2/4"/>
    <InventoryTab v-if="activeTab === 'inventory'" class="w-2/4"/>
    <EquipmentTab v-if="activeTab === 'equipment'" class="w-2/4"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'app'
})

const activeTab = ref('character')
const tabOptions = ['character', 'inventory', 'equipment', 'skills', 'proficiencies', 'feats', 'compendium']
</script>