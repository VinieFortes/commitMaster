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
          class="q-gutter-md"
      >
        <q-input
            filled
            v-model="name"
            type="name"
            label="Seu nome de usuario"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de nome não pode ficar em branco !']"
        />

        <q-input
            filled
            v-model="email"
            type="email"
            label="Seu e-mail"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de e-mail não pode ficar em branco !']"
        />
        <q-input
            filled
            v-model="password"
            type="password"
            label="Sua senha"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de senha não pode ficar em branco !']"
        />
        <q-input
            filled
            v-model="url"
            type="url"
            label="Link de uma imagem"
            lazy-rules
            color="blue-grey-10"
            :rules="[ val => val && val.length > 0 || 'O campo de link não pode ficar em branco !']"
        />
        <q-checkbox  v-model="checkbox" label="Concordo com todos termos e bla bla" color="blue-grey-10"/>
        <div>
          <q-btn label="Cadastrar" type="submit" color="blue-grey-10"/>
          <q-btn label="Limpar Campos" type="reset" color="blue-grey-10" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ModalLogin",
  emits: ['close'],

  data(){
    return{
      name: '',
      email: '',
      password: '',
      url: '',
      checkbox: false,
      obj: {},
    }
  },
  methods: {
    onSubmit(){
      if(this.checkbox === false) {
        window.alert("Aceite os termos para se cadastrar !");
      }
      else {
        this.obj = {nome: this.name, e_mail: this.email, pass: this.password, link: this.url}
        window.localStorage.setItem ('cadastro', JSON.stringify (this.obj));
        window.localStorage.setItem ('login', '1')
        document.location.reload (true);
      }
    }
  }
}
</script>

<style scoped>
#card{
  background-color: white;
  margin: 0 auto;
  height: 530px;
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