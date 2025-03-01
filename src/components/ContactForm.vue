<script setup lang="ts">
import { NCard, NMessageProvider } from 'naive-ui'
import ContactFormMessageContent from './ContactFormMessageContent.vue'
</script>

<template>
  <NMessageProvider>
    <NCard embedded hoverable w-xs>
      <ContactFormMessageContent />
    </NCard>
  </NMessageProvider>
</template>
