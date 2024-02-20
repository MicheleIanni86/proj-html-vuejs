<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            imgActive: 0,
            carouselSlides: [
                {
                    image: './src/assets/img/success-story.webp',
                    title: 'The Best Success Stories',
                    user: 'Demo',
                    date: 'January 10, 2024',
                    badge: 'Culture'
                },
                {
                    image: './src/assets/img/travel-alone.webp',
                    title: 'Traveling Alone Is Awesome',
                    user: 'Demo',
                    date: 'January 26, 2024',
                    badge: 'Stories'
                },
                {
                    image: './src/assets/img/best-places.webp',
                    title: 'Places For A Road Trip',
                    user: 'Demo',
                    date: 'February 11, 2024',
                    badge: 'Lifestyle'
                },
                {
                    image: './src/assets/img/music-love.webp',
                    title: 'Music The Love Of My Life',
                    user: 'Demo',
                    date: 'February 20, 2024',
                    badge: 'Culture'
                },

            ]
        };
    },






    created() {
        console.log(this.carouselSlides);

    },

    methods: {
        clickImage(indexImg) {
            this.imgActive = indexImg;
        },

    },
};


</script>

<template>
    <div class="container mb-1 d-flex justify-content-between p-0 mb-3">
        <h4 class="fw-bold">LIFESTYLE & STORIES</h4>
        <div class="top-badges-intro d-flex gap-3 align-items-center">
            <p>ALL</p>
            <p>LIFESTYLE</p>
            <p>STORIES</p>
        </div>

    </div>
    <div class="container d-flex justify-content-center p-0">
        <div class="carosello d-flex mb-5">

            <!-- CONTAINER IMMAGINI PRINCIPALI -->
            <div class="slide-container flex-grow-1" id="slideContainer">


                <div class="info-principal  ">
                    <div class="d-flex gap-4">
                        <span class="user-principal"><i class="fa-solid fa-user"></i> {{ carouselSlides[imgActive].user
                        }}</span>
                        <span class="date-principal"><i class="fa-solid fa-calendar-days"></i> {{
                            carouselSlides[imgActive].date
                        }}</span>
                    </div>
                    <div class="title-principal">{{ carouselSlides[imgActive].title }}</div>
                </div>
                <div class="badges-principal">{{ carouselSlides[imgActive].badge }}</div>



                <img :src="carouselSlides[imgActive].image" alt="" class="slide">

            </div>

            <!-- THUMBNAILS -->
            <div class="thumbs container ">

                <!-- THUMB -->
                <div class="thumb " v-for="(slide, index) in carouselSlides">
                    <img :src="slide.image" :alt="slide.title" class="allThumb" :class="index == imgActive ? 'attiva' : ''"
                        @click="clickImage(index)" />
                    <div class="d-flex flex-column info-thumb">
                        <div class="d-flex gap-2">
                            <span class="user-thumb"><i class="fa-solid fa-user"></i> {{ slide.user }}</span>
                            <span class="date-thumb"><i class="fa-solid fa-calendar-days"></i> {{ slide.date }}</span>
                        </div>
                        <div class="title-thumb">{{ slide.title }}</div>
                    </div>
                    <div class="badges-thumb">
                        <p class="m-0">{{ slide.badge }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top-badges-intro {

    p {
        background-color: #525252;
        margin: 0;
        padding: 5px 15px;
        border-radius: 10px;
        color: white;
        font-weight: bolder;
    }
}

.carosello {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;

}

.slide-container {
    height: 100%;
    width: 100%;
    position: relative;

    .info-principal {
        position: absolute;
        bottom: 5%;
        left: 5%;
        color: white;
        font-size: 17px;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 25px;
        border-radius: 20px;

        .title-principal {
            font-size: 22px;
            font-weight: bold;
        }

    }

    .badges-principal {
        position: absolute;
        top: 5%;
        left: 5%;
        background-color: white;
        padding: 5px 20px;
        border-radius: 10px;
        color: #525252;
        font-weight: bolder;
        border: 1px solid #525252;
    }
}

.slide {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.thumbs {
    width: 34%;
    display: flex;
    flex-direction: column;

    .thumb:last-child {
        border-bottom: 0;
    }
}



.thumb {
    height: calc(100% / 4);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-bottom: 2px solid gray;
    position: relative;

    .badges-thumb {
        position: absolute;
        top: 15%;
        left: 5%;
        background-color: white;
        padding: 3px 8px;
        border-radius: 8px;
        font-size: 13px;
        color: #525252;
        font-weight: bolder;
    }

    .info-thumb {
        font-size: 13px;
        color: #525252;
        font-weight: bolder;

    }

    .title-thumb {
        font-size: 15px;
        color: rgb(13, 13, 13);
    }
}


.allThumb {
    height: 100%;
    opacity: 0.5;
    border-radius: 5px;

}

.attiva {
    /* border: 2px solid red; */
    opacity: 1;
}
</style>