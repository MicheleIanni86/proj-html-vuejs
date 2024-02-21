<script>
import { store } from '../store';



export default {
    data() {
        return { store };
    },

    created() {
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
                    <img :src="getImagePath(store.cardsJumbo[0].image)" class="img-fluid h-100 mb-2 rounded opacity-hover"
                        :alt="store.cardsJumbo[0].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ store.cardsJumbo[0].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ store.cardsJumbo[0].date }}</span>
                        <p> {{ store.cardsJumbo[0].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ store.cardsJumbo[0].badges[0] }}</span>
                        <span>{{ store.cardsJumbo[0].badges[1] }}</span>
                    </div>
                </div>
                <div class="left-jumbo-bottom">
                    <!-- Immagine -->
                    <img :src="getImagePath(store.cardsJumbo[1].image)" class="img-fluid h-100 rounded opacity-hover"
                        :alt="store.cardsJumbo[1].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ store.cardsJumbo[1].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ store.cardsJumbo[1].date }}</span>
                        <p> {{ store.cardsJumbo[1].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ store.cardsJumbo[1].badges[0] }}</span>
                        <span>{{ store.cardsJumbo[1].badges[1] }}</span>
                    </div>
                </div>


            </div>

            <!-- Immagine centrale -->
            <div class="col-6 center-jumbo p-0">
                <!-- Immagine -->
                <img :src="getImagePath(store.cardsJumbo[2].image)" class="img-fluid h-100 rounded opacity-hover"
                    :alt="store.cardsJumbo[2].title">
                <!-- Data e Titolo -->
                <div class="info text-center">
                    <span><i class="fa-solid fa-user"></i> {{ store.cardsJumbo[2].user }}</span>
                    <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ store.cardsJumbo[2].date }}</span>
                    <p> {{ store.cardsJumbo[2].title }}</p>
                </div>
                <!-- Badges -->
                <div class="badges d-flex justify-content-center gap-3">
                    <span>{{ store.cardsJumbo[2].badges[0] }}</span>
                    <span>{{ store.cardsJumbo[2].badges[1] }}</span>
                    <span>{{ store.cardsJumbo[2].badges[2] }}</span>
                </div>
            </div>

            <!-- Colonna di destra con due immagini impilate -->
            <div class="col-3 d-flex flex-column justify-content-between p-0 gap-2">
                <div class="right-jumbo-top">
                    <!-- Immagine -->
                    <img :src="getImagePath(store.cardsJumbo[3].image)" class="img-fluid h-100 mb-2 rounded opacity-hover"
                        :alt="store.cardsJumbo[3].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ store.cardsJumbo[3].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ store.cardsJumbo[3].date }}</span>
                        <p> {{ store.cardsJumbo[3].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ store.cardsJumbo[3].badges[0] }}</span>
                        <span>{{ store.cardsJumbo[3].badges[1] }}</span>
                    </div>
                </div>
                <div class="right-jumbo-bottom">
                    <!-- Immagine -->
                    <img :src="getImagePath(store.cardsJumbo[4].image)" class="img-fluid h-100 rounded opacity-hover"
                        :alt="store.cardsJumbo[4].title">
                    <!-- Data e Titolo -->
                    <div class="info text-center">
                        <span><i class="fa-solid fa-user"></i> {{ store.cardsJumbo[4].user }}</span>
                        <span class="ms-4"><i class="fa-solid fa-calendar-days"></i> {{ store.cardsJumbo[4].date }}</span>
                        <p> {{ store.cardsJumbo[4].title }}</p>
                    </div>
                    <!-- Badges -->
                    <div class="badges d-flex justify-content-center gap-3">
                        <span>{{ store.cardsJumbo[4].badges[0] }}</span>
                        <span>{{ store.cardsJumbo[4].badges[1] }}</span>
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