<template>
  <div class="column">
    <p id="title">Olá {{ nome }} Resumo da sua conta</p>
    <div class="flex row justify-center items-center">
      <q-carousel
          v-model="card.plano"
          padding
          height="500px"
          style="width: 420px"
      >
        <q-carousel-slide name="card1">
          <q-card  bordered class="card shadow-2">
            <q-icon :name="cardsPlanos[0].icon" size="md" color="blue-grey-7"></q-icon>
            <p class="nomePlano">{{cardsPlanos[0].nome_plano}}</p>
            <p class="desconto">{{ cardsPlanos[0].desconto }}</p>
            <p class="parcelas">{{ cardsPlanos[0].parcelas }}</p>
            <p class="preco">{{ cardsPlanos[0].preco }}</p>
            <p class="condicao">{{ cardsPlanos[0].condicao }}</p>
            <q-list bordered>
              <q-item v-for="item in list" v-bind:key="item" v-ripple>
                <q-item-section avatar>
                  <q-icon color="blue-grey-7" name="check" />
                </q-item-section>
                <q-item-section>{{item}}</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide  name="card2">
          <q-card  bordered class="card shadow-2">
            <q-icon :name=cardsPlanos[1].icon size="md" color="blue-grey-7"></q-icon>
            <p class="nomePlano">{{cardsPlanos[1].nome_plano}}</p>
            <p class="desconto">{{ cardsPlanos[1].desconto }}</p>
            <p class="parcelas">{{ cardsPlanos[1].parcelas }}</p>
            <p class="preco">{{ cardsPlanos[1].preco }}</p>
            <p class="condicao">{{ cardsPlanos[1].condicao }}</p>
            <q-list bordered>
              <q-item v-for="item in list" v-bind:key="item" v-ripple>
                <q-item-section avatar>
                  <q-icon color="blue-grey-7" name="check" />
                </q-item-section>
                <q-item-section>{{item}}</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="card3">
          <q-card  bordered class="card shadow-2">
            <q-icon :name=cardsPlanos[2].icon size="md" color="blue-grey-7"></q-icon>
            <p class="nomePlano">{{cardsPlanos[2].nome_plano}}</p>
            <p class="desconto">{{ cardsPlanos[2].desconto }}</p>
            <p class="parcelas">{{ cardsPlanos[2].parcelas }}</p>
            <p class="preco">{{ cardsPlanos[2].preco }}</p>
            <p class="condicao">{{ cardsPlanos[2].condicao }}</p>
            <q-list bordered>
              <q-item v-for="item in list" v-bind:key="item" v-ripple>
                <q-item-section avatar>
                  <q-icon color="blue-grey-7" name="check" />
                </q-item-section>
                <q-item-section>{{item}}</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
      <div>
        <q-card style="border-radius: 12px; margin-bottom: 10px" v-for="(item, index ) in status" v-bind:key="index">
          <q-card-section class="q-pa-sm">
            <p id="titulo">{{ item.titulo }}</p>
          </q-card-section>
          <q-card-section class="q-pa-sm flex flex-center">
              <q-circular-progress
                  show-value
                  class="text-blue-grey-9"
                  size="50px"
                  color="blue-grey-9"
                  :value="item.value"
              >
                {{ item.value }}%
              </q-circular-progress>
              <q-linear-progress v-for="(cursos, index) in item.cursos" v-bind:key="index" rounded size="20px" :value="cursos.valor" color="blue-grey-9" class="q-mt-sm" >
                <div class="absolute-full flex flex-center">
                  <q-badge v-if="cursos.valor >= 0.9" color="transparent" style="font-weight: bold" text-color="white" :label="cursos.nome" />
                  <q-badge v-else color="white" style="font-weight: bold" text-color="blue-grey-9" :label="cursos.nome" />
                </div>
              </q-linear-progress>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PlanoDados extends Vue{

  nome = '';
  retrievedObject: any;
  cadastroObj: any;

  card = {
    plano: '',
    nome: '',
    cpf: '',
    cardNumber: '',
    cvv: '',
    data: '',
    parcelas: ''
  }

  status = [{titulo: "Cursos Iniciados", value: 25, cursos: [{nome: 'Introdução ao Kotlin', valor: 0.2}, {nome: 'Python Indermediario', valor: 0.9}, {nome: 'C# + .NET', valor: 0.5}]},
    {titulo: "Cursos Concluidos", value: 32, cursos: [{nome: 'Java Iniciante', valor: 1}, {nome: 'Introdução a Logica de Programação', valor: 1}, {nome: 'C# basico', valor: 1}]}]

  dadosPlano: any;
  retrievedObjectPlano: any;

  cardsPlanos = [
    {icon: "school", nome_plano: "Plano Junior", desconto: "Desconto 10%", parcelas: "12X", preco: "R$85,99", condicao: "à vista"},
    {icon: "lightbulb", nome_plano: "Plano Pleno", desconto: "Desconto 5%", parcelas: "12X", preco: "R$99,99", condicao: "à vista"},
    {icon: "military_tech", nome_plano: "Plano Sênior", desconto: "Desconto 3%", parcelas: "12X", preco: "R$199,99", condicao: "à vista"}
  ]
  list = ["Acesso a todos os cursos da plataforma", "Desafios diarios", "Certificado", "Aulas de Inglês Gratuitas"]

  mounted() {
    if (localStorage.getItem('cadastro')) {
      this.retrievedObject = localStorage.getItem('cadastro');
      this.cadastroObj = JSON.parse(this.retrievedObject);

      this.nome = this.cadastroObj.name;

      if (localStorage.getItem('plano')) {
        this.retrievedObjectPlano = localStorage.getItem('plano');
        this.dadosPlano = JSON.parse(this.retrievedObjectPlano);
        this.card = this.dadosPlano
      }
    }
  }
}
</script>

<style scoped>
#title {
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: #263238;
  padding-top: 2%;
  align-self: center;
  position: relative;
}
#titulo{
  font-size: 20px;
  font-weight: bolder;
  text-transform: uppercase;
  color: #263238;
  align-self: center;
  position: relative;
}
.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 14px;
  padding: 5px;
  border-top: #455a64 solid;
}
.card:hover {
  animation: animationcard 500ms linear;
}
@keyframes animationcard {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0px);
  }
}
.desconto {
  background-color: #ec4654;
  color: white;
  font-weight: bolder;
  padding: 3px;
  border-radius: 6px;
}
.nomePlano{
  color: #455a64;
  font-size: 22px;
  font-weight: bolder;
}
.txt{
  color: #263238;
  font-weight: bolder;
  margin: 0 auto;
}
.parcelas{
  color: #455a64;
  font-size: 16px;
  line-height: 10px;
}
.preco{
  color: #263238;
  font-weight: bolder;
  font-size: 34px;
  line-height: 20px;
}
.condicao{
  color: #455a64;
  font-size: 16px;
}
</style>