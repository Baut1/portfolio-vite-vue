<script setup lang="ts">
import { NTag } from 'naive-ui'

// mouse movement colour changes
const x = ref(0)
function onMousemove(e: any) {
  x.value = e.clientX
}

const arr = ['Bienvenido/a a mi portfolio', 'Explora mi trabajo', 'Transformemos ideas en realidad', '¡Que tengas un gran día!']

// hiding help tip
const helpVisibility = ref(true)
const handleClose = () => helpVisibility.value = false
</script>

<template>
  <div :style="{ color: `hsl(${x / 25 + 150}, 80%, 50%)` }" h-screen flex flex-col justify-center @mousemove="onMousemove">
    <h1 text-6xl font-700>
      Hola, recruiter
    </h1>
    <h2 text-xl font-500>
      <VueWriter :array="arr" :type-speed="80" :erase-speed="50" />
    </h2>
    <!-- user tip tag -->
    <Transition>
      <div v-if="helpVisibility" fixed inset-x-0 bottom-4 mx-auto w-xs>
        <NTag
          type="info"
          closable
          @close="handleClose"
        >
          Desplázate hacia abajo
        </NTag>
      </div>
    </Transition>
    <!-- <o-icon self-center o-primary name="i-carbon-chevron-down" /> -->
  </div>
</template>

<style>
/* help tip */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
