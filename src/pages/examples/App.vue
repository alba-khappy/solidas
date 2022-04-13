<template lang="pug">
    #examples
        HeaderComponent
        section.section__examples-page
            div.container.examples-page__container
                h2.h2.h2--secondary Works examples
                h2.h2.h2--primary.h2__examples-page--primary Примеры работ
                ExampleOfWork(v-for="exampleItem in exampleList",
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
                        workImagesDesktop: ["example2.1.d.png", "example2.2.d.png", "example2.3.d.png", "example2.4.d.png"],
                        workImagesMobile: ["example2.1.m.png", "example2.2.m.png", "example2.3.m.png", "example2.4.m.png"],
                        text: "Web приложение для подбора кредитов",
                        link: "finbucket.ru",
                        marginLeft: true,
                    },
                    {
                        workImagesDesktop: ["example1.1.d.png", "example1.2.d.png", "example1.3.d.png", "example1.4.d.png"],
                        workImagesMobile: ["example1.1.m.png", "example1.2.m.png", "example1.3.m.png", "example1.4.m.png"],
                        text: "Мобильное приложени для аренды авто",
                        marginLeft: true,
                    },
                    {
                        workImagesDesktop: ["example3.1.d.png", "example3.2.d.png", "example3.3.d.png"],
                        workImagesMobile: ["example3.1.m.png", "example3.2.m.png", "example3.3.m.png"],
                        text: "Сайт онлайн турагенства",
                        link: "Synny-lucky.ru",
                        marginLeft: false,
                    },
                    {
                        workImagesDesktop: ["example4.1.d.png", "example4.2.d.png", "example4.3.d.png"],
                        workImagesMobile: ["example4.1.m.png", "example4.2.m.png", "example4.3.m.png"],
                        text: "Сайт-визитка студии косметологии",
                        link: "cosmetology40.ru",
                        marginLeft: false,
                    },
                    {
                        workImagesDesktop: ["example5.1.d.png", "example5.2.d.png", "example5.3.d.png"],
                        workImagesMobile: ["example5.1.m.png", "example5.2.m.png", "example5.3.m.png"],
                        text: "Лендинг - портфолио",
                        marginLeft: false,
                    },
                    {
                        workImagesDesktop: ["example6.1.d.png", "example6.2.d.png", "example6.3.d.png"],
                        workImagesMobile: ["example6.1.m.png", "example6.2.m.png", "example6.3.m.png"],
                        text: "Сайт студии студии красоты",
                        marginLeft: false,
                    },
                    {
                        workImagesDesktop: ["example7.1.d.png", "example7.2.d.png", "example7.3.d.png"],
                        workImagesMobile: ["example7.1.m.png", "example7.2.m.png", "example7.3.m.png"],
                        text: "Сайт-визитка магазина женского белья",
                        marginLeft: false,
                    },
                    {
                        workImagesDesktop: ["example8.1.d.png", "example8.2.d.png", "example8.3.d.png"],
                        workImagesMobile: ["example8.1.m.png", "example8.2.m.png", "example8.3.m.png"],
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