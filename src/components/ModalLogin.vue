<template>
  <div>
    <q-card id="card">
      <div id="header" class="row">
        <p>Faça Login na sua conta</p>
        <q-space/>
        <q-icon id="iconClose" name="highlight_off" size="md" @click="$emit('close')"></q-icon>
      </div>
      <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
      >
        <q-input
            filled
            v-model="login.email"
            type="email"
            label="Seu e-mail"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de e-mail não pode ficar em branco !']"
        />
        <q-input
            filled
            v-model="login.senha"
            type="password"
            label="Sua senha"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de senha não pode ficar em branco !']"
        />
        <div>
          <q-btn label="Login" type="submit" color="blue-grey-10"/>
          <q-btn label="Limpar Campos" type="reset" color="blue-grey-10" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import { Emit } from 'vue-property-decorator'
import axios from "axios";

export default class  ModalLogin extends Vue{

  private axiosInstace = axios.create({
    baseURL: 'https://localhost:5011/api/v1/'
  })

  login = {
    email: null,
    senha: null
  }


    @Emit("close")
    close(){
      return false;
    }

    onSubmit(){
      // window.localStorage.setItem('login', '1')
      // document.location.reload(true);
      return new Promise(
          () => {
            this.axiosInstace.post('/usuario/login', this.login).then(
                () => {
                  this.login = {
                    email: null,
                    senha: null
                  };
                }
            )
          });
    }
  onReset () {
    this.login.email = null;
    this.login.senha = null;
    }

    mounted(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
</script>

<style scoped>
#card{
  background-color: white;
  margin: 0 auto;
  height: 300px;
  width: 350px;
  border-radius: 12px;
}
#header{
  background-color: #455a64;
  color: white;
  padding: 10px 5px 0 5px;
  border-radius: 12px 12px 0 0;
  font-weight: bolder;
}
p{
  font-size: 18px;
  padding-left: 5px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#iconClose{
  cursor: pointer;
}
</style>