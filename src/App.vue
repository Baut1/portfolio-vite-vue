<script setup lang="ts">
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
    <RouterView />
    <tetikus :options="tetikusOptions"/>
    <!-- <TheFooter /> -->
  </main>
</template>
