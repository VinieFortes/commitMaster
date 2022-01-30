<template>
  <q-page-container id="main" class="text-white column  items-center justify-center">
    <span style="font-size: 210px; font-weight: bolder">:(</span>
    <p style="font-size: 80px; font-weight: bolder; text-align: center">Você precisa estar logado para acessar essa pagina !</p>
    <router-link to="/"><q-btn rounded id="return">Voltar</q-btn></router-link>
  </q-page-container>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class  AuthVerify extends Vue{

  mounted(){
    window.scrollTo({ top: 150, behavior: 'smooth' });
  }

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
}
a{
  text-decoration: none;
}
</style>