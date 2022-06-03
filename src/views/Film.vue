<template>
  <main>
    <Loader v-if="loading"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <section>
      <SectionMovieIntro title=""
                            :name="film.title"
                            :data="film.opening_crawl"
                            :release="film.release_date"
                            :director="film.director"
                            :producer="film.producer"/>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SectionMovieIntro from '@/components/SectionMovieIntro.vue';
import Loader from '@/components/Loader.vue';
import ErrorHandler from '@/components/ErrorHandler.vue';

export default {
  name: 'Vehicle',
  data () {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['id'],
  components: {
    SectionMovieIntro,
    Loader,
    ErrorHandler
  },
  computed: {
    ...mapGetters(['getFilm']),
    film () {
      return this.getFilm(this.id);
    }
  },
  methods: {
    ...mapActions(['fetchFilm']),
    fetchData () {
      this.loading = true;
      this.fetchFilm(this.id).then((error) => {
        this.loading = false;
        this.error = error;
      });
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    '$route.params.id': 'fetchData'
  }
};
</script>
