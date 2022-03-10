<template lang="pug">
    div.examples__wrapper
        ul.examples__list
            li.examples__item
                img(:src="require(`../assets/${img1}`)").examples__img

        p.examples__work-description {{text}}
        a(href="", v-if="link") {{link}}

</template>

<script>
    export default {
        name: 'ExampleOfWork',
        props: {

            img1: {
                type: String,
                required: true,
            },
            img2: {
                type: String,
                required: true,
            },
            img3: {
                type: String,
            },
            img4: {
                type: String,
            },
            text: {
                type: String,
            },
            link: {
                type: String,
            }
        }
    }

</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .examples__wrapper {
        margin-bottom: 50px;
    }

    .examples__list {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 40px;
    }

    .examples__work-description {
        text-align: center;
    }

    .examples__img {
        height: 300px;
    }

</style>