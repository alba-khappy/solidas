<template lang="pug">
    #prices
        HeaderComponent
        section.section__prices-page
            div.container.prices-page__container
                h2.h2.h2--secondary Services and prices
                h2.h2.h2--primary.h2__prices-page--primary Услуги и цены
                ul.table-headings
                    li.table-headings__item
                    li.table-headings__item Цена
                    li.table-headings__item Возможные этапы
                    li.table-headings__item Примеры
                VariantOfWork(v-for = "variant in variants",
                    :link = "variant.link",
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
                variants: [
                    {
                        link: "/landing-page.html",
                        type: "Лендинг",
                        cost: "От 60 000 р.",
                        steps: "Подбор прототипа, Подбор концепций дизайна, адаптивная верстка, базовое SEO, хостинг",
                        examples: "Сайт-визитка, посадочная страница",
                    },
                    {
                        link: "/multi-page.html",
                        type: "Многостраничный сайт",
                        cost: "От 100 000 р.",
                        steps: "Сбор функциональных требований, проработка структуры сайта, подбор дизайна, разработка дизайна типовых страниц, разработка страниц",
                        examples: "Информационный портал, сайт компании",
                    },
                    {
                        link: "/web-app.html",
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
        background-size: contain;
        min-height: 100vh;
    }

    .prices-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/services-header-bg-desktop.png") no-repeat right -5px;
        background-size: 40%;
    }

    .h2__prices-page--primary {
        margin-bottom: 100px;
    }

    .table-headings {
        display: grid;
        grid-template-columns: 300px repeat(3, auto);
        grid-column-gap: 20px;
        margin-bottom: 20px;
    }

    .table-headings__item {
        border-bottom: 1px solid $blackColorText;
        width: fit-content;
    }

    @media (max-width: 1100px) {
        .prices-page__container {
            padding: 70px 20px 0;
        }
    }

    @media (max-width: 900px) {

        .prices-page__container {
            background-size: 60%;
            background-position: center -5px;
        }

        .h2__prices-page--primary {
            margin-bottom: 50px;
        }

        .table-headings {
            display: none;
        }
    }

</style>