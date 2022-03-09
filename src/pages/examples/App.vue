<template lang="pug">
    #examples
        HeaderComponent
        section.section__prices-page
            div.container.prices-page__container
                h2.h2.h2--secondary Works examples
                h2.h2.h2--primary.h2__prices-page--primary Примеры работ
            FooterComponent
</template>

<script>
    import HeaderComponent from "../../components/HeaderComponent";
    import FooterComponent from "../../components/FooterComponent";

    export default {
        name: 'Examples',
        data() {
            return {

            }
        },
        components: {
            FooterComponent,
            HeaderComponent
        },
    }
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

    .section__prices-page {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
    }

    .prices-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/services-header-bg-desktop.png") no-repeat top right;
        background-size: 40%;
    }

    .h2__prices-page--primary {
        margin-bottom: 100px;
    }

    @media (max-width: 900px) {

        .about-page__container {
            background-size: 60%;
            background-position: top center;
        }

        .about-page__container {
            padding: 70px 20px 0;
        }

        .h2__about-page--primary {
            margin-bottom: 50px;
        }
    }


</style>