<template lang="pug">
    #examples
        HeaderComponent(:logoLink="logoLink")
        section.section__examples-page
            div.container.examples-page__container
                h2.h2.h2--secondary Works examples
                h2.h2.h2--primary.h2__examples-page--primary Примеры работ
                ExampleOfWork(v-for="exampleItem in exampleList",
                                :img1="exampleItem.img1",
                                :img2="exampleItem.img2",
                                :img3="exampleItem.img3",
                                :img4="exampleItem.img4",
                                :text="exampleItem.text",
                                :link="exampleItem.link",)
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
                logoLink: true,
                exampleList: [
                    {
                        img1: "example1.1.png",
                        img2: "example1.2.png",
                        img3: "example1.3.png",
                        img4: "example1.4.png",
                        text: "Дизайн мобильного  приложения для аренды автомобилей",
                    },
                    {
                        img1: "example2.1.png",
                        img2: "example2.2.png",
                        img3: "example2.3.png",
                        img4: "example2.4.png",
                        text: "Приложение для выбора финансовых продуктов",
                    },
                    {
                        img1: "example3.1.png",
                        img2: "example3.2.png",
                        text: "Сайт студии косметологии",
                        link: "cosmetology40.ru",
                    },
                    {
                        img1: "example4.1.png",
                        img2: "example4.2.png",
                        text: "Сайт онлайн турагенства",
                        link: "Synny-lucky.ru",
                    },
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
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
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
            background-size: 60%;
            background-position: top center;
        }

        .examples-page__container {
            padding: 70px 20px 0;
        }

        .h2__examples-page--primary {
            margin-bottom: 50px;
        }
    }


</style>