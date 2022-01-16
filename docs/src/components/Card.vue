<template>
  <q-scroll-area
      v-if="!btn_showAll"
      style="height: 550px"
      :bar-style="{ bottom: '4px', borderRadius: '5px', background: 'black', height: '10px', opacity: 1 }"
      :thumb-style="{ bottom: '4px', borderRadius: '5px', background: '#263238', height: '10px', opacity: 1 }">
    <div class="q-pa-md row no-wrap justify-evenly q-gutter-md">

        <q-card @click="$router.push('/curso')" v-for="card in Cards" v-bind:key="card" class="my-card">
        <img :style="{'background-color': card.bg_color, 'height': '300px'}" :src="card.bg_img">
        <q-card-section class="column justify-evenly">
          <div class="text-h6" style="margin-bottom: 10px" >{{card.title}}</div>
          <div v-if="card.level === 'Facil'" class="row flex items-center rounded-borders bg-blue text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>{{card.level}}</span>
          </div>
          <div v-else-if="card.level === 'Intermediário'" class="row flex items-center rounded-borders bg-yellow-10 text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>{{card.level}}</span>
          </div>
          <div v-else-if="card.level === 'Avançado'" class="row flex items-center rounded-borders bg-red text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>{{card.level}}</span>
          </div>
        </q-card-section>
      </q-card>
    </div>

  </q-scroll-area>


  <div v-else class="q-pa-md row wrap justify-evenly q-gutter-md">

    <q-card @click="$router.push('/curso')" v-for="card in Cards" v-bind:key="card" class="my-card">
      <img :style="{'background-color': card.bg_color, 'height': '300px'}" :src="card.bg_img">
      <q-card-section class="column justify-evenly">
        <div class="text-h6" style="margin-bottom: 10px" >{{card.title}}</div>
        <div v-if="card.level === 'Facil'" class="row flex items-center rounded-borders bg-blue text-white" style="width: fit-content; padding: 0 3px 0 2px">
          <q-icon name="star" color="white"></q-icon>
          <span>{{card.level}}</span>
        </div>
        <div v-else-if="card.level === 'Intermediário'" class="row flex items-center rounded-borders bg-yellow-10 text-white" style="width: fit-content; padding: 0 3px 0 2px">
          <q-icon name="star" color="white"></q-icon>
          <span>{{card.level}}</span>
        </div>
        <div v-else-if="card.level === 'Avançado'" class="row flex items-center rounded-borders bg-red text-white" style="width: fit-content; padding: 0 3px 0 2px">
          <q-icon name="star" color="white"></q-icon>
          <span>{{card.level}}</span>
        </div>
      </q-card-section>
    </q-card>

  </div>

</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import { Prop } from 'vue-property-decorator'

export default class Card extends Vue{

  @Prop() readonly btn_showAll!: boolean;

  Cards = [
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Facil"},
    {bg_color: "#943261", bg_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", title: "Curso basico de Angular", level: "Facil"},
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Intermediário"},
    {bg_color: "#ff6600", bg_img: "https://cdn.freebiesupply.com/logos/thumbs/2x/kotlin-2-logo.png", title: "Curso medio Kotlin", level: "Intermediário"},
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Intermediário"},
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Intermediário"},
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Intermediário"},
    {bg_color: "#7f30cf", bg_img: "https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png", title: "Curso basico de ASP.NET CORE", level: "Intermediário"},
  ]

}
</script>

<style scoped>
.my-card{
  width: 300px;
  height: 500px;
  cursor: pointer;
}
.text-h6{
  min-height: 100px;
}
a{
  text-decoration: none;
  color: black;
}
</style>