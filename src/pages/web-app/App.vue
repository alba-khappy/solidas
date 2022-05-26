<template lang="pug">
    #webApp
        HeaderComponent
        section.section__web-app-page
            div.container.web-app-page__container
                h2.h2.h2--secondary Web application
                h2.h2.h2--primary.h2__web-app-page--primary Веб приложение
                ul.additional-page__steps-list
                    development-conditions(v-for = "step in steps",
                        :content = "step")
                h3.h3__additional-page Примеры
                ul.additional-page__steps-list
                    development-conditions(v-for = "example in examples",
                    :content = "example")
                div.additional-page__btn-order
                    button-transparent(:text = "'Заказать'", @button-click="noScroll").additional-page__btn-order--position
                PopupComponent(v-show="popup", @close-popup="noScroll")
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
  name: 'webApp',
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
                "Предпроектное обследование, сбор общих требований, формализация функциональных требований",
                "Подбор и разработка дизайна",
                "Проектирование архитектуры приложения и сервисов для интеграции; выбор средств программных и технических средств для реализации; оценка реализации",
                "Поэтапная разработка приложения",
                "Тестирование",
                "Установка в продуктивную среду",
                "Прием заказчиком и передача на поддержку",
            ],
            examples: [
                "Личный кабинет",
                "Блог",
                "Соцсети",
                "Интернет магазин",
                "Автоматизация",
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
        .section__web-app-page {
            background: url("../../assets/triangular-bg-mobile.png") center;
        }
    }

    @media (min-width: 501px) {
        .section__web-app-page {
            background: url("../../assets/triangular-bg-desktop.png") center;
        }
    }

    .section__web-app-page {
        background-size: cover;
        height: 100vh;
    }

    .web-app-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/web-app-page-header-bg-d.png") no-repeat top right;
        background-size: 30%;
    }

    .h2__web-app-page--primary {
        margin-bottom: 100px;
    }

    @media (max-width: 900px) {

        .web-app-page__container {
            background-size: 40%;
            background-position: top center;
        }

        .web-app-page__container {
            padding: 70px 20px 0;
        }

        .h2__web-app-page--primary {
            margin-bottom: 50px;
        }
    }

    @media (max-width: 500px) {

        .web-app-page__container {
            background-image: url("../../assets/web-app-page-header-bg-m.png");
            background-size: 60%;
            background-position: top center;
        }
    }

</style>
