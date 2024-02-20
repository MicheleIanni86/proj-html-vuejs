<script>
import { store } from '../store';



export default {
    data() {
        return {
            store,
            imgLogoFooter: './src/assets/img/anime-whitelogo.png',
            footerLinks: [
                {
                    title: 'GET STARTED',
                    link1: 'Resources',
                    link2: 'Tutorials',
                    link3: 'Examples',
                    link4: 'Docs'
                },
                {
                    title: 'ABOUT',
                    link1: 'Stories',
                    link2: 'Community',
                    link3: 'Blog',
                    link4: 'Brand Assets'
                },
                {
                    title: 'FEATURES',
                    link1: 'Overview',
                    link2: 'Design',
                    link3: 'Code',
                    link4: 'Collaborate'
                },
                {
                    title: 'QUICK LINKS',
                    link1: 'Stories',
                    link2: 'Community',
                    link3: 'Blog',
                    link4: 'Brand Assets'
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
    <div class="footer">
        <div class="triangolo"></div>

        <div class="container">

            <div class="row group-list">

                <div class="col-8 d-flex gap-5 pe-5 list-link">
                    <ul v-for="link in footerLinks">
                        <li><a href="">{{ link.title }}</a></li>
                        <li><a href="">{{ link.link1 }}</a></li>
                        <li><a href="">{{ link.link2 }}</a></li>
                        <li><a href="">{{ link.link3 }}</a></li>
                        <li><a href="">{{ link.link4 }}</a></li>
                    </ul>
                </div>

                <div class="col-4 subscribe-form">
                    <div>SUBSCRIBE TO NEWSLETTER</div>
                    <div class="my-3">
                        <input type="email" class="form-control" placeholder="Email">
                        <button type="button" class="btn subscribe-button mt-3">SUBSCRIBE</button>
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-between align-items-center text-white logo-footer mt-4">
                <img :src="imgLogoFooter" alt="">
                <p>&#169; Anime Tech, Theme by HasnainDEV</p>
            </div>

        </div>


    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    margin-bottom: 50px;
    padding-left: 0;
}

.footer {
    position: relative;
    height: 380px;
    background-color: #bf1d2e;
    border-top: 5px solid #333333;

    .triangolo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 10px solid #333333;
    }

    .group-list {
        border-bottom: 1px solid white;

    }

    .list-link {
        justify-content: space-between;
        margin-top: 50px;

        a {
            text-decoration: none;
            color: white;
            font-size: 15px;
            font-weight: bolder;
        }

        li {
            padding-bottom: 8px;
        }

        ul li:first-child a {
            font-weight: bold;
            font-size: 18px;
            pointer-events: none;
        }
    }

    .subscribe-form {
        margin-top: 50px;
        font-weight: bold;
        font-size: 18px;
        color: white;

        .subscribe-button {
            background-color: #545453;
            color: white;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            height: 50px;
        }

        .subscribe-button:hover {
            background-color: white;
            color: #bf1d2e;
        }
    }

    .logo-footer {
        img {
            height: 65px;
        }

        p {
            margin: 0;
        }
    }
}
</style>