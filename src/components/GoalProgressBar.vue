<script setup lang="ts">
const startDate = new Date('2023-06-30T00:00:00').getTime()
const endDate = new Date('2025-11-30T00:00:00').getTime()
const today = new Date().getTime()

const totalDuration = endDate - startDate
const elapsedTime = today - startDate
const progressPercentage = Math.min((elapsedTime / totalDuration) * 100, 100) // Capped at 100%
</script>

<template>
  <div class="relative mx-auto mb-3 h-4 w-1/2 overflow-hidden rounded-full bg-gray-200">
    <!-- Progress bar fill -->
    <div
      class="h-full bg-blue-500 transition-all duration-300"
      :style="{ width: `${progressPercentage}%` }"
    />
    <!-- Centered progress text -->
    <span class="absolute inset-0 flex items-center justify-center text-white font-semibold">
      {{ progressPercentage.toFixed(1) }}%
    </span>
  </div>
</template>
