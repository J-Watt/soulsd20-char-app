<template>
  <div class="main-tab min-w-fit">
    <div class="flex flex-col h-full text-white overflow-auto">
      <Tab
        :active-tab="activeTab"
        tab-identifier="character"
        icon-name="character"
        @tab="emitTab($event)"
      />
      
      <Tab
        :active-tab="activeTab"
        tab-identifier="inventory"
        icon-name="backpack"
        @tab="emitTab($event)"
      />
      
      <Tab
        :active-tab="activeTab"
        tab-identifier="equipment"
        icon-name="armor"
        @tab="emitTab($event)"
      />
      
      <Tab
        :active-tab="activeTab"
        tab-identifier="spells"
        icon-name="book"
        @tab="emitTab($event)"
      />
      
      <Tab
        :active-tab="activeTab"
        tab-identifier="feats"
        icon-name="tarot"
        @tab="emitTab($event)"
      />
  
      <Tab
        :active-tab="activeTab"
        tab-identifier="notes"
        icon-name="notes"
        @tab="emitTab($event)"
      />
      
      <Tab
        :active-tab="activeTab"
        tab-identifier="compendium"
        icon-name="dictionary"
        @tab="emitTab($event)"
      />
      
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  activeTab: {
    type: String,
    default: 'character'
  }
})

const emit = defineEmits(['tab'])

function emitTab(tabOption: string) {
  emit('tab', tabOption)
}
</script>

<style scoped>
  .taboption {
    filter: brightness(0) invert(0.9);
  }
  .selected {
    filter: none;
  }
</style>