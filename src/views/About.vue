<template>
  <q-page-container class="about">
    <h1>{{localidade}}</h1>
  </q-page-container>
</template>

<script lang="ts">
import axios from 'axios';
import {Vue} from "vue-class-component";

export default class About extends Vue{

  localidade = null;

  mounted(){
    axios.get('https://viacep.com.br/ws/01001000/json/').then(resp => {
      console.log(resp.data)
      this.localidade = resp.data.localidade
    })
  }
}

</script>