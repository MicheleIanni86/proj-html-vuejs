import { reactive } from "vue";
export const store = reactive({

    bigBanner: './src/assets/img/page-banner-1.webp',

    // ARRAY PER CardSliderComp.vue-----------------------------------
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
    ],
    // ARRAY PER JumboGridComp.vue-------------------------------------
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
    ],
    // ARRAY PER CarouselComp.vue-------------------------------------
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

    ],
    // ARRAY PER FeaturedPostsComp.vue--------------------------------
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
    ],
    // ARRAY PER YoutubeComp.vue-------------------------------------
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
    ],
    // ARRAY PER PreFooterComp.vue-----------------------------------
    imagesSquare: [
        {
            image: 'anime-fashion.webp',
            text: 'FASHION',
            post: '4 POSTS'

        },
        {
            image: 'success-story.webp',
            text: 'CULTURE',
            post: '2 POSTS'
        },
        {
            image: 'healthy-foods.webp',
            text: 'FOOD',
            post: '3 POSTS'
        },
        {
            image: 'visit-france.webp',
            text: 'LIFESTYLE',
            post: '1 POST'
        },
        {
            image: 'travel-alone.webp',
            text: 'STORIES',
            post: '4 POSTS'
        },
        {
            image: 'best-places.webp',
            text: 'TRAVEL',
            post: '5 POSTS'
        },
    ],
    // ARRAY PER FooterComp.vue-------------------------------------
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
    ],

});