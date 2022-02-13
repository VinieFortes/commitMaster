<template>
    <q-page-container>
      <Menu/>
      <Banner/>
      <CursosView/>
      <FormacoesView/>
      <PlanosView v-if="userLogado === false"/>
      <PlanoDados v-else/>
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
import PlanoDados from "@/components/PlanoDados.vue";

@Options({
  components: {PlanoDados, FormacoesView, BannerFooter, CursosView, Menu, Banner, PlanosView}
})
export default class Home extends Vue {

  userLogado = false;

  card = {
    plano: '',
    nome: '',
    cpf: '',
    cardNumber: '',
    cvv: '',
    data: '',
    parcelas: ''
  }
  dadosPlano: any;
  retrievedObjectPlano: any;

  mounted() {
    document.title = 'Commit Master'
    window.scrollTo({top: 0, behavior: 'smooth'});

    if (localStorage.getItem('login') === '1') {
      this.userLogado = true;
    } else {
      this.userLogado = false
    }
    if (localStorage.getItem('plano')) {
      this.retrievedObjectPlano = localStorage.getItem('plano');
      this.dadosPlano = JSON.parse(this.retrievedObjectPlano);
      this.card = this.dadosPlano
    }
  }
}
</script>
