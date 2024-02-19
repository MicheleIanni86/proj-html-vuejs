<script>
import { store } from '../store';
import CardSliderComp from './CardSliderComp.vue';
import JumboGridComp from './JumboGridComp.vue';

export default {
    data() {
        return {
            store,

        };
    },


    components: { CardSliderComp, JumboGridComp },

    created() {


    },

    methods: {


    },
};


</script>

<template>
    <CardSliderComp></CardSliderComp>
    <JumboGridComp></JumboGridComp>
</template>

<style lang="scss" scoped>
.bord {
    border: 1px dashed red;
}
</style>