<template lang="pug">
    #landingPage
        HeaderComponent(:logoLink="logoLink")
        section.section__about-page
            div.container.about-page__container
                h2.h2.h2--secondary About us
                h2.h2.h2--primary.h2__about-page--primary О нас
                p jfjfjf
                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import Technologies from "../../components/Technologies";
import FooterComponent from "../../components/FooterComponent";

export default {
  name: 'landingPage',
  components: {
      FooterComponent,
      Technologies,
      HeaderComponent
  },
    data() {
        return {
            logoLink: true,

        }
    },
}
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

    .section__about-page {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
        height: 100vh;
    }

    .about-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/about-header-bg-desktop.png") no-repeat top right;
        background-size: 30%;
    }

    .h2__about-page--primary {
        margin-bottom: 100px;
    }

    .about-page__content {
        font-size: 20px;
        margin-bottom: 70px;
    }

    .about-page__technologies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 300px;
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

        .about-page__technologies-list {
            margin-bottom: 150px;
        }

    }




</style>
