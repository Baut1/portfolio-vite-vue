<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const options = {
        licenseKey: 'gplv3-license',
        anchors: ['home', 'projects', 'contributions', 'contact', 'education'],
        navigation: true,
        navigationTooltips: ['Home', 'Projects', 'Contributions', 'Contact', 'Education'],
        credits: { enabled: false },
}
</script>

<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>
