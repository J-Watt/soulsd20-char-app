<template>
  <div class="px-3 text-white">
    <div class="flex w-full">
      <div class="flex w-full justify-center">
        <!-- Resistances & Calc -->
        <div class="flex xs:flex-1  justify-between py-3 text-sm">
          <!-- Damage calculator -->
          <div class="flex justify-between w-4/6 pl-3" style="max-width: 670px">
            <DamageCalculator />
          </div>
  
          <!-- Status Resistances -->
          <div class="flex flex-1" style="max-width: 380px;">
            <div class="flex justify-between pl-12 w-full">
              <h1 class="text-lg mr-8">
                Statuses
              </h1>
    
              <div class="flex flex-col space-y-1 mr-4 w-full h-full">
                <StatusOption name="Curse" />
                <StatusOption name="Frost" />
                <StatusOption name="Bleed" />
                <StatusOption name="Poison" />
                <StatusOption name="Toxic" />
                <StatusOption name="Poise" />
              </div>
            </div>
          </div>
        </div>
  
        <!-- HP/AP/FP -->
        <div class="w-1/3 min-w-fit border-r border-l">
          <ActiveCombatValueTracker />
        </div>
      </div>
      <!-- Character -->
      <div class="flex justify-self-end items-center min-w-fit ml-4">
        <div class="flex items-center mr-4 w-fit max-w-[150px] text-lg 2xl:text-2xl text-right h-full text-white">
          {{ playerStore.Name }}
        </div>
  
        <div class="flex justify-center items-center mr-4">
          <!-- <iframe
            :src="blah"
            @click="dl"
          /> -->
          <img src="@/img/ok.jpg" class="max-h-24 lg:max-h-32">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~~/store/player';
import image from "@/img/ok.jpg"

const playerStore = usePlayerStore()

const blah: any = ref('')

onMounted(()=>{
  const reader = new FileReader()
  console.log(image)

  reader.onloadend = () => {
    blah.value = reader.result
  }

  const blob = new Blob([image], {
    type: 'text/html'
  })
  reader.readAsDataURL(blob)
})
</script>

<style lang="less" scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>