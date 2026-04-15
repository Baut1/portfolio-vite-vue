<script setup lang="ts">
import { NRadioButton, NRadioGroup } from 'naive-ui'

const isDark = useDark()
interface Contribution {
  date: string
  count: number
}

const contributions = ref<Contribution[]>([])

// get dates
const currentYear = new Date().getFullYear()

const years = [currentYear, currentYear - 1, currentYear - 2]

function getEndDateByYear(year: number) {
  const date = new Date()
  date.setFullYear(year)
  return date.toISOString().split('T')[0]
}

const activeYear = ref(currentYear)

// color schemes
const darkRange = ['#1f1f22', '#333333', '#003f73', '#005a91', '#0077b1', '#1b95d1']
const lightRange = ['#f5f7fa', '#eeeeee', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
// check which color scheme to use
const colorRange = computed(() => (isDark.value ? darkRange : lightRange))

// api call for contributions list
async function getContributions() {
  const res = await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
  const data = await res.json()
  contributions.value = data.contributions ?? []
}
getContributions()
</script>

<template>
  <div flex flex-col>
    <!-- title -->
    <h2 text-5xl font-700>
      Contribuciones
    </h2>
    <h3 pb-3 text-3>
      Selecciona un año para ver mis contribuciones en GitHub
    </h3>

    <!-- calendars container -->
    <div mt-6 flex justify-center>
      <div flex flex-col>
        <NRadioGroup v-model:value="activeYear" size="large" mb-9 justify-center>
          <NRadioButton
            v-for="year in years"
            :key="year"
            :value="year"
          >
            {{ year }}
          </NRadioButton>
        </NRadioGroup>
        <calendar-heatmap
          :key="activeYear"
          class="calendar"
          :end-date="getEndDateByYear(activeYear)"
          :values="contributions"
          :range-color="colorRange"
          :max="activeYear === currentYear - 2 ? 3 : 6"
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
