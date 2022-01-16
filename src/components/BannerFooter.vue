<template>
  <div id="banner" class="flex-center justify-evenly row">
    <div class="text-white items-center flex column text-center q-pa-md">
      <q-icon name="event_available" size="52px" />
      <p style="font-size: 18px">Acesso completo<br> vitalicio</p>
    </div>
    <div class="text-white items-center flex column text-center q-pa-md">
      <q-icon name="dark_mode" size="52px" />
      <p style="font-size: 18px">Estude 24h/dia <br> onde e quando quiser</p>
    </div>
    <div class="text-white items-center flex column text-center q-pa-md">
      <q-icon name="autorenew" size="52px" />
      <p style="font-size: 18px">Novos cursos <br>todas as semanas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerFooter"
}
</script>

<style scoped>
#banner{
  background-color: #37474f;
}
</style>