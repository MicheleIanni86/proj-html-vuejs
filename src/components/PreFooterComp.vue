<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            imgActive: 0,
            imagesSquare: [
                {
                    image: 'anime-fashion.webp',
                    text: 'FASHION',
                    post: '4 POSTS'

                },
                {
                    image: 'success-story.webp',
                    text: 'CULTURE',
                    post: '2 POSTS'
                },
                {
                    image: 'healthy-foods.webp',
                    text: 'FOOD',
                    post: '3 POSTS'
                },
                {
                    image: 'visit-france.webp',
                    text: 'LIFESTYLE',
                    post: '1 POST'
                },
                {
                    image: 'travel-alone.webp',
                    text: 'STORIES',
                    post: '4 POSTS'
                },
                {
                    image: 'best-places.webp',
                    text: 'TRAVEL',
                    post: '5 POSTS'
                },
            ]
        };
    },






    created() {


    },

    methods: {
        getPathImage(image) {
            return `./src/assets/img/${image}`;
        },

        clickImage(index) {
            this.imgActive = index;
        },
    },
};


</script>

<template>
    <div class="row mx-4 mb-2">
        <div class="col-2 img-square" v-for="(square, index) in imagesSquare">
            <img :src="getPathImage(square.image)" :class="index == imgActive ? 'square-hover' : ''" alt=""
                @mouseenter="clickImage(index)">
            <div class="text">{{ square.text }}</div>
            <div v-if="index == imgActive" class="overlay">
                <p class="int-overlay">{{ square.post }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-square {
    position: relative;
    overflow: hidden;

    .overlay {
        cursor: pointer;
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%);

        border-radius: 20px;
        color: white;
        font-size: 18px;
        font-weight: bold;
        width: 85%;
        height: 85%;
        border: 5px solid white;



        .int-overlay {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
        }
    }


    img {
        display: block;
        max-width: 100%;
        border-radius: 15px;
        filter: brightness(50%);
        transition: opacity 0.5s ease;
        cursor: pointer;
    }

    .text {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
        font-weight: bold;
    }

    .square-hover {
        filter: brightness(35%) sepia(1) hue-rotate(-50deg) saturate(450%);
    }
}
</style>