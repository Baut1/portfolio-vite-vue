<script setup lang="ts">
import { NButton, NResult } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <NResult
    h-screen flex flex-col justify-center
    status="404"
    title="404 Not Found"
    description="No deberías estar aquí..."
    size="huge"
  >
    <template #footer>
      <NButton @click="goHome">
        Volver
      </NButton>
    </template>
  </NResult>
</template>
