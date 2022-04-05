<template lang="pug">
    #multiPage
        HeaderComponent
        section.section__multi-page
            div.container.multi-page__container
                h2.h2.h2--secondary Multipage app
                h2.h2.h2--primary.h2__multi-page--primary Многостраничный сайт
                ul.additional-page__steps-list
                    development-stage(v-for = "step in steps",
                        :content = "step")

            FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import Technologies from "../../components/Technologies";
import FooterComponent from "../../components/FooterComponent";
import DevelopmentStage from "../../components/DevelopmentStage";

export default {
  name: 'multiPage',
  components: {
      DevelopmentStage,
      FooterComponent,
      Technologies,
      HeaderComponent
  },
    data() {
        return {
            steps: [
                "Аналитика: сбор требований, проработка структуры сайта, проработка функциональных требований",
                "Создание дизайна, разработка дизайна типовых страниц",
                "Верстка и программирование страниц",
            ],
        }
    },
}
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

    .section__multi-page {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
        height: 100vh;
    }

    .multi-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/about-header-bg-desktop.png") no-repeat top right;
        background-size: 30%;
    }

    .h2__multi-page--primary {
        margin-bottom: 100px;
    }


    @media (max-width: 900px) {

        .multi-page__container {
            background-size: 60%;
            background-position: top center;
        }

        .multi-page__container {
            padding: 70px 20px 0;
        }

        .h2__multi-page--primary {
            margin-bottom: 50px;
        }

    }




</style>
