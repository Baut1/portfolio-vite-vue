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
    <div v-if="helpVisibility" fixed inset-x-0 bottom-4 mx-auto w-xs>
      <NTag
        type="info"
        closable
        @close="handleClose"
      >
        Desplázate hacia abajo
      </NTag>
    </div>
    <!-- <o-icon self-center o-primary name="i-carbon-chevron-down" /> -->
  </div>
</template>

<style>
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  color: red;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: none;
}
</style>
