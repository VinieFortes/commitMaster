<template>
    <div>
      <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          :autoplay="2000"
          infinite
          animated
          control-color="white"
          navigation
          height="300px"
          class="text-white shadow-1"
          style="background-color: #455a64"
      >
        <q-carousel-slide name="style" class="row no-wrap flex-center">
          <div class="text-center">
            <q-icon name="developer_mode" size="56px" />
            <p style="font-weight: bolder; font-size: 38px">Cursos Online de Programação</p>
            <p style="font-weight: bolder; font-size: 18px">Está na hora de decolar sua carreira</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="text-center">
            <q-icon name="psychology" size="56px" />
            <p style="font-weight: bolder; font-size: 38px">Aprenda na pratica</p>
            <p style="font-weight: bolder; font-size: 18px">Cenários reais do dia a dia com muito conteúdo prático</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="text-center">
            <q-icon name="auto_stories" size="56px" />
            <p style="font-weight: bolder; font-size: 38px">Materiais Atualizados</p>
            <p style="font-weight: bolder; font-size: 18px">Os materiais dos cursos são atualizados constantemente</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="text-center">
            <q-icon name="smart_display" size="56px" />
            <p style="font-weight: bolder; font-size: 38px">Cursos Completos</p>
            <p style="font-weight: bolder; font-size: 18px">Nada de Hello Word, aqui o conhecimento é do mundo real</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="last" class="column no-wrap flex-center">
          <div class="text-center">
            <q-icon name="military_tech" size="56px" />
            <p style="font-weight: bolder; font-size: 38px">Instrutores Renomados</p>
            <p style="font-weight: bolder; font-size: 18px">Profissionais premiados pelas maiores empresas de tecnologia</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "Banner",
  setup () {
    return {
      slide: ref('style'),
      text1: 'Cursos Online de Programação'
    }
  }
}
</script>

<style scoped>

</style>