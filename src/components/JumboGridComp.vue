<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            cardsJumbo: [
                {
                    image: 'anime-fashion.webp',
                    date: '<i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> January 11, 2024',
                    title: 'Fashion Trend Now A Days',
                    badges: ['Fashion', 'Lifestyle']
                },
                {
                    image: 'travel-alone.webp',
                    date: '<i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> January 28, 2024',
                    title: 'Traveling Alone Is Awesone',
                    badges: ['Stories', 'Travel']
                },
                {
                    image: 'best-places.webp',
                    date: '<i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> February 7, 2024',
                    title: 'Places For A Road Trip',
                    badges: ['Lifestyle', 'Stories', 'Travel']
                },
                {
                    image: 'music-love.webp',
                    date: '<i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> February 19, 2024',
                    title: 'Music The Love Of My Life',
                    badges: ['Culture', 'Lifestyle']
                },
                {
                    image: 'visit-france.webp',
                    date: '<i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> February 20, 2024',
                    title: 'Reasons To Visit France',
                    badges: ['Lifestyle', 'Travel']
                },
            ]
        };
    },






    created() {
        console.log(this.cardsJumbo);


    },

    methods: {
        getImagePath(image) {
            return `./src/assets/img/${image}`;
        }

    },
};


</script>

<template>
    <div class="container">
        <div class="row my-5 gap-2">
            <!-- Colonna di sinistra con due immagini impilate -->
            <div class="col-3 d-flex flex-column justify-content-between p-0 gap-2">
                <div class="left-jumbo-top">
                    <img :src="getImagePath(cardsJumbo[0].image)" class="img-fluid h-100 mb-2 rounded"
                        :alt="cardsJumbo[0].title">
                </div>
                <div class="left-jumbo-bottom">
                    <img :src="getImagePath(cardsJumbo[1].image)" class="img-fluid h-100 rounded"
                        :alt="cardsJumbo[1].title">
                </div>

            </div>

            <!-- Immagine centrale -->
            <div class="col-6 center-jumbo p-0">
                <img :src="getImagePath(cardsJumbo[2].image)" class="img-fluid h-100 rounded" :alt="cardsJumbo[2].title">
            </div>

            <!-- Colonna di destra con due immagini impilate -->
            <div class="col-3 d-flex flex-column justify-content-between p-0 gap-2">
                <div class="right-jumbo-top">
                    <img :src="getImagePath(cardsJumbo[3].image)" class="img-fluid h-100 mb-2 rounded"
                        :alt="cardsJumbo[3].title">
                </div>
                <div class="right-jumbo-bottom">
                    <img :src="getImagePath(cardsJumbo[4].image)" class="img-fluid h-100 rounded"
                        :alt="cardsJumbo[4].title">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.left-jumbo-top,
.left-jumbo-bottom,
.center-jumbo,
.right-jumbo-top,
.right-jumbo-bottom {
    background-color: black;
    border-radius: 8px;

    img {

        opacity: 0.6;
    }
}

.center-jumbo {
    width: 48%;
}
</style>