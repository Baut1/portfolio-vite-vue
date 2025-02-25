<script setup lang="ts">
import { NButton, NCard, NTag } from 'naive-ui'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import projectsList from '../data/projectsList.json'

import 'vue3-carousel/dist/carousel.css'

// breakpoints
const breakpoints = {
  700: {
    itemsToShow: 1.5,
  },
  // 1000 and up
  1000: {
    itemsToShow: 2,
  },
  1200: {
    itemsToShow: 3,
  },
}

const helpVisibility = ref(true)
const handleClose = () => helpVisibility.value = false
</script>

<template>
  <Carousel :items-to-show="1.5" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="slide in projectsList" :key="slide.title" max-h-md>
      <!-- card container -->
      <div flex flex-col class="carousel__item">
        <!-- card -->
        <NCard
          :title="`${slide.title}`"
          :segmented="{
            content: true,
            action: 'soft',
          }"
        >
          <!-- card cover -->
          <template #cover>
            <img :src="`${slide.imgSrc}`">
          </template>

          <!-- card tags -->
          <span v-for="tag in slide.description" :key="tag">
            <NTag type="info" size="small" round>{{ tag }}</NTag>
          </span>

          <!-- card content description -->
          <h2>{{ slide.content }}</h2>

          <!-- action buttons -->
          <template #action>
            <div flex flex-justify-around>
              <NButton
                tag="a"
                :href="slide.githubUrl"
                target="_blank"
              >
                <i class="i-carbon-logo-github" />
                Repositorio
              </NButton>
              <NButton
                tag="a"
                :href="slide.deployUrl"
                target="_blank"
              >
                <i class="i-carbon-application-web" />
                Deploy
              </NButton>
            </div>
          </template>
        </NCard>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>

  <Transition>
    <!-- user tip tag -->
    <div v-if="helpVisibility">
      <NTag
        type="info"
        closable
        @close="handleClose"
      >
        Haz click y arrastra
      </NTag>
    </div>
  </Transition>
</template>

<style>
/* carousel css */
.carousel__item {
  border: 3px solid;
  font-size: 10px;
  border-radius: 8px;
  display: flex;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__viewport {
  perspective: 1000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.85);
}

.carousel__slide--prev {
  opacity: 0.5;
  transform: rotateY(-20deg) scale(0.85);
}

.carousel__slide--next {
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel__pagination {
  display: none;
}

.not-selectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* help tip */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
