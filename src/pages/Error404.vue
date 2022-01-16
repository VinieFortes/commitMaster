<template>
  <q-page-container id="main" class="text-white column  items-center justify-center">
      <p style="font-size: 210px; font-weight: bolder">404</p>
      <p style="font-size: 80px; font-weight: bolder">Página não encontrada</p>
      <router-link to="/"><q-btn rounded id="return">Retornar a página principal</q-btn></router-link>
  </q-page-container>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Error404 extends Vue{

}
</script>

<style scoped>
#main{
  background-color: #1976d2;
}
button{
  background-color: white;
  color: #051933;
  font-weight: bolder;
  font-size: 20px;
  margin: 20px;
}
a{
  text-decoration: none;
}
</style>