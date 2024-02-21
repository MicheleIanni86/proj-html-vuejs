<script>
import { store } from './store';

import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  data() {
    return { store };


  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  components: { HeaderComp, MainComp, FooterComp },




};
</script>

<template>
  <HeaderComp></HeaderComp>
  <MainComp></MainComp>
  <FooterComp></FooterComp>
  <div>
    <b-button class="btn-round" variant="primary" @click="scrollToTop">
      <i class="fa-solid fa-angles-up"></i> Su
    </b-button>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
