<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            cardsPosts: [
                {
                    image: 'ideas-anime.webp',
                    title: 'Live Ideas You Might Be Anime',
                    date: 'January 12, 2024',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias! Cum distinctio itaque ducimus, delectus quaerat, nam mollitia culpa voluptatem similique, eius fugit et quia architecto aliquid maxime facere! Quo!',
                    badges: ['Culture', 'Stories']
                },
                {
                    image: 'visit-france.webp',
                    title: 'Reasons To Visit France',
                    date: 'January 29, 2024',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias! Cum distinctio itaque ducimus, delectus quaerat, nam mollitia culpa voluptatem similique, eius fugit et quia architecto aliquid maxime facere! Quo!',
                    badges: ['Lifestyle', 'Travel']
                },
                {
                    image: 'travel-alone.webp',
                    title: 'Traveling Alone is Awesone',
                    date: 'February 20, 2024',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias! Cum distinctio itaque ducimus, delectus quaerat, nam mollitia culpa voluptatem similique, eius fugit et quia architecto aliquid maxime facere! Quo!',
                    badges: ['Stories', 'Travel']
                },
            ]
        };
    },

    created() {


    },

    methods: {
        getImagePath(image) {
            return `../src/assets/img/${image}`;
        }

    },
};


</script>

<template>
    <div class="container mb-1 d-flex justify-content-between mb-1 align-items-center">
        <h4 class="fw-bold m-0">FEATURED POSTS</h4>
        <div class="top-badges-intro d-flex gap-3 align-items-center">
            <div class="button-prev"><i class="fa-solid fa-circle-chevron-left"></i></div>
            <div class="button-next"><i class="fa-solid fa-circle-chevron-right"></i></div>
        </div>
    </div>

    <div class="container mb-5">

        <div class="row">
            <div class="col-4" v-for="post in cardsPosts">
                <div class="card text-center position-relative">
                    <img :src="getImagePath(post.image)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-date">{{ post.date }}</p>
                        <p class="card-text">{{ post.description }}</p>
                        <button href="#" class="btn">Read More</button>
                    </div>
                    <div class="budges d-flex gap-4">
                        <span v-for="badge in post.badges">{{ badge }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.button-prev,
.button-next {
    font-size: 35px;
    cursor: pointer;
}

.button-prev:hover,
.button-next:hover {
    color: #bf1d2e;
}

.budges {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);

    span {
        background-color: white;
        padding: 0 10px;
        border-radius: 5px;
        color: #525252;
        font-weight: bolder;
        font-size: 15px;
    }

}

.card {
    border: none;
    background-color: #f3f3f3;
}

.card-body {
    .card-title {
        font-size: 18px;
        font-weight: bolder;
        margin: 0;
        padding-top: 10px;
    }

    .card-date {
        font-size: 16px;
        font-weight: bolder;
        color: #666464;
        margin-bottom: 5px;
    }

    .card-text {
        font-size: 15px;
    }

    button {
        background-color: #bf1d2e;
        border-radius: 50px;
        color: white;
        font-weight: bolder;
        padding: 5px 30px;
    }
}
</style>