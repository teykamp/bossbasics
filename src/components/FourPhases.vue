<template>
  <div 
    class="col-span-3 grid grid-cols-2 mt-56" 
    style="margin-left: 20%; font-family: Inter;"
  >
    <div 
      class="col-span-1" 
      style="margin-left: 25%"
    >
      <h3 
        class=" absolute font-semibold text-white" 
        style="font-size: 50px; transform: translateX(-50px);"
      >{{ our }}</h3>
      <div
        style="background: linear-gradient(to bottom, #C60000, #F6B05C); height: 50vh; width: 300px; background-clip: padding-box; -webkit-background-clip: text; color: transparent;"
      >
        <h1 
          class="font-black -mt-36" 
          style="font-size: 400px;"
        >{{ four }}</h1>
      </div>
      <h2 
        class="font-semibold text-white -ml-12" 
        style="font-size: 80px;"
      >{{  phases }}</h2>
    </div>
    <div class="col-span-1">
      <p 
        class="font-light text-white w-64 ml-8 -mt-2" 
        style="font-size: 50px; line-height: 52px;"
      >{{  sideText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const our = ref('OUR')
const four = ref('4')
const phases = ref('PHASES')
const sideText = ref('To Helping Formerly Incarcerated Individuals Walk The Path From Prison to Prosperity')
</script>