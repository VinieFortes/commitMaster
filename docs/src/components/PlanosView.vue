<template>
  <div id="PlanosView" class="column">
    <p id="title">Conheça Nossos Planos</p>
    <div class="row justify-evenly">
      <q-card v-for="card in cardsPlanos" v-bind:key="card" id="card" bordered class="shadow-2">
        <q-icon :name=card.icon size="md" color="blue-grey-7"></q-icon>
        <p id="nomePlano">{{card.nome_plano}}</p>
        <p id="desconto">{{ card.desconto }}</p>
        <p id="parcelas">{{ card.parcelas }}</p>
        <p id="preco">{{ card.preco }}</p>
        <p id="condicao">{{ card.condicao }}</p>
        <q-list bordered>
          <q-item v-for="item in list" v-bind:key="item" v-ripple>
            <q-item-section avatar>
              <q-icon color="blue-grey-7" name="check" />
            </q-item-section>
            <q-item-section>{{item}}</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PlanosView extends Vue{

  cardsPlanos = [
    {icon: "school", nome_plano: "Plano Junior", desconto: "Desconto 10%", parcelas: "12X", preco: "R$85,99", condicao: "à vista"},
    {icon: "lightbulb", nome_plano: "Plano Pleno", desconto: "Desconto 5%", parcelas: "12X", preco: "R$99,99", condicao: "à vista"},
    {icon: "military_tech", nome_plano: "Plano Sênior", desconto: "Desconto 3%", parcelas: "12X", preco: "R$199,99", condicao: "à vista"}
  ]
  list = ["Acesso a todos os cursos da plataforma", "Desafios diarios", "Certificado", "Aulas de Inglês Gratuitas"]


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
#card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 14px;
  padding: 5px;
  border-top: #455a64 solid;
}
#card:hover {
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
#desconto {
  background-color: #ec4654;
  color: white;
  font-weight: bolder;
  padding: 3px;
  border-radius: 6px;
}
#nomePlano{
  color: #455a64;
  font-size: 22px;
  font-weight: bolder;
}
#parcelas{
  color: #455a64;
  font-size: 16px;
  line-height: 10px;
}
#preco{
  color: #263238;
  font-weight: bolder;
  font-size: 34px;
  line-height: 20px;
}
#condicao{
  color: #455a64;
  font-size: 16px;
}
</style>