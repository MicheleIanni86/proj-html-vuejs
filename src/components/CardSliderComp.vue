<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            cardsSlide: [
                {
                    image: 'healthy-foods.webp',
                    title: 'The Best Healthy Foods In 2022',
                    date: 'January 11, 2024',
                    badges: ['Food']
                },
                {
                    image: 'winter.webp',
                    title: 'The Best Winter Outfits',
                    date: 'January 28, 2024',
                    badges: ['Fashion']
                },
                {
                    image: 'photographers-mistakes.webp',
                    title: 'Beginner Photographer\'s Mistakes',
                    date: 'February 7, 2024',
                    badges: ['Fashion']
                },
                {
                    image: 'ideas-anime.webp',
                    title: 'Live Ideas You Might Be Anime',
                    date: 'February 19, 2024',
                    badges: ['Culture', 'Stories']
                },
            ]
        };
    },






    created() {
        console.log(this.cardsSlide);

    },

    methods: {
        getImagePath(image) {
            return `./src/assets/img/${image}`;
        },

        nextSlide() {
            this.cardsSlide.push(this.cardsSlide.shift());
        },
        prevSlide() {
            this.cardsSlide.unshift(this.cardsSlide.pop());
        }


    },
};


</script>

<template>
    <!-- SLIDER CON CARD -->
    <div class="slider  px-5">
        <div class="row my-5">
            <div v-for="cardSlide in cardsSlide" class="col-3 animate__animated animate__fadeIn">

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