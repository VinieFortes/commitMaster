<template>
  <q-header id="header" reveal elevated class="text-white row justify-between q-pa-md items-center">
      <router-link to="/"><img src="../assets/logo.png" alt="Vasco" width="136"></router-link>

      <div v-if="!userLogado" class="row">
        <div class="btnWhite">
          <q-btn flat @click="scrollCursos">Cursos</q-btn>
          <q-btn flat @click="scrollFormacoes">Formações</q-btn>
          <q-btn flat @click="scrollPlanos">Planos</q-btn>
        </div>
        <div class="vl"></div>
        <div class="btnGreen">
          <q-btn @click="$emit('login')" rounded id="login">Entrar</q-btn>
          <q-btn @click="$emit('singup')" rounded id="singin">Crie sua conta</q-btn>
        </div>
      </div>

    <div v-else class="row">
      <div class="btnWhite">
        <q-btn @click="$router.push('/meus_cursos')" flat >Meus Cursos</q-btn>
        <q-btn flat >Meu Plano</q-btn>
      </div>
      <div class="vl2"></div>
      <div id="conta" class="row">
        <p id="username">{{ username }}</p>
        <q-avatar><img :src=userPhoto alt="User">
          <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
          >
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Minha conta</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Upgrade no Plano</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section @click="logOut">Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </div>
    </div>

  </q-header>
</template>

<script>

export default {
  name: "Header",
  data(){
    return {
      userLogado: false,
      username: 'Nome usuario',
      userPhoto: 'https://cdn.quasar.dev/img/avatar.png',
      retrievedObject: null,
      cadastroObj: {}
    }
  },

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

      this.username = this.cadastroObj.nome
      this.userPhoto = this.cadastroObj.link
    }


  },

  emits: ['login', 'singup'],

  methods: {
    scrollCursos() {
      document.getElementById("ViewCursos").scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollFormacoes() {
      document.getElementById("FormacoesView").scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollPlanos() {
      document.getElementById("PlanosView").scrollIntoView({
        behavior: "smooth"
      });
    },
    logOut(){
      window.localStorage.setItem('login', '0');
      document.location.reload(true)
    }
  }

}
</script>

<style scoped>
#header{
  padding-right: 10px;
  padding-left: 10px;
  background-color: #263238;
}

.vl {
  border-left: 2px solid white;
  height: 20px;
  align-self: center;
}
.vl2 {
  border-left: 1px solid white;
  height: 35px;
  align-self: baseline;
}
button{
  font-weight: bolder;
}
#login, #singin {
  margin-left: 15px;
  background-color: #a3ffbf;
  color: black;
}
#conta{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
  margin-left: 10px;
  margin-right: 10px;
}
#conta p {
  margin-right: 10px;
  margin-top: 8px;
}

@media only screen and (max-width: 600px) {
  #header{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .vl{
    visibility: hidden;
  }
  .btnWhite, .btnGreen{
    padding: 10px;
    margin: 0 auto;
  }
  #conta{
    margin-left: 30%;
  }
  .vl2{
    visibility: hidden;
  }
}

</style>