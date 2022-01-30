<template>
  <q-page-container>
    <AuthVerify v-if="!userLogado"/>
    <Assinatura v-else/>
  </q-page-container>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Assinatura from "@/components/Assinatura.vue";
import AuthVerify from "@/components/AuthVerify.vue";

@Options({
  components: {AuthVerify, Assinatura}
})
export default class Plano extends Vue{

  userLogado: any = null;
  retrievedObject: any;
  cadastroObj: any;
  username = null;

  mounted() {
    if(localStorage.getItem('login') === '1'){
      this.userLogado = true;
    }
    else {
      this.userLogado = false
    }
    if(localStorage.getItem('cadastro')){
      this.retrievedObject = localStorage.getItem('cadastro');
      this.cadastroObj = JSON.parse(this.retrievedObject);

      this.username = this.cadastroObj.name
    }

  }
}
</script>

<style scoped>

</style>