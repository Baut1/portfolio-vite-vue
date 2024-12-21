<script setup lang="ts">
import { NCard, NButton } from 'naive-ui'
import GoalProgressBar from './GoalProgressBar.vue'

const studyPlanLink = 'https://agenciadeaprendizaje.bue.edu.ar/wp-content/DTS/TS%20Desarrollo%20de%20Software.pdf'
const campusLink = 'https://ifts16.com/'
const organizationLink = 'https://agenciadeaprendizaje.bue.edu.ar/curso/tecnicatura-superior-en-desarrollo-de-software/'
</script>

<template>
  <kinesis-container h-screen flex flex-col justify-center text-xs font-500 class="main-container">
    <div flex flex-col>
      <h2 text-5xl font-700>
        Educacion
      </h2>

      <div flex justify-around mt-6>
        <kinesis-element :strength="12" w-4xl self-center>
          <n-card :title="`Técnico superior en desarrollo de software (2023 - 2025)`" description="IFTS N° 16 - Ciudad Autónoma de Buenos Aires" divider shadow="always">
            <GoalProgressBar />
            El Técnico Superior en Desarrollo de Software estará capacitado para producir artefactos de software, lo que comprende su diseño detallado, construcción reutilizando elementos existentes o programándolos enteramente, y verificación unitaria, así como su depuración, optimización y mantenimiento. Este técnico podrá desempeñarse en organizaciones de diversos tipos; empresas que realizan desarrollo de software por encargo de organizaciones locales o extranjeras, que proveen software junto con otros servicios de asesoramiento y consultoría, y, en menor número, que desarrollan sus propios productos de software para vender en el país o en el exterior.
            
            <!-- action buttons -->
            <template #action>
              <div flex justify-around>
                <n-button
                  quaternary
                  type="info"
                  tag="a"
                  :href="organizationLink"
                  target="_blank">
                  Visión general
                </n-button>
                <n-button
                  quaternary
                  type="info"
                  tag="a"
                  :href="campusLink"
                  target="_blank"
                  rel="noreferrer">
                  Institución
                </n-button>
                <n-button
                  quaternary
                  type="info"
                  tag="a"
                  :href="studyPlanLink"
                  target="_blank"
                  rel="noreferrer">
                  Plan de estudios
                </n-button>
              </div>
            </template>
          </n-card>
        </kinesis-element>
      </div>

      <div flex justify-center gap-x-12 mt-6>
        <kinesis-element :strength="15" w-sm>
          <n-card :title="`Certificado SkillUp en Angular (2022)`" description="Alkemy" divider shadow="always">
            Certificado de formación en Angular, donde se priorizó el trabajo en equipo para crear una aplicacion funcional. El enfoque incluyó el uso avanzado de TypeScript, diseño modular con componentes, integración de servicios y gestión eficiente de rutas.
          </n-card>
        </kinesis-element>
        <kinesis-element :strength="15" w-sm>
          <n-card :title="`Certificado IT Bootcamp Angular (2023)`" description="Finnegans" divider shadow="always">
            Certifica habilidades en el desarrollo de aplicaciones escalables con Angular. Mediante un proyecto colaborativo, se abordaron interfaces interactivas, comunicación entre componentes y arquitecturas eficientes.
          </n-card>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>

<style>
.main-container {
    font-size: 0.6rem !important;
}

@media (min-width: 700px) {
    .main-container {
        font-size: 1rem !important;
    }
    .description-container {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        justify-items: center !important;
    }
}
</style>