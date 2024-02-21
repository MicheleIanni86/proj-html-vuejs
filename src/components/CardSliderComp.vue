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
        },

        nextSlide() {
            store.cardsSlide.push(store.cardsSlide.shift());
        },
        prevSlide() {
            store.cardsSlide.unshift(store.cardsSlide.pop());
        }
    },
};


</script>

<template>
    <!-- SLIDER CON CARD -->
    <div class="slider  px-5">
        <div class="row my-5">
            <div v-for="cardSlide in store.cardsSlide" class="col-3">

                <div class="card text-center border-0">
                    <div class="card-image-container" style="position: relative;">
                        <img :src="getImagePath(cardSlide.image)" alt="cardSlide.title" class="card-image">
                        <div class="card-badges-container">
                            <div class="card-badges" v-for="badge in cardSlide.badges" :key="badge">
                                {{ badge }}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title m-0">{{ cardSlide.title }}</h5>
                        <p class="card-text">{{ cardSlide.date }}</p>
                    </div>
                </div>



            </div>
        </div>

        <!-- PULSANTE NEXT -->
        <div class="arrow-prev z-3" @click="nextSlide">
            <div class=" d-flex justify-content-center align-items-center bg-white text-dark boxArrow">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
        </div>

        <!-- PULSANTE PREV -->
        <div class="arrow-next z-3" @click="prevSlide">
            <div class="d-flex justify-content-center align-items-center bg-white text-dark boxArrow">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slider {
    padding: 10px;
    background-color: #f3f3f3;
    position: relative;


    .card-title {
        font-size: 17px;
        font-weight: bold;
    }

    .card-text {
        font-size: 15px;
        font-weight: bold;
        color: gray;
    }




}


.card-image-container {
    position: relative;

    width: 100%;
    height: auto;
    overflow: hidden;
    cursor: pointer;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-badges-container {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;

        .card-badges {
            font-size: 14px;
            font-weight: bolder;
            color: #525252;
            background-color: white;
            padding: 0px 12px;
            border-radius: 5px;
        }
    }
}

.card-image-container:hover {
    opacity: 0.5;
}






// PULSANTI PREV E NEXT------------------------------------
.boxArrow {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.8;

}




.arrow-next {
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;

    i:hover {
        color: #9f2c3c;
        font-size: 25px;
    }

}

.arrow-prev {
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;

    i:hover {
        color: #9f2c3c;
        font-size: 25px;
    }

}
</style>