<script setup lang="ts" generic="T extends any, O extends any">
import ProjectsCarousel from '~/components/ProjectsCarousel.vue';

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
      <div class="section">
        <Welcome />
      </div>

      <div class="section">
        <div>
          <h2 text-5xl font-700>
            Proyectos
          </h2>
          <h3 text-3 pb-3>
            Debido a la naturaleza del desarrollo de código abierto colaborativo, es posible que algunos enlaces no esten en funcionamiento
          </h3>
          <ProjectsCarousel />
        </div>
      </div>

      <!-- <div class="section">
        <Contributions />
      </div>

      <div class="section">
        <Contact />
      </div>

      <div class="section">
        <Education />
      </div> -->
    </full-page>
  </div>
</template>
