<template>
  <q-page-container>
    <BannerCurso/>
    <div class="q-pa-md">
      <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/r_6Ku38sA-c"
      />
    </div>
  </q-page-container>
</template>

<script lang="ts">
import BannerCurso from '@/components/BannerCurso.vue'
import {Options, Vue} from "vue-class-component";
@Options({
  components: {BannerCurso}
})
export default class Curso extends Vue{

}
</script>

<style scoped>

</style>