<template lang="pug">
    div.examples__wrapper(:class="{'examples__wrapper--mobile-images': marginLeft}")
        ul.examples__list
            li.examples__item(v-for="workImage in workImages")
                img(:src="require(`../assets/${workImage}`)").examples__img
        div.examples__work-description-wrapper
            p.examples__work-description {{text}}
            a(:href="'https://' + link", v-if="link").examples__work-link {{link}}

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
            },
            marginLeft: {
                type: Boolean,
            }
        }
    }

</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .examples__wrapper {
        overflow: hidden;
        overflow-x: auto;
        margin-bottom: 80px;
    }

    .examples__wrapper--mobile-images {
        margin-left: 20px;
    }

    .examples__list {
        display: flex;
        margin: 0 auto;
        padding-bottom: 30px;
        justify-content: center;
    }

    .examples__item {
        text-align: center;

        &:not(:last-child) {
            margin-right: 30px;
        }
    }

    .examples__work-description-wrapper {
        position: absolute;
    }

    .examples__work-description {
        text-align: left;
        margin-bottom: 20px;
    }

    .examples__work-link {
        display: block;
        width: fit-content;
        text-align: left;
        color: $blackColorText;
        border-bottom: 1px solid $blackColorText;
    }

    .examples__img {
        height: 300px;
    }

    @media (max-width: 1480px) {
        .examples__list {
            justify-content: left;
        }
    }

    @media (max-width: 1480px) {
        .examples__wrapper {
            margin-bottom: 80px;
        }

        .examples-page__container {
            row-gap: 30px;
        }
    }

</style>