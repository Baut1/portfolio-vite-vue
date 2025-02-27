<script setup lang="ts">
</script>

<template>
  <div h-screen flex flex-col justify-center text-xs font-500 class="main-container">
    <div flex flex-col>
      <h2 text-5xl font-700>
        Contacto
      </h2>
      <div flex justify-around>
        <span>
          <a href="https://www.linkedin.com/in/juanbautistaiglesias/" target="_blank" rel="noreferrer">
            <img src="/src/assets/linkedin.png" class="btn-link">
          </a>
        </span>
        <span>
          <a href="https://github.com/Baut1" target="_blank" rel="noreferrer">
            <img src="/src/assets/github.png" class="btn-link">
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.btn-link {
  height: 100px;
  width: auto;
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
