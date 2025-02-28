<script setup lang="ts">
import { NCard, NMessageProvider } from 'naive-ui'
import ContactFormMessageContent from './ContactFormMessageContent.vue'
</script>

<template>
  <NMessageProvider>
    <NCard title="Contáctame" w-auto>
      <ContactFormMessageContent />
    </NCard>
  </NMessageProvider>
</template>
