<script>
import { store } from '../store';

export default {
    data() {
        return { store };
    },

    created() {
    },

    methods: {
    },
};


</script>

<template>
    <!-- // FIRST LINE HEADER-------------------------------------- -->
    <div class="first-line d-flex ">
        <div class="container d-flex justify-content-between">

            <div class="news-updates d-flex align-items-center me-auto">
                <div class=" d-flex align-items-center fw-bold text-white px-3">NEW UPDATES</div>
                <img src="../assets/img/meal-time-150x150.webp" alt="meal-time">
                <p>5:35 THE _</p>
            </div>

            <div class="change-updates d-flex gap-4 align-items-center me-5">
                <i class="fa-solid fa-angle-left"></i>
                <i class="fa-solid fa-angle-right"></i>
            </div>

            <div class="logos-socials d-flex align-items-center gap-2">
                <div class="logos"><i class="fa-brands fa-facebook-f"></i></div>
                <div class="logos"><i class="fa-brands fa-twitter"></i></div>
                <div class="logos"><i class="fa-brands fa-instagram"></i></div>
                <div class="logos"><i class="fa-brands fa-youtube"></i></div>
            </div>
        </div>
    </div>

    <!-- // SECOND LINE HEADER-------------------------------------- -->
    <div class="second-line-banner d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <img src="../assets/img/anime-logo.webp" alt="anime logo">
            <img src="../assets/img/header-banner.webp" alt="anime logo">
        </div>
    </div>


    <!-- // THIRD LINE HEADER-------------------------------------- -->
    <div class="third-line-link d-flex">
        <div class="container d-flex justify-content-between align-items-center">

            <div class="hamnurger-menu"><i class="fa-solid fa-bars"></i></div>

            <div>

                <ul class="d-flex gap-5 ">

                    <li class="d-flex gap-2 align-items-center fw-bold btn"><i class="fa-solid fa-house-chimney"></i> HOME
                    </li>

                    <li class="d-flex gap-2 align-items-center fw-bold btn dropdown dropdown-toggle" type="button"
                        data-bs-toggle="dropdown"><i class="fa-solid fa-suitcase"></i> LIFESTYLE
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Lifestyle Anime</a></li>
                            <li><a class="dropdown-item" href="#">Fashion Statue</a></li>
                            <li><a class="dropdown-item" href="#">Dress Anime</a></li>
                        </ul>
                    </li>

                    <li class="d-flex gap-2 align-items-center fw-bold btn dropdown dropdown-toggle" type="button"
                        data-bs-toggle="dropdown"><i class="fa-solid fa-book-open-reader"></i>
                        STORIES
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">The Best Healty</a></li>
                            <li><a class="dropdown-item" href="#">Beginners</a></li>

                        </ul>
                    </li>

                    <li class="d-flex gap-2 align-items-center fw-bold btn dropdown dropdown-toggle" type="button"
                        data-bs-toggle="dropdown"><i class="fa-solid fa-book"></i> PAGES
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Carousel Figure</a></li>
                            <li><a class="dropdown-item" href="#">Links Footer</a></li>
                            <li><a class="dropdown-item" href="#">Contacts Us</a></li>
                        </ul>
                    </li>

                    <li class="d-flex gap-2 align-items-center fw-bold btn"><i class="fa-solid fa-user"></i> ABOUT US</li>

                </ul>

            </div>

            <div class="logo-search"><i class="fa-solid fa-magnifying-glass"></i></div>

        </div>
    </div>
</template>






<style lang="scss" scoped>
.bord {
    border: 2px dashed red;
}

// FIRST LINE HEADER--------------------------------------
.first-line {
    background-color: #bf1d2e;
    height: 40px;

}

.news-updates {

    div {
        background-color: #545454;
        height: 100%;
    }

    img {
        max-height: 40px;
        opacity: 0.7;
    }

    p {
        font-size: 15px;
        color: white;
        opacity: 0.5;
        font-weight: bold;
        padding-left: 10px;
        margin: 0;
    }
}

.change-updates {
    i {
        cursor: pointer;
        color: white;
    }

    i:hover {
        color: #333333;
    }

}

.logos-socials {
    .logos {
        background-color: white;
        height: 30px;
        aspect-ratio: 1;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        cursor: pointer;
        color: #bf1d2e;

    }

    .logos:hover {
        background-color: #333333;
        color: white;

    }
}

// SECOND LINE HEADER--------------------------------------
.second-line-banner {
    height: 120px;
    border-bottom: 2px solid #f4f4f4;

    img:first-child {
        height: 65px;
    }

    img:last-child {
        border-radius: 10px;
    }
}

// THIRD LINE HEADER--------------------------------------
.third-line-link {
    color: #333333;
    height: 52px;
    border-bottom: 2px solid #f4f4f4;

    .hamnurger-menu,
    .logo-search {
        font-size: 30px;
    }

    .hamnurger-menu:hover,
    .logo-search:hover {
        color: #bf1d2e;
        cursor: pointer;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li:hover {
            cursor: pointer;
            color: #bf1d2e;
        }
    }
}
</style>