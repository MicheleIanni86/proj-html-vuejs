<script>
import { store } from '../store';
import CardSliderComp from './CardSliderComp.vue';
import JumboGridComp from './JumboGridComp.vue';
import CarouselComp from './CarouselComp.vue';
import FeaturedPostsComp from './FeaturedPostsComp.vue';
import YoutubeComp from './YoutubeComp.vue';
import PreFooterComp from './PreFooterComp.vue';


export default {
    data() {
        return {
            store,
        };
    },


    components: { CardSliderComp, JumboGridComp, CarouselComp, FeaturedPostsComp, YoutubeComp, PreFooterComp },

    created() {


    },

    methods: {


    },
};


</script>

<template>
    <CardSliderComp></CardSliderComp>
    <JumboGridComp></JumboGridComp>
    <CarouselComp></CarouselComp>
    <!-- big Banner -->
    <div class="big-banner mb-5">
        <img class="container" :src="store.bigBanner" alt="">
    </div>

    <FeaturedPostsComp></FeaturedPostsComp>
    <YoutubeComp></YoutubeComp>
    <PreFooterComp></PreFooterComp>
</template>

<style lang="scss" scoped>
.bord {
    border: 1px dashed red;
}
</style>