<script setup lang="ts">
import { NRadioButton, NRadioGroup } from 'naive-ui'

const isDark = useDark()
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
const darkRange = ['#1f1f22', '#333333', '#003f73', '#005a91', '#0077b1', '#1b95d1']
const lightRange = ['#f5f7fa', '#eeeeee', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
// check which color scheme to use
const colorRange = computed(() => (isDark.value ? darkRange : lightRange))

// api call for contributions list
async function getContributions() {
  await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
    .then(res => res.json())
    .then(response => arrContributions = response.contributions)
  contributions.value = arrContributions
}
getContributions()

const activeYear = ref() // initialize active year
</script>

<template>
  <div flex flex-col>
    <!-- title -->
    <h2 text-5xl font-700>
      Contribuciones
    </h2>

    <!-- calendars container -->
    <div mt-6 flex justify-center>
      <div flex flex-col>
        <NRadioGroup v-model:value="activeYear" size="large" mb-9 justify-center>
          <NRadioButton :value="2022">
            2022
          </NRadioButton>
          <NRadioButton :value="2023">
            2023
          </NRadioButton>
          <NRadioButton :value="2024">
            2024
          </NRadioButton>
        </NRadioGroup>
        <calendar-heatmap
          v-if="activeYear === 2024"
          class="calendar"
          :end-date="endDate"
          :values="contributions"
          :range-color="colorRange"
          round="1"
          max="6"
          w-4xl
          flex
        />
        <calendar-heatmap
          v-else-if="activeYear === 2023"
          class="calendar"
          :end-date="endDate2"
          :values="contributions"
          :range-color="colorRange"
          round="1"
          max="6"
          w-4xl
          flex
        />
        <calendar-heatmap
          v-else-if="activeYear === 2022"
          class="calendar"
          :end-date="endDate3"
          :values="contributions"
          :range-color="colorRange"
          round="1"
          max="3"
          w-4xl
          flex
        />
      </div>
    </div>
  </div>
</template>

<style>
  :root {
  --label-color-light: black;
  --label-color-dark: white;
}

.calendar {
  font-size: 0.5rem;
}

.dark {
  --label-color: var(--label-color-dark);
}
.light {
  --label-color: var(--label-color-light);
}

/* months and days label color adjustment */
.vch__months__labels__wrapper text,
.vch__days__labels__wrapper text {
  fill: var(--label-color);
}

/* hide legend */
.vch__legend {
  display: none;
}
</style>
