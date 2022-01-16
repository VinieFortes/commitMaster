<template>
  <q-layout :class="{'blur-content': showModalLogin || showModalSingup}">
    <Header @login="doLogin" @singup="doSingup"/>
    <q-page>
      <router-view/>
    </q-page>
    <Footer/>
  </q-layout>
  <ModalLogin v-if="showModalLogin" :class="'modal'" @close="showModalLogin = false"/>
  <ModalSingup v-if="showModalSingup" :class="'modal'" @close="showModalSingup = false"/>
</template>

<script lang='ts'>
import ModalLogin from "@/components/ModalLogin.vue";
import ModalSingup from "@/components/ModalSingup.vue";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {Options, Vue} from "vue-class-component";

@Options({
  components: {ModalLogin, ModalSingup, Header, Footer}
})
export default class App extends Vue{

  showModalLogin = false;
  showModalSingup = false;

  doLogin(){
    console.log('login')
    this.showModalLogin = true
  }
  doSingup(){
    console.log('singup')
    this.showModalSingup = true
  }

}
</script>

<style scoped>

.blur-content{
  filter: blur(5px);
}
.modal{
  position: absolute;
  padding-top: 3%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  animation: animationname 500ms alternate;
}
@keyframes animationname {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(50px);
  }
}
</style>
