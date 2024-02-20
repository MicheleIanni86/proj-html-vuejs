<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            mainImage: './src/assets/img/sddefault.webp',
            thumbsYoutube: [
                {
                    id: 1,
                    image: './src/assets/img/default.webp',
                    text: 'Overlord Season 4 - Official Trailer 3 | AniTV'
                },
                {
                    id: 2,
                    image: './src/assets/img/hqdefault (1).jpg',
                    text: 'Reant A Girlfriend Season 2 - Official Trailer | AniTV'
                },
                {
                    id: 3,
                    image: './src/assets/img/rice-ball.webp',
                    text: 'Uncle From Another World - Official Trailer 2 | AniTV'
                },
                {
                    id: 4,
                    image: './src/assets/img/travel-alone-300x200.webp',
                    text: 'Prima Doll - Official Trailer | AniTV'
                },
                {
                    id: 5,
                    image: './src/assets/img/ideas-anime.webp',
                    text: 'Shoot! Goal To The Future - Official Trailer | AniTV'
                },
                {
                    id: 6,
                    image: './src/assets/img/best-places-300x200.webp',
                    text: 'Play The Funk Music White Boy - Official Trailer | AniTV'
                },
            ]
        };
    },

    created() {


    },

    methods: {


    },
};


</script>

<template>
    <div class="container">
        <div class="container-youtube rounded-3 d-flex mb-5 ">
            <div class="main-image d-flex">
                <img :src="mainImage" alt="">
            </div>

            <div class="list-videos d-flex flex-column ">
                <div class="list-head d-flex align-items-center text-white">
                    <div class="mx-4 display-5"><i class="fa-solid fa-play"></i></div>
                    <div class="info-list-video">
                        <p class="m-0 fw-bold fs-5">Video Playlist</p>
                        <p class="m-0">1/6 Videos</p>
                    </div>
                </div>
                <div class="container-list ">

                    <div class="thumb-video " v-for="thumb in thumbsYoutube">

                        <div class="numId">{{ thumb.id }}</div>
                        <div class="box-image">
                            <img :src="thumb.image" alt="">
                        </div>
                        <div class="text">{{ thumb.text }}</div>

                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bord {
    border: 2px dashed red;
}

.bordgreen {
    border-bottom: 2px dashed green;
}

.container-youtube {
    overflow: hidden;
}


.main-image {
    width: 70%;
    height: 500px;

    img {
        width: 100%;
        object-fit: cover;


    }
}

.list-videos {
    width: 30%;

}

.list-head {
    background-color: #333333;
    min-height: 70px;
}

.container-list {
    height: 430px;
    overflow: auto;
}

.thumb-video {
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: #f3f3f3;
    border-bottom: 1px solid #313134;

    div:last-child {
        border-bottom: 0;
    }

    .numId {
        background-color: #313134;
        color: white;
        padding: 5px 10px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 13px;
        font-weight: bolder;
    }

    .numId:hover {
        background-color: #bf1d2e;
    }

    img {
        width: 150px;
        height: 100px;
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;
    }

    img:hover {
        opacity: 0.5;
    }

    .text {
        font-size: 13px;
        font-weight: bolder;
        color: #484849;
        cursor: pointer;
    }

    .text:hover {
        color: #bf1d2e;
    }
}
</style>