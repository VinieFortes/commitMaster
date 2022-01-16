<template>
  <div class=" column" id="FormacoesView">
    <p id="title">Formações e cursos de tecnologia</p>
    <div class="row justify-evenly">

      <q-card class="card">
        <div class="row items-center">
          <q-icon name="question_answer" size="md" color="blue-grey-7"></q-icon>
          <h3>DO BÁSICO AO AVANÇADO</h3>
        </div>
        <p class="subtitle">Aprenda de maneira imersiva e dê os próximos passos rumo ao seu objetivo.</p>

      </q-card>
      <q-card class="card">
        <div class="row items-center">
          <q-icon name="videogame_asset" size="md" color="blue-grey-7"></q-icon>
          <h3>UM GUIA DE APRENDIZADO</h3>
        </div>
        <p class="subtitle">Elaborado por especialistas para que você conheça o tema de uma maneira completa.</p>
      </q-card>

      <q-card class="card">
        <div class="row items-center">
          <q-icon name="open_in_full" size="md" color="blue-grey-7"></q-icon>
          <h3>EVOLUA SUA CARREIRA</h3>
        </div>
        <p class="subtitle">Nossos cursos e conteúdos preparam você para desafios reais do mercado</p>
      </q-card>
    </div>

    <q-card>

    </q-card>

  </div>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";

export default class  FormacoesView extends Vue{

}
</script>

<style scoped>
#FormacoesView{
  background-color: #455a64;
  height: 300px;
}
.card {
  margin-top: 2%;
  border-radius: 14px;
  padding: 0 5px 0 5px;
  max-width: 300px;
}
h5{
  text-align: center;
}

.card:hover {
  animation: animationcard 500ms linear;
}

@keyframes animationcard {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0px);
  }
}

#title {
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: white;
  padding-top: 2%;
  align-self: center;
  position: relative;
}
.subtitle{
  font-size: 15px;
  margin-left: 15%;
  color: #263238;
}

h3 {
  font-size: 16px;
  font-weight: bolder;
  text-transform: uppercase;
  color: #263238;
  padding-top: 2%;
  margin-left: 20px;
  align-self: center;
  position: relative;
}

</style>