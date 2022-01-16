import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from "@/pages/Error404.vue";
import Curso from "@/views/Curso.vue";
import UserCurso from "@/components/UserCurso.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Curso',
    name: 'Curso',
    component: Curso
  },
  {
    path: '/meus_cursos',
    name: 'Meus cursos',
    component: UserCurso
  },

  { path: '/:pathMatch(.*)*', component: Error404}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
