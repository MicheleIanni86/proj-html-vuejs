<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            cardsJumbo: [
                {
                    image: 'anime-fashion.webp',
                    date: 'January 11, 2024',
                    user: 'demo',
                    title: 'Fashion Trend Now A Days',
                    badges: ['Fashion', 'Lifestyle']
                },
                {
                    image: 'travel-alone.webp',
                    date: 'January 28, 2024',
                    user: 'demo',
                    title: 'Traveling Alone Is Awesone',
                    badges: ['Stories', 'Travel']
                },
                {
                    image: 'best-places.webp',
                    date: 'February 7, 2024',
                    user: 'demo',
                    title: 'Places For A Road Trip',
                    badges: ['Lifestyle', 'Stories', 'Travel']
                },
                {
                    image: 'music-love.webp',
                    date: 'February 19, 2024',
                    user: 'demo',
                    title: 'Music The Love Of My Life',
                    badges: ['Culture', 'Lifestyle']
                },
                {
                    image: 'visit-france.webp',
                    date: 'February 20, 2024',
                    user: 'demo',
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
                    <!-- Immagine -->
                    <img :src="getImagePath(cardsJumbo[0].image)" class="img-fluid h-100 mb-2 rounded opacity-hover"
                        :alt="cardsJumbo[0].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ cardsJumbo[0].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ cardsJumbo[0].date }}</span>
                        <p> {{ cardsJumbo[0].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ cardsJumbo[0].badges[0] }}</span>
                        <span>{{ cardsJumbo[0].badges[1] }}</span>
                    </div>
                </div>
                <div class="left-jumbo-bottom">
                    <!-- Immagine -->
                    <img :src="getImagePath(cardsJumbo[1].image)" class="img-fluid h-100 rounded opacity-hover"
                        :alt="cardsJumbo[1].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ cardsJumbo[1].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ cardsJumbo[1].date }}</span>
                        <p> {{ cardsJumbo[1].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ cardsJumbo[1].badges[0] }}</span>
                        <span>{{ cardsJumbo[1].badges[1] }}</span>
                    </div>
                </div>


            </div>

            <!-- Immagine centrale -->
            <div class="col-6 center-jumbo p-0">
                <!-- Immagine -->
                <img :src="getImagePath(cardsJumbo[2].image)" class="img-fluid h-100 rounded opacity-hover"
                    :alt="cardsJumbo[2].title">
                <!-- Data e Titolo -->
                <div class="info text-center">
                    <span><i class="fa-solid fa-user"></i> {{ cardsJumbo[2].user }}</span>
                    <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ cardsJumbo[2].date }}</span>
                    <p> {{ cardsJumbo[2].title }}</p>
                </div>
                <!-- Badges -->
                <div class="badges d-flex justify-content-center gap-3">
                    <span>{{ cardsJumbo[2].badges[0] }}</span>
                    <span>{{ cardsJumbo[2].badges[1] }}</span>
                    <span>{{ cardsJumbo[2].badges[2] }}</span>
                </div>
            </div>

            <!-- Colonna di destra con due immagini impilate -->
            <div class="col-3 d-flex flex-column justify-content-between p-0 gap-2">
                <div class="right-jumbo-top">
                    <!-- Immagine -->
                    <img :src="getImagePath(cardsJumbo[3].image)" class="img-fluid h-100 mb-2 rounded opacity-hover"
                        :alt="cardsJumbo[3].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ cardsJumbo[3].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ cardsJumbo[3].date }}</span>
                        <p> {{ cardsJumbo[3].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ cardsJumbo[3].badges[0] }}</span>
                        <span>{{ cardsJumbo[3].badges[1] }}</span>
                    </div>
                </div>
                <div class="right-jumbo-bottom">
                    <!-- Immagine -->
                    <img :src="getImagePath(cardsJumbo[4].image)" class="img-fluid h-100 rounded opacity-hover"
                        :alt="cardsJumbo[4].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ cardsJumbo[4].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ cardsJumbo[4].date }}</span>
                        <p> {{ cardsJumbo[4].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ cardsJumbo[4].badges[0] }}</span>
                        <span>{{ cardsJumbo[4].badges[1] }}</span>
                    </div>
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

.left-jumbo-top,
.left-jumbo-bottom,
.center-jumbo,
.right-jumbo-top,
.right-jumbo-bottom {
    position: relative;

    .info {
        width: 100%;
        margin: 0;
        position: absolute;
        bottom: 5px;
        right: 50%;
        transform: translateX(50%);
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .badges {
        position: absolute;
        top: 10px;
        right: 50%;
        transform: translateX(50%);

        span {
            background-color: white;
            padding: 0 10px;
            border-radius: 5px;
            color: #525252;
            font-size: 14px;
            font-weight: bolder;
        }
    }
}

.row {
    .opacity-hover {
        opacity: 0.4;
        cursor: pointer;
    }

    .opacity-hover:hover {
        opacity: 1;
    }
}
</style>