<template>
<div ref="cursos" id="ViewCursos" class=" row flex-center">
  <p>Conheça nossos cursos</p>
  <q-btn v-if="nome_btn === 'ver todos'" @click="showAll(true)" rounded class="login">{{ nome_btn }}</q-btn>
  <q-btn v-else-if="nome_btn === 'ver menos'" @click="showAll(false)" rounded class="login">{{ nome_btn }}</q-btn>
</div>
  <Card :btn_show-all="btn_showAll"/>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {Card}
})
export default class CursosView extends Vue{

  btn_showAll = false;
  nome_btn = 'ver todos';

    showAll(bool: boolean){
      if(bool){
        this.btn_showAll = true;
        this.nome_btn = 'ver menos'
      } else {
        this.btn_showAll = false;
        this.nome_btn = 'ver todos'
      }
    }

}
</script>

<style scoped>


p {
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: #263238;
  padding-top: 2%;
  align-self: center;
  position: relative;
}
button {
  background-color: #263238;
  color: white;
  font-weight: bolder;
  display: flex;
  position: absolute;
  margin-top: 1%;
  right: 2%;
}

@media only screen and (max-width: 600px) {
 #View{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
  p {
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    color: #263238;
    padding-top: 2%;
  }
  button {
    background-color: #263238;
    color: white;
    position: relative;
  }
}
</style>