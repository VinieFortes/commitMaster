<template>
  <div id="banner" class="row">
    <q-btn size="20px" id="btn" color="white" flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
    <q-icon name="desktop_windows" size="md" color="white"></q-icon>
    <p id="title">01 - Introdução</p>
    <q-space/>
    <q-btn icon="skip_next" rounded id="next">Próxima Atividade</q-btn>
  </div>

  <q-drawer
      v-model="drawerLeft"
      :width="400"
      :breakpoint="700"
      elevated
      class="blue-grey-7 text-white"
  >
      <ListDrawer/>
  </q-drawer>

</template>

<script lang="ts">
import ListDrawer from "@/components/ListDrawer.vue";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {ListDrawer}
})
export default class BannerCurso extends Vue {

  drawerLeft = true;

}
</script>

<style scoped>
#banner{
  background-color: #455a64;
  display: flex;
  align-items: center;
  align-content: center;
}
#btn{
  margin-right: 10%;
}
#title{
  color: white;
  font-weight: bolder;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 15px;
}
#next{
  background-color: white;
  color: #455a64;
  font-weight: bolder;
  margin-right: 10px;
}
</style>