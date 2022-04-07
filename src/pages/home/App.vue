<template lang="pug">
    #home
        HeaderComponent
        section.section-main
            div.container.main__container
                img(src="../../assets/logo.svg").main__logo
                h1.main__heading  Разрабатываем сайты, приложения, используя современные технологии.

        section.section-services
            div.container.services__container
                h2.h2.h2--secondary Services and prices
                h2.h2.h2--primary.h2__services--primary Услуги и цены
                ul.offers__list
                    MainPageOffer(v-for = "(offer,index) in offers",
                        :index = "index",
                        :heading = "offer.heading",
                        :price = "offer.price",
                        :offerUrl = "offer.offerUrl"
                    )
                    li.offer__btn
                        ButtonTransparent(:address = "offersBtn.address", :text = "offersBtn.text").section-services__btn-order--position

        section.section-examples
            div.container.examples__container
                h2.h2.h2--secondary Works examples
                h2.h2.h2--primary.h2__services--primary Примеры работ
                ul.examples__list
                    MainPageExample(v-for = "example in examples",
                        :text = "example.text",
                        :img = "example.img")
                        p.example__description Сайт онлайн турагненства
                    li.example__btn
                        ButtonTransparent(:address = "examplesBtn.address", :text = "examplesBtn.text").section-examples__btn-order--position

        section.section-contacts
            div.container.contacts__container
                h2.h2.h2--secondary Contacts
                h2.h2.h2--primary.h2__contacts--primary Контакты
                div.contacts__description
                    p.contacts__text Остались вопросы?
                    p.contacts__text Заполните форму и мы свяжемся с вами в ближайшее время.
                FormComponent
                p.contacts__brief-info(v-show="false") Если у вас уже есть понимание, что за продукт вы хотели бы получить - заполните бриф первичной информации.
                span.contacts__brief-link(v-show="false") Заполнить бриф

                FooterComponent
</template>

<script>
    import HeaderComponent from '../../components/HeaderComponent'
    import FooterComponent from "../../components/FooterComponent";
    import MainPageOffer from "../../components/MainPageOffer";
    import MainPageExample from "../../components/MainPageExample";
    import ButtonTransparent from "../../components/ButtonStyle";
    import FormComponent from "../../components/FormComponent";

    export default {
        name: 'Home',
        data() {
            return {
                offersBtn: {
                    address: "/prices.html",
                    text: "Сравнить",
                },
                examplesBtn: {
                    address: "/examples.html",
                    text: "Смотреть все работы",
                },
                offers: [
                    {
                        heading: "Лендинг",
                        price: "От 60 000 руб.",
                        offerUrl: "/landing-page.html",
                    },
                    {
                        heading: "Многостраничный сайт",
                        price: "От 100 000 руб.",
                        offerUrl: "/multi-page.html",
                    },
                    {
                        heading: "Веб сервисы и приложения",
                        price: "От 350 000 руб.",
                        offerUrl: "/web-app.html",
                    },

                ],
                examples: [
                    {
                        img: "example1.png",
                        text: "Сайт",
                    },
                    {
                        img: "example2.png",
                        text: "Дизайн мобильного приложения",
                    },
                    {
                        img: "example3.1.png",
                        text: "Сайт онлайн турагненства",
                    },
                    {
                        img: "example4.1.png",
                        text: "Сайт студии косметологии",
                    }
                ]
            }
        },
        components: {
            FormComponent,
            ButtonTransparent,
            MainPageExample,
            MainPageOffer,
            FooterComponent,
            HeaderComponent
        }
    }
</script>

<style lang="scss">

    @import "../../assets/scss/general.scss";

    /*main*/

    .section-main {
        background: url("../../assets/white-bg-main.svg") -80px, white url("../../assets/main-header-img.png") top left no-repeat;
    }

    .main__container {
        padding: 0 140px 70px;
    }

    .main__logo {
        display: block;
        margin: 0 auto;
    }

    .main__heading {
        font-size: 50px;
        font-weight: normal;
        text-align: right;
    }

    /*services*/

    .services__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 0 140px;
    }

    .h2__services--primary {
        margin-bottom: 40px;
    }

    .section-services__btn-order--position {
        transform: translate(-50%, -50%);
    }

    .offer__btn {
        text-align: center;
    }

    /*examples*/

    .section-examples {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: contain;
    }

    .examples__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 0 140px;
    }

    .examples__list {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        grid-gap: 50px;
    }

    .example__btn {
        grid-area: 3/1/4/-1;
        min-width: 260px;
        margin-top: 40px;
        margin-bottom: 55px;
        text-align: center;
    }

    .example__btn-link {
        color: $blackColorText;
        font-size: 20px;
    }

    .section-examples__btn-order--position {
        transform: translate(-50%, -50%);
    }

    /*contacts*/

    .section-contacts {
        background: url("../../assets/contact-bg-desctop.png");
        background-size: cover;
    }

    .contacts__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 70px 140px 50px;
    }

    .h2__contacts--primary {
        color: #EBFFFE;
        margin-bottom: 60px;
    }

    .contacts__text {
        color: #FFFFFF;
        font-size: 30px;
    }

    .contacts__description {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }

    .contacts__brief-info {
        text-align: center;
        margin-bottom: 20px;
        font-weight: normal;
        font-size: 30px;
    }

    .contacts__brief-link {
        min-width: 280px;
        font-size: 20px;
        text-align: center;
        background-color: #0B1F22;
        color: #FBFBFB;
        padding: 15px 25px;
        border-radius: 5px;
        margin: 0 auto 50px;
    }

    @media (max-width: 1200px) and (min-width: 901px) {

        .examples__list {
            grid-template-columns: auto;
        }

        .example__btn {
            grid-area: 5/1/6/-1;
        }

        .services__container {
            padding: 0 50px;
        }

        .contacts__description {
            flex-direction: column;
        }

        .contacts__text:first-child {
            margin-bottom: 30px;
        }
    }

    @media (max-width: 1024px) {

        .section-services__btn-order--position {
            transform: translate(-50%, 30%);
        }
    }

    @media (max-width: 900px) and (min-width: 501px) {

        .main__heading {
            font-size: 35px;
        }

    }

    @media (max-width: 900px) {

        /*main*/

        .main__container {
            padding: 50px 15px 40px;
        }

        .main__logo {
            width: 75%;
        }

        /*services*/

        .services__container {
            padding: 0 15px;
        }


        /*examples*/

        .examples__container {
            padding: 0 20px;
        }

        .examples__list {
            grid-template-columns: auto;
        }

        .example__btn {
            grid-area: 5/1/6/-1;
        }

        .services__container {
            padding: 0 15px;
        }

        /*contacts*/

        .contacts__container {
            padding: 40px 5px 20px;
        }

        .contacts__description {
            flex-direction: column;
        }

        .contacts__text:first-child {
            margin-bottom: 30px;
        }

        .contacts__text {
            font-size: 20px;
        }

        .contacts__brief-info {
            font-size: 20px;
        }
    }

    @media (max-width: 500px) {

        .burger-menu {
            right: 20px;
            top: 55px
        }

        .main__heading {
            font-size: 22px;
        }

        .section-main {
            background-position: -180px, top left;
        }

        .example__img {
            width: 250px;
        }

        .example__btn-link, .contacts__brief-link, .contacts__btn-sent {
            font-size: 16px;
        }

        .contacts__form {
            min-width: 310px;
            padding: 20px 20px;
        }
    }

</style>
