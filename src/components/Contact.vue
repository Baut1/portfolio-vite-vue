<script setup lang="ts">
import ContactForm from './ContactForm.vue'
</script>

<template>
  <div h-screen flex flex-col justify-center text-xs font-500 class="main-container">
    <div flex flex-col items-center>
      <h2 text-5xl font-700>
        Contacto
      </h2>
      <h3 mb-9 text-3>
        Visita mis redes sociales o envíame un mensaje
      </h3>
      <div w-lg flex justify-between>
        <div flex flex-col justify-evenly>
          <span>
            <a href="https://www.linkedin.com/in/juanbautistaiglesias/" target="_blank" rel="noreferrer">
              <img src="/src/assets/linkedin.png" class="btn-link" mb-1>
            </a>
            LinkedIn
          </span>
          <span>
            <a href="https://github.com/Baut1" target="_blank" rel="noreferrer">
              <img src="/src/assets/github.png" class="btn-link" mb-1>
            </a>
            Github
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<style>
.btn-link {
  height: 100px;
  width: auto;
  transition: all 0.5s ease;

  &:hover {
    opacity: 75%;
    transform: rotate(360deg);
  }
}

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
