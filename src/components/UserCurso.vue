<template>
  <q-page-container>
    <div id="card">
      <p id="title">Olá {{username}} <br> esses são os cursos disponiveis para você !</p>
    </div>
    <Card btn_show-all="true"/>
  </q-page-container>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import {Options, Vue} from "vue-class-component";
@Options({
  components: {Card}
})
export default class UserCurso extends Vue{

  username = null;
  retrievedObject: any;
  cadastroObj: any;

  mounted() {
    this.retrievedObject = localStorage.getItem('cadastro');
    this.cadastroObj = JSON.parse(this.retrievedObject);
    this.username = this.cadastroObj.name;
  }
}
</script>

<style scoped>
#card{
  background-color: #455a64;
}
#title {
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: white;
  text-align: center;
  padding-top: 2%;
  align-self: center;
  position: relative;
}
</style>