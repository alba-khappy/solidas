<template lang="pug">
    #home
        HeaderComponent(:logoLink="logoLink")
        section.section-main
            div.container.main__container
                img(src="../../assets/logo.svg").main__logo
                h1.main__heading  Разрабатываем сайты, приложения используя современные технологии.

        section.section-services
            div.container.services__container
                h2.h2.h2--secondary Services and prices
                h2.h2.h2--primary.h2__services--primary Услуги и цены
                ul.offers__list
                    MainPageOffer(v-for = "(offer,index) in offers",
                        :index = "index",
                        :heading = "offer.heading",
                        :description = "offer.description")
                    li.offer__btn
                        ButtonTransparent(:address = "offersBtn.address", :text = "offersBtn.text")

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
                        ButtonTransparent(:address = "examplesBtn.address", :text = "examplesBtn.text")

        section.section-contacts#contacts
            div.container.contacts__container
                h2.h2.h2--secondary Contacts
                h2.h2.h2--primary.h2__contacts--primary Контакты
                div.contacts__description
                    p.contacts__text Остались вопросы?
                    p.contacts__text Заполните форму и мы свяжемся с вами в ближайшее время.
                form.contacts__form
                    input(type="text", placeholder="Ведите имя").contacts__input
                    input(type="number", placeholder="Введите номер телефона").contacts__input
                    input(type="email", placeholder="Введите email").contacts__input
                    div.contacts__checkbox
                        input(name="checkbox", type="checkbox").visually-hidden#checkbox
                        label(for="checkbox").contacts__label Согласие на обработку персональных данных
                    button(type="submit").btn.contacts__btn-sent Отправить
                p.contacts__brief-info Если у вас уже есть понимание, что за продукт вы хотели бы получить - заполните бриф первичной информации.
                a(href="/").contacts__brief-link Заполнить бриф

                FooterComponent
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent'
import FooterComponent from "../../components/FooterComponent";
import MainPageOffer from "../../components/MainPageOffer";
import MainPageExample from "../../components/MainPageExample";
import ButtonTransparent from "../../components/ButtonStyle";

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
            logoLink: false,
            offers: [
                {
                    heading: "Лендинг",
                    description: "Дизайн, адаптив, базовое SEO, хостинг…",
                },
                {
                    heading: "Многостраничный сайт",
                    description: "Сбор требований, дизайн, верстка…",
                },
                {
                    heading: "Веб сервисы и приложения",
                    description: "Аналитика, архитектура, разработка, тестирование…",
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

  .main__heading{
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

    .offer__btn {
        text-align: center;
    }

        /*examples*/

    .section-examples {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
    }

    .examples__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 0 140px;
    }

    .examples__list {
        display:grid;
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
        justify-content: space-between;
        margin-bottom: 30px;
    }

    .contacts__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #E5F3FD url("../../assets/contacts-form-bg.png") no-repeat;
        background-size: contain;
        padding: 30px 100px;
        margin: 0 auto 80px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .contacts__input {
        width: 220px;
        height: 50px;
        background-color: white;
        border: 1px solid $blackColorText;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 10px 20px;
        transition: 0.3s;

        &::placeholder {
            color: #7E7E7E;
        }

        &:hover {
            cursor: pointer;
            outline: none;
            border: 1px solid #3A5D65;
            box-shadow: 0 0 25px -10px rgba(37, 62, 70, 0.3) inset;
        }
    }

    .contacts__checkbox {
        margin-bottom: 20px;
    }

    .contacts__label {
        position: relative;
        display: inline-block;
        font-size: 14px;
        line-height: 18px;
        color: $blackColorText;
        padding-top: 10px;
        padding-left: 40px;
    }

    .contacts__checkbox label::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 27px;
        height: 27px;
        background: transparent url("../../assets/checkbox.svg") center no-repeat;
    }


    .contacts__checkbox input:checked + label::after {
        content: "";
        background-image: url("../../assets/check.svg");
        color: $blackColorText;
        position: absolute;
        left: 6px;
        top: 7px;
        width: 24px;
        height: 16px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .contacts__btn-sent {
        background-color: transparent;
        font-size: 20px;
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

        .offers__list {
            padding: 40px 30px;
        }

        .contacts__description {
            flex-direction: column;
        }

        .contacts__text:first-child {
            margin-bottom: 30px;
        }
    }

    @media (max-width: 900px) and (min-width: 501px) {

        .main__heading {
            font-size: 35px;
        }

    }

    @media (max-width: 900px) and (min-width: 320px) {

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

        .offer__heading-wrapper {
            grid-area: 1/1/3/3;
            background-size: 130px;
        }

        .offer__description {
            grid-area: 2/1/3/3;
        }

        .offer__link {
            grid-template-columns: repeat(2, auto);
            grid-template-rows: 180px auto;

            &:after {
                grid-area: 1/2/3/3;
            }
        }

        .offer__heading {
            font-size: 20px;
            padding-left: 140px;
        }

        /*examples*/

        .examples__container {
            padding: 0 20px;
        }

        /*contacts*/

        .contacts__container {
            padding: 40px 15px 20px;
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

        .offers__list {
            padding: 40px 30px;
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
            right: 5px;
        }

        .main__heading {
            font-size: 22px;
        }

        .section-main {
            background-position: -160px, top left;
        }

        .offers__list {
            padding: 20px 5px;
        }

        .offer__heading-wrapper  {
            background-size: 80px;
        }

        .offer__heading {
            padding-left: 100px;
        }

        .example__img {
            width: 250px;
        }

        .contacts__form {
            padding: 20px 20px;
        }

        .offer__btn-link, .example__btn-link, .contacts__brief-link, .contacts__btn-sent {
            font-size: 16px;
        }
    }




</style>
