<script setup lang="ts">
import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui'
import TheHeader from './components/TheHeader.vue'

const isDark = useDark()
const naiveTheme = computed(() => (isDark.value ? darkTheme : lightTheme))

const tetikusOptions = {
  borderWidth: 3,
  borderColor: 'DarkSlateGray',
  invertColor: true,
  hideOnOut: true,
  lerp: 0.15,
}
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <TheHeader />
    <NConfigProvider :theme="naiveTheme">
      <RouterView />
    </NConfigProvider>
    <tetikus :options="tetikusOptions" />
    <!-- <TheFooter /> -->
  </main>
</template>
