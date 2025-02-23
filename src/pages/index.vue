<script setup lang="ts" generic="T extends any, O extends any">
import ProjectsCarousel from '~/components/ProjectsCarousel.vue'

defineOptions({
  name: 'IndexPage',
})

const options = {
  licenseKey: 'gplv3-license',
  anchors: ['home', 'projects', 'contributions', 'education', 'contact'],
  navigation: true,
  navigationTooltips: ['Home', 'Projects', 'Contributions', 'Education', 'Contact'],
  credits: { enabled: false },
}
</script>

<template>
  <div>
    <full-page id="fullpage" :options="options">
      <div class="section">
        <Welcome />
      </div>

      <div class="section">
        <div>
          <h2 text-5xl font-700>
            Proyectos
          </h2>
          <h3 pb-3 text-3>
            Debido a la naturaleza del desarrollo de código abierto colaborativo, es posible que algunos enlaces no esten en funcionamiento
          </h3>
          <ProjectsCarousel />
        </div>
      </div>

      <!-- <div class="section">
        <Contributions />
      </div> -->

      <div class="section">
        <Education />
      </div>

      <div class="section">
        <Contact />
      </div>
    </full-page>
  </div>
</template>
