<script setup lang="ts">
import { NTag } from 'naive-ui'

// mouse movement colour changes
const x = ref(0)
function onMousemove(e: any) {
  x.value = e.clientX
}

// hiding help tip
const helpVisibility = ref(true)
const handleClose = () => helpVisibility.value = false
</script>

<template>
  <div :style="{ color: `hsl(${x / 25 + 150}, 80%, 50%)` }" h-screen flex flex-col justify-center @mousemove="onMousemove">
    <h1 text-6xl font-700>
      ¡Hola, recruiter!
    </h1>
    <h2 text-xl font-500>
      Bienvenido a mi portfolio
    </h2>
    <!-- user tip tag -->
    <div v-if="helpVisibility" w-xs fixed bottom-4 mx-auto inset-x-0>
      <n-tag
          type="info"
          closable
          @close="handleClose">
          Desplázate hacia abajo
      </n-tag>
    </div>
    <div w-xs fixed bottom-4 mx-auto inset-x-0>
      <!-- <o-alert type="primary" light :description="('Desplazate hacia abajo')" center closable /> -->
    </div>
    <!-- <o-icon self-center o-primary name="i-carbon-chevron-down" /> -->
  </div>

</template>