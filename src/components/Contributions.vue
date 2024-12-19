<script setup lang="ts">
import { NButtonGroup, NButton } from 'naive-ui'

const contributions = ref([])

let arrContributions: any = [{ date: '2023-9-22', count: 6 }]

// get dates
const currentDate = new Date()

const endDate = currentDate.toISOString().split('T')[0]

const lastYearDate = new Date(currentDate.valueOf())
lastYearDate.setFullYear(lastYearDate.getFullYear() - 1)
const endDate2 = lastYearDate.toISOString().split('T')[0]

const previousDate = new Date(currentDate.valueOf())
previousDate.setFullYear(previousDate.getFullYear() - 2)
const endDate3 = previousDate.toISOString().split('T')[0]

// color schemes
const darkRange = ['#1f1f22', '#333333', '#1d466c', '#1d5689', '#1d69ac', '#1B95D1']
const lightRange = ['#f5f7fa', '#eeeeee', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
let colorRange = darkRange
// check which color scheme to use
isDark.value ? colorRange = darkRange : colorRange = lightRange

// api call for contributions list
const getContributions = async () => {
  await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
    .then(res => res.json())
    .then(response => arrContributions = response.contributions)
  contributions.value = arrContributions
}
getContributions()

// Variable reactiva para almacenar el botón activo
const activeButton = ref('') // Puede ser un valor inicial como 'button1', '', etc.
// Función para manejar el clic en los botones
const handleButtonClick = (btnId: string) => {
  activeButton.value = btnId
}


</script>

<template>
  <div flex flex-col>
    <!-- title -->
    <h2 text-5xl font-700>
      Contribuciones
    </h2>

    <!-- calendars container -->
    <div flex justify-center mt-6>
      <div flex flex-col>

        <n-button-group size="large" justify-center pb-6>
            <n-button round
                @click="handleButtonClick('2024')">
                2024
            </n-button>
            <n-button
                @click="handleButtonClick('2023')">
                2023
            </n-button>
            <n-button round
                @click="handleButtonClick('2022')">
                2022
            </n-button>
        </n-button-group>

        <calendar-heatmap v-if="activeButton === '2024'"
          class="calendar"
          :end-date="endDate"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
        <calendar-heatmap v-if="activeButton === '2023'"
          class="calendar"
          :end-date="endDate2"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
        <calendar-heatmap v-if="activeButton === '2022'"
          class="calendar"
          :end-date="endDate3"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
      </div>
    </div>
  </div>
</template>

<style>
  .calendar {
    font-size: 0.5rem;
  }

  /* months and days label color adjustment */
  .vch__months__labels__wrapper text,
  .vch__days__labels__wrapper text {
    fill: #fefefe;
  }

  /* hide legend */
  .vch__legend {
    display: none;
  }
</style>