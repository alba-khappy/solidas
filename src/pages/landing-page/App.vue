<template lang="pug">
    #landingPage
        HeaderComponent
        section.section__landing-page
            div.container.landing-page__container
                h2.h2.h2--secondary Landing
                h2.h2.h2--primary.h2__landing-page--primary Лендинг
                h3.h3__additional-page Дизайн
                ul.additional-page__steps-list
                    development-conditions(v-for = "stepOfDesign in stepsOfDesign",
                    :content = "stepOfDesign")
                h3.h3__additional-page Верстка
                ul.additional-page__steps-list
                    development-conditions(v-for = "stepOfDev in stepsOfDev",
                    :content = "stepOfDev")
                h3.h3__additional-page Примеры
                ul.additional-page__steps-list
                    development-conditions(v-for = "example in examples",
                    :content = "example")
                div.additional-page__btn-order
                    button-transparent(:address = "orderBtn.address", :text = "orderBtn.text", @click="popup = !popup").additional-page__btn-order--position
                popup-component(v-show="popup")

                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import DevelopmentConditions from "../../components/DevelopmentСonditions";
import ButtonTransparent from "../../components/ButtonStyle";
import PopupComponent from "../../components/PopupComponent";


export default {
  name: 'landingPage',
  components: {
      PopupComponent,
      ButtonTransparent,
      DevelopmentConditions,
      FooterComponent,
      HeaderComponent
  },
    data() {
        return {
            popup: false,
            stepsOfDesign: [
                            "3 варианта прототипов",
                            "3 вариантов концепций дизайна (цвета, стили)",
                            "Разработка логотипа"
            ],
            stepsOfDev: [
                "Предварительный вариант в соответствии с макетами и его тестирование",
                "Окончательный вариант + check list",
                "Деплой (Домен, хостинг, метрики)"
            ],
            examples: [
                "Посадочная страница",
                "Сайт-визитка",
            ],
            orderBtn: {
                address: "/",
                text: "Заказать",
            },
        }
    },
}
</script>

<style lang="scss">

    @import "../../assets/scss/general.scss";

        .section__landing-page {
            background: url("../../assets/triangular-bg-desktop.png") center;
            background-size: contain;
        }

        .landing-page__container {
            display: grid;
            grid-template-rows: repeat(2, auto);
            padding: 50px 140px 0;
            background: transparent url("../../assets/landing-page-header-bg-d.png") no-repeat top right;
            background-size: 30%;
        }

        .h2__landing-page--primary {
            margin-bottom: 100px;
        }

        @media (max-width: 900px) {

            .landing-page__container {
                background-image: url("../../assets/landing-page-header-bg-m.png");
                background-size: 60%;
                background-position: top center;
                padding: 70px 20px 0;
            }

            .h2__landing-page--primary {
                margin-bottom: 50px;
            }

        }

</style>
