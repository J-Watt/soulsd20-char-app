<template>
  <div class="w-full h-full bg-dislight">
    <!-- Top bar -->
    <TopBar class=" bg-disdark"/>
    <div class="flex">
      <TabOptions :active-tab="activeTab" @tab="activeTab = $event" class="bg-disdark" />
  
      <!-- Tabs -->
      <div class="flex-1">
        <CharacterTab v-if="activeTab === 'character'" class="w-2/4"/>
        <InventoryTab v-if="activeTab === 'inventory'" class="w-2/4"/>
        <EquipmentTab v-if="activeTab === 'equipment'" class="w-2/4"/>
        <SpellsTab v-if="activeTab === 'spells'" class="w-2/4"/>
        <FeatsTab v-if="activeTab === 'feats'" class="w-2/4"/>
        <NotesTab v-if="activeTab === 'notes'" class="w-2/4"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'app'
})

const activeTab = ref('character')
const tabOptions = ['character', 'inventory', 'equipment', 'spells', 'feats', 'notes', 'compendium']
</script>

<style lang="less">
.main-tab {
  height: calc(100vh - 166px);
  overflow: hidden;

  scrollbar-width: normal;
  scrollbar-color: #777 #555;

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #7775;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #777;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #5555;
  }
  
  ::-webkit-scrollbar-track:hover {
    background-color: #555;
  }
}
</style>