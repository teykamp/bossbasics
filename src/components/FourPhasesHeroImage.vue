<template>
  <img 
    :src="image"
    alt="Image"
    :class="`object-cover mx-1 rounded-3xl animate ${direction ? 'mt-48' : ''}`"
    style="aspect-ratio: 1; height: 75vh; width: 45%"
  />
</template>


<script setup lang="ts">
import { computed } from 'vue'

import { animateOnScroll } from '../functions/scrollAnimations'

const cardAnimation = animateOnScroll('animate')
cardAnimation()

const props = defineProps<{
  index: number,
  image: string
}>()

const direction = computed(() => {
  return props.index % 2 === 0
})

const animationDirection = computed(() => {
  return props.index % 2 === 0 ? '150px' : '-150px'
})

</script>

<style scoped>
@keyframes slideIn {
  0% {
    transform: translateY(v-bind(animationDirection));
    opacity: 0%
  }
  100% {
    transform: translateY(0);
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