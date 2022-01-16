<template>
    <q-page-container>
      <Menu/>
      <Banner/>
      <CursosView/>
      <FormacoesView/>
      <PlanosView/>
      <BannerFooter/>
    </q-page-container>
</template>

<script lang="ts">
import CursosView from "@/components/CursosView.vue";
import Menu from "@/components/Menu.vue";
import Banner from "@/components/Banner.vue";
import BannerFooter from "../components/BannerFooter.vue";
import FormacoesView from "@/components/FormacoesView.vue";
import PlanosView from "@/components/PlanosView.vue";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {FormacoesView, BannerFooter, CursosView, Menu, Banner, PlanosView}
})
export default class Home extends Vue{

}
</script>
