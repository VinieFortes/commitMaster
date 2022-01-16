<template>
  <div id="menu">
    <q-list bordered class="row flex-center" style="padding: 10px; background-color: #37474f">
      <q-item clickable v-ripple>
        <q-item-section class="text-white" style="font-weight: bolder">PROGRAMAÇÃO</q-item-section>
      </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">FRONT-END</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">DATA SCIENCE</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">DEVOPS</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">UX E DESIGN</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">MOBILE</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="text-white" style="font-weight: bolder">INOVAÇÃO E GESTÃO</q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>