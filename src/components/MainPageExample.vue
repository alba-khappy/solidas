<template lang="pug">
    li
        img(:src="require(`../assets/${imgDesktop}`)").example__img.example__img--desktop
        img(:src="require(`../assets/${imgMobile}`)").example__img.example__img--mobile
        p.example__description {{text}}
</template>

<script>
    export default {
        name: 'MainPageExample',
        props: {
            imgDesktop: {
                type: String,
            },
            imgMobile: {
                type: String,
            },
            text: {
                type: String,
                required: true,
            },
        }
    }
</script>

<style lang="scss">

    @import "../assets/scss/general.scss";

    .example__img {
        width: 350px;
        max-height: 316px;
        margin: 0 auto 40px;
    }

    .example__img--mobile {
        display: none;
    }

    .example__img--desktop {
        display: block;
    }

    .example__description {
        text-align: center;
    }

    @media (max-width: 500px) {

        .example__img {
            width: 250px;
        }

        .example__img--desktop {
            display: none;
        }

        .example__img--mobile {
            display: block;
        }
    }


</style>