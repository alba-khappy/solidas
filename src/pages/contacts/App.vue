<template lang="pug">
    #contacts
        HeaderComponent
        section.section__contacts-page
            div.container.contacts-page__container
                h2.h2.h2--secondary Contacts
                h2.h2.h2--primary.h2__contacts-page--primary Контакты
                div.contacts__description
                    p.contacts__text Остались вопросы?
                    p.contacts__text Заполните форму и мы свяжемся с вами в ближайшее время.
                FormComponent(:page="'contacts'")
                p.contacts__brief-info(v-show="false") Если у вас уже есть понимание, что за продукт вы хотели бы получить, заполните бриф первичной информации.
                span.contacts__brief-link(v-show="false") Заполнить бриф

                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import FormComponent from "../../components/FormComponent";

export default {
  name: 'Contacts',
  components: {
      FormComponent,
      FooterComponent,
      HeaderComponent
  },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">

    @import "../../assets/scss/general.scss";

    @media (max-width: 500px) {
        .section__contacts-page {
            background: url("../../assets/triangular-bg-mobile.png") center;
        }
    }

    @media (min-width: 501px) {
        .section__contacts-page {
            background: url("../../assets/triangular-bg-desktop.png") center;
        }
    }

    .section__contacts-page {
        background-size: contain;
        min-height: 100vh;
    }

    .contacts__text {
        text-align: center;
        margin-bottom: 20px;
    }

    .contacts-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        max-width: 1500px;
    }

    .h2__contacts-page--primary {
        margin-bottom: 100px;
    }

    .contacts-page__content {
        font-size: 20px;
        margin-bottom: 70px;
    }

    .contacts-page__technologies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 300px;
    }

    @media (min-width: 901px) {

        .contacts-page__container {
            background: transparent url("../../assets/contacts-header-bg-d.png") no-repeat top right;
            padding: 50px 140px 0;
            background-size: 30%;
        }
    }

    @media (max-width: 900px) {

        .contacts-page__container {
            background-image: url("../../assets/contacts-header-bg-m.png");
            background-size: 60%;
            background-position: top center;
            padding: 70px 20px 0;
        }

        .h2__contacts-page--primary {
            margin-bottom: 50px;
        }

        .contacts-page__technologies-list {
            margin-bottom: 150px;
        }
    }
</style>
