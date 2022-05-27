<template lang="pug">
    #multiPage
        HeaderComponent
        section.section__multi-page
            div.container.multi-page__container
                h2.h2.h2--secondary Multipage app
                h2.h2.h2--primary.h2__multi-page--primary Многостраничный сайт
                ul.additional-page__steps-list
                    development-conditions(v-for = "step in steps",
                        :content = "step")
                h3.h3__additional-page Примеры
                ul.additional-page__steps-list
                    development-conditions(v-for = "example in examples",
                    :content = "example")
                div.additional-page__btn-order
                    button-transparent(:text = "'Заказать'", @button-click="noScroll").additional-page__btn-order--position
                PopupComponent(v-show="popup", :page="'multipage'", @close-popup="noScroll")
                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import Technologies from "../../components/Technologies";
import FooterComponent from "../../components/FooterComponent";
import DevelopmentConditions from "../../components/DevelopmentСonditions";
import ButtonTransparent from "../../components/ButtonStyle";
import PopupComponent from '../../components/PopupComponent';


export default {
  name: 'multiPage',
  components: {
      PopupComponent,
      ButtonTransparent,
      DevelopmentConditions,
      FooterComponent,
      Technologies,
      HeaderComponent
  },
    data() {
        return {
            popup: false,
            steps: [
                "Аналитика: сбор требований, проработка структуры сайта, проработка функциональных требований",
                "Создание дизайна, разработка дизайна типовых страниц",
                "Верстка и программирование страниц",
            ],
            examples: [
                "Информационный портал",
                "Сайт компании",
            ]
        }
    },
    methods: {
        noScroll(){
            this.popup = !this.popup;
            document.body.classList.toggle('no-scroll');
        }
    }
}
</script>

<style lang="scss">

    @import "../../assets/scss/general.scss";

    @media (max-width: 500px) {
        .section__multi-page {
            background: url("../../assets/triangular-bg-mobile.png") center;
        }
    }

    @media (min-width: 501px) {
        .section__multi-page {
            background: url("../../assets/triangular-bg-desktop.png") center;
        }
    }

    .section__multi-page {
        background-size: cover;
        height: 100vh;
    }

    .multi-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/multi-page-header-bg-d.png") no-repeat top right;
        background-size: 30%;
    }

    .h2__multi-page--primary {
        margin-bottom: 100px;
    }

    @media (max-width: 900px) {

        .multi-page__container {
            background-size: 40%;
            background-position: top center;
            padding: 70px 20px 0;
        }

        .h2__multi-page--primary {
            margin-bottom: 50px;
        }

    }

    @media (max-width: 500px) {

        .multi-page__container {
            background-image: url("../../assets/multi-page-header-bg-m.png");
            background-size: 60%;
            padding: 100px 20px 0;
        }
    }

</style>
