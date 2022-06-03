import Vue from 'vue';
import VueRouter from 'vue-router';
import Starships from '@/views/Starships.vue';
import Films from '@/views/Films.vue';
import Starship from '@/views/Starship.vue';
import Film from '@/views/Film.vue';

Vue.use(VueRouter);

const props = (route) => ({
  page: Number(route.query.page),
  search: route.query.search,
  searchPage: Number(route.query.searchPage)
});

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Films',
      query: {
        page: 1
      }
    }
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
    props
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/starship/:id',
    name: 'Starship',
    component: Starship,
    props: true
  },
  {
    path: '/film/:id',
    name: 'Film',
    component: Film,
    props: true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
