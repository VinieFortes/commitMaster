<template>
  <div>
    <q-card id="card">
      <div id="header" class="row">
        <p>Faça o seu cadastro</p>
        <q-space/>
        <q-icon id="iconClose" name="highlight_off" size="md" @click="$emit('close')"></q-icon>
      </div>
      <q-form
          @submit="onSubmit"
          @reset="onReset"
      >
        <div class="flex column q-pa-sm">
          <q-input
              filled
              v-model="cadastro.name"
              type="name"
              label="Seu nome de usuario"
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de nome não pode ficar em branco !']"
          />
          <q-input
              filled
              v-model="cadastro.email"
              type="email"
              label="Seu e-mail"
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de e-mail não pode ficar em branco !']"
          />
          <q-input
              filled
              v-model="cadastro.date"
              type="date"
              label="Data de Nascimento"
              stack-label
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de data não pode ficar em branco !']"
          />
          <q-input
              filled
              v-model="cadastro.cpf"
              type="text"
              label="Seu CPF"
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de CPF não pode ficar em branco !']"
          />
          <q-input
              filled
              v-model="cadastro.phone"
              type="tel"
              label="Seu Telefone"
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de Telefone não pode ficar em branco !']"
          />
          <q-input
              filled
              v-model="cadastro.password"
              type="password"
              label="Sua senha"
              lazy-rules
              color="blue-grey-10"
              :rules="[ val => val && val.length > 0 || 'O campo de senha não pode ficar em branco !']"
          />
        </div>

        <q-checkbox  v-model="checkbox" label="Concordo com todos termos de serviço" color="blue-grey-10"/>
        <div>
          <q-btn label="Cadastrar" type="submit" color="blue-grey-10"/>
          <q-btn label="Limpar Campos" type="reset" color="blue-grey-10" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import { Emit } from 'vue-property-decorator'
import axios from 'axios';

export default class ModalSingup extends Vue{

  cadastro = {
    name: null,
    email: null,
    date: null,
    password: null,
    url: null,
    cpf: null,
    phone: null,
  }

  checkbox = false;

  @Emit("close")
  close(){
    return false;
  }

  private axiosInstace = axios.create({
    baseURL: 'https://localhost:5001/api/v1/'
  })

    onSubmit(){
      if(!this.checkbox) {
        window.alert("Aceite os termos para se cadastrar !");
      }
      else {
        window.localStorage.setItem ('cadastro', JSON.stringify (this.cadastro));
        window.localStorage.setItem ('login', '1')
        document.location.reload (true);
        return new Promise(
            () => {
              this.axiosInstace.post('/aluno', this.cadastro).then(
                  () => {
                    this.cadastro = {
                      name: null,
                      email: null,
                      date: null,
                      password: null,
                      url: null,
                      cpf: null,
                      phone: null,
                    };
                  }
              )
            });
      }

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
  padding: 0 0 10px 0;
  height: auto;
  width: 40%;
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