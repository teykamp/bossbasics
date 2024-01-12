<template>
  <div v-if="data.index" class="flex items-center justify-center">
    <div class="bg-white rounded-lg w-5/6 mb-6 animate" style="font-family: Inter;">
      <div class="flex space-x-4">
        <div :class="`flex-1 ${textDisplayDirection === 'left' ? '' : 'order-2'}`">
          <div class="ml-5">
            <div class="flex items-end">
              <div class="mr-6">
                <circle class="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center">
                  <span class="text-white font-bold" style="font-size: 160px;">{{ data.index }}</span>
                </circle>
              </div>
              <div>
                <h3 class="font-extralight" style="font-size: 30px;">{{ data.timeRange }}</h3>
                <h2 class="font-extrabold leading-none mb-6" style="font-size: 60px;">{{ data.title }}</h2>
              </div>
            </div>
            <p class="mt-12 mx-2" style="font-size: 25px;">{{ data.body }}</p>
          </div>
        </div>

        <div :class="`flex-1 flex ${textDisplayDirection === 'left' ? 'justify-start' : 'justify-end'}`">
          <div class="relative overflow-hidden">
            <div 
              class="absolute inset-0"
              :style="`background: linear-gradient(to ${textDisplayDirection}, rgba(255, 255, 255, 0) 80%, #ffffff 99%); pointer-events: none;`"  
            ></div>

            <img 
              :src="data.image"
              :class="`overflow-hidden ${textDisplayDirection === 'left' ? 'rounded-r-lg' : 'rounded-l-lg'} w-screen h-full object-cover`"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { animateOnScroll } from '../functions/scrollAnimations'

const cardAnimation = animateOnScroll('animate')
cardAnimation()

type PhaseCard = {
  index: number,
  timeRange: string,
  title: string,
  body: string,
  image: string,
}

const props = defineProps<{
  data: PhaseCard
}>()

const textDisplayDirection = computed(() => {
  return props.data.index % 2 === 0 ? 'right' : 'left'
})

const animationDirection = computed(() => {
  return props.data.index % 2 === 0 ? '5%' : '-5%'
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

@keyframes slideIn {
  0% {
    transform: translateX(v-bind(animationDirection));
    opacity: 0%
  }
  100% {
    transform: translateX(0);
    opacity: 100%

  }
}
.animate {
  opacity: 0%;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  animation-delay: 200ms;
  animation-name: slideIn;
  animation-fill-mode: forwards;
}
</style>