<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            readMoreDrop: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quidem ex. Nesciunt illum,
                                numquam libero temporibus et iste dolore vitae quaerat aspernatur nulla assumenda illo!
                                Dolorem minima eum dolor eos?
                                Sunt quam porro numquam recusandae praesentium aliquid dolor pariatur nisi quaerat iste
                                optio, saepe a voluptatibus quia debitis cupiditate doloribus quae rem quasi tempora
                                repudiandae dignissimos ut ullam molestias! Consectetur?
                                Quibusdam praesentium, ipsam officiis qui quasi, omnis explicabo, eum quod illo accusantium
                                nemo. Quia amet exercitationem tempora, quos, laboriosam dolorum molestias voluptatibus
                                perspiciatis harum omnis id cumque maiores dignissimos? Quod.`
        };
    },

    created() {
    },

    methods: {
        getImagePath(image) {
            return `../src/assets/img/${image}`;
        },

        nextSlide() {
            store.cardsPosts.push(store.cardsPosts.shift());
        },
        prevSlide() {
            store.cardsPosts.unshift(store.cardsPosts.pop());
        }
    },
};


</script>

<template>
    <div class="container mb-1 d-flex justify-content-between mb-1 align-items-center">
        <h4 class="fw-bold m-0">FEATURED POSTS</h4>
        <div class="top-badges-intro d-flex gap-3 align-items-center">
            <div class="button-prev"><i class="fa-solid fa-circle-chevron-left" @click="nextSlide"></i></div>
            <div class="button-next"><i class="fa-solid fa-circle-chevron-right" @click="prevSlide"></i></div>
        </div>
    </div>

    <div class="container mb-5">

        <div class="row">
            <div class="col-4" v-for="post in store.cardsPosts">
                <div class="card text-center position-relative">
                    <img :src="getImagePath(post.image)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-date">{{ post.date }}</p>
                        <p class="card-text">{{ post.description }}</p>
                        <button href="#" class="btn btn-hover dropdown-center" type="button" data-bs-toggle="dropdown">Read
                            More</button>
                        <div class="dropdown-menu  p-4  text-body-secondary" style="max-width: 400px;">
                            <p>{{ readMoreDrop }}</p>
                            <p class="mb-0 fw-bolder">{{ post.title }}</p>
                            <p class="mb-0">{{ post.date }}</p>
                        </div>
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
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
    cursor: pointer;
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

    .btn-hover:hover {
        background-color: #525252;
    }
}
</style>