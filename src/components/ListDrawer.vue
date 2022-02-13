<template>
  <div>
    <q-card id="main">
      <div class="row items-center">
        <router-link to="/"><q-icon size="md" name="arrow_back"></q-icon></router-link>
        <p id="title">{{ query }}</p>
      </div>

      <q-card bordered class="shadow-2">
        <div class="row flex-center items-center">
          <q-icon size="md" name="auto_stories"></q-icon>
          <p style="font-size: 16px; font-weight: bolder; margin-left: 5px; margin-top: 16px">Aula Atual</p>
        </div>
        <p id="curso">01 - Introdução</p>
        <q-linear-progress style="border-radius: 12px" size="25px" rounded :value="progress2" color="teal-10" class="q-mt-sm">
          <div class="absolute-full flex flex-center">
            <p id="porcentagem">{{progressLabel2}}</p>
          </div>
        </q-linear-progress>
      </q-card>
    </q-card>

    <q-card id="atividades">
      <div class="row flex-center">
        <q-icon size="md" name="science"></q-icon>
        <p id="atv">Atividades</p>
      </div>
      <q-card bordered class="shadow-2">

        <div v-for="item in atividades" v-bind:key="item" class="row items-center">

          <q-list bordered v-if="item.status === 1" id="listaOn">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon color="teal-06" :name=item.icon />
              </q-item-section>
              <q-item-section>{{item.nome}}</q-item-section>
            </q-item>
          </q-list>

          <q-list bordered v-else id="listaOff">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon color="teal-06" :name=item.icon />
              </q-item-section>
              <q-item-section>{{item.nome}}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card>
    </q-card>

  </div>
</template>

<script lang="ts">
import {computed, ref} from "vue";
import {Vue} from "vue-class-component";

export default class ListDrawer extends Vue{

  atividades = [
    {nome: "Introdução", icon: 'desktop_windows', status: 1},
    {nome: "Historia e Ecossistema do Kotlin", icon: 'desktop_windows', status: 0},
    {nome: "Quiz Introdução", icon: 'quiz', status: 0},
    {nome: "Benefios de usar Kotlin", icon: 'desktop_windows', status: 0},
    {nome: "Criando nosso primeiro App", icon: 'code', status: 0},
    {nome: "Conhecendo o Android Studio", icon: 'android', status: 0},
  ]

  progress2 = 0.9

  progressLabel2 = computed(() => (this.progress2 * 100).toFixed() + '%')

  query: any = null;

  mounted(){
    this.query = this.$route.query.curso;
  }

}
</script>

<style scoped>
#main{
  color: #455a64;
  padding-bottom: 1px;
}
#atividades{
  color: #455a64;
  margin-top: 1px;
}
#title, #atv{
  font-size: 18px;
  font-weight: bolder;
  margin-left: 10px;
  margin-top: 15px;
}
#curso{
  margin: 0 auto;
  font-size: 16px;
  background-color: #455a64;
  color: white;
  font-weight: bolder;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 12px;
  width: fit-content;
}
#porcentagem{
  font-size: 18px;
  color: white;
  font-weight: bolder;
  text-align: center;
}
#listaOn{
  border-left: #004d40 solid 5px;
  margin-bottom: 2px;
  width: 100%;
}
#listaOff{
  border-left: red solid 5px;
  margin-bottom: 2px;
  width: 100%;
}
a{
  text-decoration: none;
  color: #263238;
}
</style>