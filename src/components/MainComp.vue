<script>
import { store } from '../store';
import CardSliderComp from './CardSliderComp.vue';
import JumboGridComp from './JumboGridComp.vue';
import CarouselComp from './CarouselComp.vue';

export default {
    data() {
        return {
            store,

        };
    },


    components: { CardSliderComp, JumboGridComp, CarouselComp },

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
</template>

<style lang="scss" scoped>
.bord {
    border: 1px dashed red;
}
</style>