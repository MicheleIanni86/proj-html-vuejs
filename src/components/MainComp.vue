<script>
import { store } from '../store';
import CardSliderComp from './CardSliderComp.vue';
import JumboGridComp from './JumboGridComp.vue';
import CarouselComp from './CarouselComp.vue';
import FeaturedPostsComp from './FeaturedPostsComp.vue';

export default {
    data() {
        return {
            store,


        };
    },


    components: { CardSliderComp, JumboGridComp, CarouselComp, FeaturedPostsComp },

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
</template>

<style lang="scss" scoped>
.bord {
    border: 1px dashed red;
}
</style>