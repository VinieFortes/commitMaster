<template>
  <div id="top" class="q-pa-md flex row">
    <div class="q-gutter-md">
      <q-carousel
          v-model="card.plano"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          infinite
          control-type="regular"
          control-color="blue"
          padding
          arrows
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
    </div>
    <div class="column flex">
      <div class="txt text-h5 q-pt-sm">{{username}} escolha o plano que mais se encaixe com você e assine já !</div>
      <q-card v-if="card.nome" style="border-radius: 12px; width: 400px; align-self: center" class="q-mt-md">
        <q-card-section style="background-color: #263238">
          <div class="row justify-between">
            <img src="../assets/logo.png" width="100" alt="logo">
            <img v-if="checkTypeCard(card.cardNumber) !== 'unknown'" :src="checkTypeCard(card.cardNumber)" width="50" alt="card">
          </div>
        </q-card-section>
        <q-card-section style="background-color: #263238">
          <div class="flex flex-center">
            <p style="font-family: kredit,serif; font-size: 25px; color: white">{{ formatCardNumber(card.cardNumber) }}</p>
          </div>
        </q-card-section>
        <q-card-section style="background-color: #263238">
          <div class="flex row justify-between">
            <p style="font-family: kredit,serif; font-size: 15px; color: white">{{ card.nome }}</p>
            <p style="font-family: kredit,serif; font-size: 15px; color: white">{{ card.data }}</p>
          </div>
        </q-card-section>
      </q-card>
      <div class="q-mt-md">
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >
          <div class="row flex">
            <q-input
                filled
                v-model="card.nome"
                label="Nome do Cartão"
                lazy-rules
                style="flex: 1; padding-right: 5px"
                :rules="[ val => val && val.length > 0 || 'O campo de nome deve ser preenchido !']"
            />

            <q-input
                filled
                type="number"
                v-model="card.cpf"
                label="CPF"
                style="flex: 1;"
                :rules="[ val => val && val.length > 0 || 'O campo de CPF deve ser preenchido !']"
            />
          </div>

          <div class="row flex">
            <q-input
                filled
                v-model="card.cardNumber"
                type="number"
                mask="card"
                label="Numero do Cartão"
                style="flex: 1; padding-right: 5px"
                :rules="[ val => val && val.length > 0 && val.length < 17 || 'O campo de Numero do Cartão deve ser preenchido corretamente !']"
            />

            <q-input
                filled
                type="number"
                v-model="card.cvv"
                label="CVV"
                style="flex: 1;"
                :rules="[ val => val && val.length > 0 && val.length < 4 || 'O campo de CVV deve ser preenchido corretamente !']"
            />
          </div>

          <div class="row flex">
            <q-input
                filled
                v-model="card.data"
                label="Data de Vencimento"
                stack-label
                mask="##/##"
                color="blue-grey-10"
                style="flex: 1; padding-right: 5px"
                :rules="[ val => val && val.length > 0 || 'O campo de data não pode ficar em branco !']"
          >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="monthPicker" transition-show="scale" transition-hide="scale">
                    <q-date
                        minimal
                        mask="MM/YY"
                        emit-immediately
                        default-view="Years"
                        v-model="card.data"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-select
                filled
                v-model="card.parcelas"
                :options="parcelas"
                style="flex: 1;"
                label="Numero de parcelas" />
          </div>

          <div>
            <q-btn label="Finalizar pagamento" type="submit" color="primary"/>
            <q-btn label="Limpar campos" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Assinatura extends Vue{
  cardsPlanos = [
    {icon: "school", nome_plano: "Plano Junior", desconto: "Desconto 10%", parcelas: "12X", preco: "R$85,99", condicao: "à vista"},
    {icon: "lightbulb", nome_plano: "Plano Pleno", desconto: "Desconto 5%", parcelas: "12X", preco: "R$99,99", condicao: "à vista"},
    {icon: "military_tech", nome_plano: "Plano Sênior", desconto: "Desconto 3%", parcelas: "12X", preco: "R$199,99", condicao: "à vista"}
  ]
  list = ["Acesso a todos os cursos da plataforma", "Desafios diarios", "Certificado", "Aulas de Inglês Gratuitas"]

  username = null;
  retrievedObject: any;
  cadastroObj: any;
  currentPlaceholder = '';
  query: any;
  parcelas = ['1x - Á vista', '2x - sem juros', '3x - sem juros','4x - sem juros','5x - sem juros','6x - sem juros','7x - sem juros','8x - sem juros','9x - sem juros','10x - sem juros','11x - sem juros','12x - sem juros',]

  card = {
    plano: 'card1',
    nome: '',
    cpf: '',
    cardNumber: '',
    cvv: '',
    data: '',
    parcelas: '1x - Á vista'
  }

  onSubmit(){
      window.localStorage.setItem ('plano', JSON.stringify (this.card));
      document.location.reload (true);
  }
  onReset () {
    this.card = {
      plano: 'card1',
      nome: '',
      cpf: '',
      cardNumber: '',
      cvv: '',
      data: '',
      parcelas: '1x - Á vista'
    }
  }

   formatCardNumber(value: string){
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
    return onlyNumbers.replace(regex, (regex: any, $1: any, $2: any, $3: any, $4: any) =>
        [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
  }


  checkTypeCard(cur_val: any){
    const jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$');
    const amex_regex = new RegExp('^3[47][0-9]{0,}$');
    const diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$');
    const visa_regex = new RegExp('^4[0-9]{0,}$');
    const mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$');
    const maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$');
    const discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');

    cur_val = cur_val.replace(/\D/g, '');

    let sel_brand = "unknown";
    if (cur_val.match(jcb_regex)) {
      sel_brand = "http://www.br.jcb/pt/common/images/svg/jcb_emblem_logo.svg";
    } else if (cur_val.match(amex_regex)) {
      sel_brand = "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg";
    } else if (cur_val.match(diners_regex)) {
      sel_brand = "https://www.dinersclub.com/content/experience-fragments/diners-club/home-header-xf/master/_jcr_content/root/header/image.coreimg.svg/1627886360030/dci-logo-default.svg";
    } else if (cur_val.match(visa_regex)) {
      sel_brand = "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png";
    } else if (cur_val.match(mastercard_regex)) {
      sel_brand = "https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg";
    } else if (cur_val.match(discover_regex)) {
      sel_brand = "https://www.discover.com/content/dam/dfs/credit-cards/global/images/discover-logo.png";
    } else if (cur_val.match(maestro_regex)) {
      if (cur_val[0] == '5') {
        sel_brand = "https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg";
      } else {
        sel_brand = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/220px-Maestro_2016.svg.png";
      }
    }

    return sel_brand;
  }

  mounted() {
    this.query = this.$route.query.tab;
    if(this.$route.query.tab){this.card.plano = this.query}
    this.retrievedObject = localStorage.getItem('cadastro');
    this.cadastroObj = JSON.parse(this.retrievedObject);
    this.username = this.cadastroObj.name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
</script>

<style scoped>
@font-face {
  font-family: "kredit";
  src: local("kredit"),
  url(../fonts/kredit_back.ttf) format("truetype");
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