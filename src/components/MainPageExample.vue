<template lang="pug">
    li
        img(:src="require(`../assets/${currentImage}`)").example__img
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
        },
        data() {
            return {
                currentImage: ''
            }
        },
        methods: {
            onResize() {
                this.currentImage = window.innerWidth > 500 ? this.imgDesktop : this.imgMobile;
            }
        },
        created() {
            this.onResize();
            window.addEventListener('resize', this.onResize)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize)
        },
    }
</script>

<style lang="scss">

    @import "../assets/scss/general.scss";

    .example__img {
        width: 350px;
        max-height: 316px;
        margin: 0 auto 40px;
    }

    .example__description {
        text-align: center;
    }

    @media (max-width: 500px) {

        .example__img {
            width: 250px;
        }
    }


</style>