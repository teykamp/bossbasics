<template>
  <div class="relative h-screen bg-blue-500" style="z-index: -99">
    <div class="grid grid-cols-5 gap-4 h-screen">
      <FourPhases class="animate"/>
      <div class="col-span-1">
        <div class="flex mt-6" style="margin-left: -1px">
          <FourPhasesHeroImage 
            v-for="(image, index) in images"
            :key="index"
            :image="image.src"
            :index="index"
          />
        </div>
      </div>
    </div>
    <div 
      class="absolute top-40 bg-blue-600 transform skew-y-6" 
      style="height: 65%; z-index: -10; width: 100%"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import FourPhases from './FourPhases.vue'
import FourPhasesHeroImage from './FourPhasesHeroImage.vue';

const images = ref([
  {
    src: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e28403334c2bcc97780f_steps_boss.jpg',
  },
  {
    src: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/65451d4174ea75f254fb8380_pulaski_park.jpg',
  },
  {
    src: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e48351db774bed51ecb7_boss_job_key.jpg',
  },
  {
    src: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e48351db774bed51ecb7_boss_job_key.jpg',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>