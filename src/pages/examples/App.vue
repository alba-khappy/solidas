<template lang="pug">
    #examples
        HeaderComponent
        section.section__examples-page
            div.container.examples-page__container
                h2.h2.h2--secondary Works examples
                h2.h2.h2--primary.h2__examples-page--primary Примеры работ
                example-of-work(v-for="exampleItem in exampleList",
                                :workImages="exampleItem.workImages",
                                :text="exampleItem.text",
                                :link="exampleItem.link",
                                :marginLeft="exampleItem.marginLeft")
                FooterComponent
</template>

<script>
    import HeaderComponent from "../../components/HeaderComponent";
    import FooterComponent from "../../components/FooterComponent";
    import ExampleOfWork from "../../components/ExampleOfWork";

    export default {
        name: 'Examples',
        data() {
            return {
                exampleList: [
                    {
                        workImages: ["example1.1.png", "example1.2.png", "example1.3.png", "example1.4.png"],
                        text: "Дизайн мобильного  приложения для аренды автомобилей",
                        marginLeft: true,
                    },
                    {
                        workImages: ["example2.1.png", "example2.2.png", "example2.3.png", "example2.4.png"],
                        text: "Приложение для выбора финансовых продуктов",
                        link: "finbucket.ru",
                        marginLeft: true,
                    },
                    {
                        workImages: ["example3.1.png", "example3.2.png", "example3.3.png"],
                        text: "Сайт онлайн турагенства",
                        link: "Synny-lucky.ru",
                        marginLeft: false,
                    },
                    {
                        workImages: ["example4.1.png", "example4.2.png"],
                        text: "Сайт студии косметологии",
                        link: "cosmetology40.ru",
                        marginLeft: false,
                    },
                    {
                        workImages: ["example5.1.png", "example5.2.png", "example5.3.png"],
                        text: "Лендинг - портфолио",
                        marginLeft: false,
                    },
                    {
                        workImages: ["example6.1.png", "example6.2.png", "example6.3.png"],
                        text: "Сайт студии студии красоты",
                        marginLeft: false,
                    },
                    {
                        workImages: ["example7.1.png", "example7.2.png", "example7.3.png"],
                        text: "Дизайн лендинга для магазина женского белья",
                        marginLeft: false,
                    },
                    {
                        workImages: ["example8.1.png", "example8.2.png", "example8.3.png"],
                        text: "Дизайн сайта юридической компании",
                        marginLeft: false,
                    }
                    ]
            }
        },
        components: {
            ExampleOfWork,
            FooterComponent,
            HeaderComponent
        },
    }
</script>

<style lang="scss">

    @import "../../assets/scss/general.scss";

    .section__examples-page {
        background: url("../../assets/triangular-bg-desktop.png") center repeat;
        background-size: contain;
    }

    .examples-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 100px 0;
        background: transparent url("../../assets/examples-header-bg-desktop.png") no-repeat top right;
        background-size: 40%;
    }

    .h2__examples-page--primary {
        margin-bottom: 100px;
    }

    @media (max-width: 900px) {

        .examples-page__container {
            background-size: 50%;
            background-position: top center;
        }

        .examples-page__container {
            padding: 70px 20px 0;
        }

        .h2__examples-page--primary {
            margin-bottom: 0;
        }
    }
</style>