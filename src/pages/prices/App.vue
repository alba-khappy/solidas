<template lang="pug">
    #prices
        HeaderComponent(:logoLink="logoLink")
        section.section__prices-page
            div.container.prices-page__container
                h2.h2.h2--secondary Services and prices
                h2.h2.h2--primary.h2__prices-page--primary Услуги и цены
                ul.table-headings
                    li
                    li Цена
                    li Возможные этапы
                    li Примеры
                VariantOfWork(v-for = "variant in variants",
                    :type = "variant.type",
                    :cost = "variant.cost",
                    :steps = "variant.steps",
                    :examples = "variant.examples")
                FooterComponent
</template>

<script>
    import HeaderComponent from "../../components/HeaderComponent";
    import FooterComponent from "../../components/FooterComponent";
    import VariantOfWork from "../../components/VariantOfWork";

    export default {
        name: 'Prices',
        data() {
            return {
                logoLink: true,
                variants: [
                    {
                        type: "Лендинг",
                        cost: "От 60 000 р.",
                        steps: "Подбор прототипа, Подбор концепций дизайна, адаптивная верстка, базовое SEO, хостинг",
                        examples: "Сайт-визитка, посадочная страница",
                    },
                    {
                        type: "Многостраничный сайт",
                        cost: "От 100 000 р.",
                        steps: "Сбор функциональных требований, проработка структуры сайта, подбор дизайна, разработка дизайна типовых страниц, разработка страниц",
                        examples: "Информационный портал, сайт компании",
                    },
                    {
                        type: "Веб приложения и сервисы",
                        cost: "От 350 000 р.",
                        steps: "Проектирование архитектуры, выбор средств и оценка сроков реализации, поэтапная разработка и тестирование, выпуск в прод.",
                        examples: "Личный кабинет, интерактивный портал, блог",
                    },
                ],
            }
        },
        components: {
            VariantOfWork,
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

    .table-headings {
        display: grid;
        grid-template-columns: 200px repeat(3, auto);
        grid-column-gap: 20px;
        margin-bottom: 20px;
    }

    @media (max-width: 1100px) {
        .prices-page__container {
            padding: 70px 20px 0;
        }
    }


    @media (max-width: 900px) {

        .prices-page__container {
            background-size: 60%;
            background-position: top center;
        }

        .h2__prices-page--primary {
            margin-bottom: 50px;
        }

        .table-headings {
            display: none;
        }

    }


</style>