<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            imagesSquare: [
                {
                    image: 'anime-fashion.webp',
                    text: 'FASHION'
                },
                {
                    image: 'success-story.webp',
                    text: 'CULTURE'
                },
                {
                    image: 'healthy-foods.webp',
                    text: 'FOOD'
                },
                {
                    image: 'visit-france.webp',
                    text: 'LIFESTYLE'
                },
                {
                    image: 'travel-alone.webp',
                    text: 'STORIES'
                },
                {
                    image: 'best-places.webp',
                    text: 'TRAVEL'
                },
            ]
        };
    },






    created() {


    },

    methods: {
        getPathImage(image) {
            return `./src/assets/img/${image}`;
        }

    },
};


</script>

<template>
    <div class="row mx-4 mb-2">
        <div class="col-2 img-square" v-for="square in imagesSquare">
            <img :src="getPathImage(square.image)" alt="">
            <div>{{ square.text }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-square {
    position: relative;

    img {
        max-width: 100%;
        border-radius: 15px;
        filter: brightness(50%);
        opacity: 0.8;
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
        font-weight: bold;
    }
}
</style>