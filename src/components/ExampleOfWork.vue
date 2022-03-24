<template lang="pug">
    div.examples__wrapper
        ul.examples__list
            li.examples__item(v-for="workImage in workImages")
                img(:src="require(`../assets/${workImage}`)").examples__img

        p.examples__work-description {{text}}
        a(href="", v-if="link").examples__work-link {{link}}

</template>

<script>
    export default {
        name: 'ExampleOfWork',
        props: {

            workImages: {
                type: Array,
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
        overflow: hidden;
        overflow-x: auto;
        margin-bottom: 50px;
    }

    .examples__list {
        display: flex;
        overflow: hidden;
        overflow-x: auto;
        margin: 0 auto;
        padding-bottom: 30px;
        justify-content: center;
    }

    .examples__item {
        text-align: center;
    }

    .examples__work-description {
        text-align: center;
        margin-bottom: 20px;
    }

    .examples__work-link {
        display: block;
        width: fit-content;
        text-align: center;
        color: $blackColorText;
        border-bottom: 1px solid $blackColorText;
        margin: 0 auto;
    }

    .examples__img {
        height: 300px;
    }

</style>