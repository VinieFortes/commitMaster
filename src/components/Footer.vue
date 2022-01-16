<template>
  <q-footer id="footer" style="background-color: #263238" class="footer text-white">
    <div id="menu" class="q-pa-md row justify-between">

      <div class="column items-center q-pa-sm">
        <img src="../assets/logo.png" alt="CommitMaster" width="164">
        <p id="slogan" class="q-pa-sm">Desenvolvendo o seu futuro profissional</p>

        <div class="row">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>


      <q-list padding class="wrap row items-baseline" style="max-height: 500px;">

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: white; font-weight: bold; font-size: 18px; margin-bottom: 10px">FALE COM A GENTE</q-item-label>
            <q-item-label style="color: white; margin-bottom: 5px">Email: contato@commitmaster.com.br</q-item-label>
            <q-item-label style="color: white; margin-bottom: 25px">Fone: +(55) 33 9946-8565</q-item-label>
            <q-item-label style="color: white; margin-bottom: 5px"><a class="fa fa-whatsapp" style="font-size: 15px; width: 100%; text-align: start; text-decoration: none;"> Nos chame no WhatsApp</a></q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

      <q-list padding class="wrap items-baseline">

        <q-item class="column items-center">
          <q-item-label overline style="color: white; font-weight: bold; font-size: 18px; margin-bottom: 10px">NAVEGAÇÃO</q-item-label>
              <router-link to="/"><q-item-label style="color: white; margin-bottom: 5px">Home</q-item-label></router-link>
              <router-link to="#"><q-item-label style="color: white; margin-bottom: 5px">Sobre</q-item-label></router-link>
              <router-link to="#"><q-item-label style="color: white; margin-bottom: 5px">Contatos</q-item-label></router-link>
              <router-link to="#"><q-item-label style="color: white; margin-bottom: 5px">Planos</q-item-label></router-link>
              <router-link to="#"><q-item-label style="color: white; margin-bottom: 5px">Cursos</q-item-label></router-link>
              <router-link to="#"><q-item-label style="color: white; margin-bottom: 5px">Formação</q-item-label></router-link>

        </q-item>

      </q-list>

    </div>
    <div class="corpy row">
      <div>
        <p>© Copyright. Todos os direitos reservados. <a href="#">Termo de Uso</a> <a href="#">Declaração de acessibilidade</a>   <a href="#">Política de privacidade</a></p>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.corpy{
  padding-left: 2%;
}
a{
  margin-left: 10px;
  color: #606062;
}
q-item-label{
  color: #606062;
}
.fa {
  font-size: 25px;
  width: 40px;
  color: white;
  text-align: center;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  #menu{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .corpy{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .corpy a {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
a{
  text-decoration: none;
  margin-top: 5px;
}
</style>