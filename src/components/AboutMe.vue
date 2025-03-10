<script setup lang="ts">
const showAnnotation = ref(false)
const route = useRoute()

// Función para verificar el hash en la URL con delay
function checkHash() {
  if (route.hash === '#about-me') {
    setTimeout(() => {
      showAnnotation.value = true
    }, 1000)
  }
  else {
    showAnnotation.value = false
  }
}

// Detecta cambios en la ruta
watch(() => route.hash, () => {
  checkHash()
})

// Comprueba el hash al montar
onMounted(() => {
  checkHash()
})
</script>

<template>
  <div h-screen flex flex-col justify-center text-xs font-500 class="main-container">
    <div flex flex-col>
      <h2 text-5xl font-700>
        Sobre mi
      </h2>

      <!-- paragraphs container -->
      <RoughNotationGroup :is-show="showAnnotation" mt-6 flex flex-col text-center text-justify class="description-container">
        <p my-2 w-xs self-center>
          Soy un
          <RoughNotation type="box" order="1" :padding="0.5">
            <span>desarrollador de software</span>
          </RoughNotation>
          autodidacta con pasión por crear soluciones innovadoras. He adquirido una gran cantidad de conocimientos y experiencia a través de mi propio estudio y aplicación práctica. Aquí, encontrarás una colección de mis proyectos personales que muestran mis habilidades y capacidades.
        </p>
        <p my-2 w-xs self-center>
          A través de
          <a
            href="https://veride.netlify.app/"
            target="_blank"
            rel="noreferrer"
            color="blue"
          >
            este</a>
          proyecto, demostré mi habilidad para encontrar soluciones.
          <a
            href="https://angular-deploy-ng-wallers.vercel.app/login"
            target="_blank"
            rel="noreferrer"
            color="blue"
          >
            Este</a>
          proyecto me desafió a
          <RoughNotation type="circle" order="3" color="#1ae680" :padding="0.5">
            trabajar en equipo
          </RoughNotation> y demostró mi habilidad para trabajar bajo presión para entregar un producto de alta calidad.
        </p>
        <p my-2 w-xs self-center>
          También he creado aplicaciones que están disponibles en mi repositorio de Github. estas aplicaciones incluyen
          <a
            href="https://s4-02-t-python-frontend-n2k5b3mav-s4-02-t-python-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
            color="blue"
          >
            App para ONG</a>,
          <a
            href="https://github.com/No-Country/s3-03-t-front"
            target="_blank"
            rel="noreferrer"
            color="blue"
          >
            App de alojamiento</a>.
          Estas aplicaciones demuestran mi habilidad para escribir
          <RoughNotation type="highlight" order="2" :multiline="true" color="#ffd54f" color-black>
            código limpio, eficiente y bien documentado
          </RoughNotation>, así como mi habilidad para crear interfaces amigables para el usuario.
        </p>
        <p my-2 w-xs self-center>
          Mis habilidades técnicas incluyen la competencia en
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" color="blue">TypeScript</a>,
          <a href="https://angular.io/" target="_blank" rel="noreferrer" color="blue">Angular</a>,
          <a href="https://react.dev/" target="_blank" rel="noreferrer" color="blue">React</a>,
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer" color="blue">Node</a>
          , entre otros. También creo en el aprendizaje continuo y estoy buscando nuevos desafíos y oportunidades para ampliar mis conocimientos. Si tienes preguntas o deseas discutir oportunidades de colaboración, por favor no dudes en
          <RoughNotation type="underline" order="4" color="#ff0000">
            contactarme.
          </RoughNotation>
          <!-- <VueTyper text='Si tienes preguntas o deseas discutir oportunidades de colaboración, por favor no dudes en contactarme.'
                        :repeat='0'
                        :pre-type-delay='0'
                        :type-delay='40'
                        ></VueTyper> -->
        </p>
      </RoughNotationGroup>
    </div>
  </div>
  <div class="absolute left-1/2 top-2/5 h-[25vh] w-[2px] bg-teal-600 -translate-x-1/2" />
</template>

<style>
.main-container {
  font-size: 0.6rem !important;
}

/* hr {
  border: none;
  height: 2px;
  background-color: white;

  html.light & {
    background-color: black;
  }
} */

/* .vue-typer {
    .char.typed {
        color: #ffffff;
    }
    .caret.typing {
        background-color: #ffffff;
    }
} */

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
