<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { NButton, NForm, NFormItem, NInput, useMessage } from 'naive-ui'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)
const message = useMessage()

async function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    message.warning('Todos los campos son obligatorios')
    return
  }

  loading.value = true

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'defaultServiceId',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'defaultTemplateId',
      form.value,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'defaultPublicKeyId',
    )

    message.success('Mensaje enviado con éxito')
    form.value = { name: '', email: '', message: '' } // Reset form
  }
  catch (error) {
    message.error(`Error al enviar el mensaje: ${JSON.stringify(error)}`)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <NForm @submit.prevent="submitForm">
    <NFormItem label="Nombre">
      <NInput v-model:value="form.name" placeholder="Tu nombre" />
    </NFormItem>

    <NFormItem label="Correo Electrónico">
      <NInput v-model:value="form.email" placeholder="tucorreo@email.com" />
    </NFormItem>

    <NFormItem label="Mensaje">
      <NInput v-model:value="form.message" type="textarea" placeholder="Escribe tu mensaje" />
    </NFormItem>

    <NButton :loading="loading" block attr-type="submit">
      Enviar
    </NButton>
  </NForm>
</template>
