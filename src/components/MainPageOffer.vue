<template lang="pug">
    li.offer__item
        a(:href="offerUrl").offer__link
            div.offer__heading-wrapper(:class="'offer__wrapper--img-'+index")
                h3.offer__heading {{heading}}
            p.offer__price {{price}}
</template>

<script>
    export default {
        name: 'MainPageOffer',
        props: {
            index: {
                type: Number,
                required: true,
            },
            heading: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            offerUrl: {
                type: String,
                required: true,
            },
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .offers__list {
        max-width: 1160px;
        background: #F0F7F9;
        padding: 40px 110px 65px;
        margin: 0 auto 50px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 25%);
    }

    .offer__item {

        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    .offer__link {
        display: grid;
        grid-template-columns: 600px auto;
        column-gap: 10px;
        color: $blackColorText;
        transition: 0.3s;

        &:hover .offer__heading, &:hover .offer__price, .offer__link:after{
            transform: scale(1.05);
        }
    }

    .offer__link:hover:after {
        width: 30px;
        height: 30px;
    }

    .offer__heading-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }

    @media (max-width: 500px) {
        .offer__wrapper--img-0 {
            background: url("../assets/services-img-mobile-1.png") no-repeat 0;
        }

        .offer__wrapper--img-1 {
            background: url("../assets/services-img-mobile-2.png") no-repeat 0;
        }

        .offer__wrapper--img-2 {
            background: url("../assets/services-img-mobile-3.png") no-repeat 0;
        }
    }

    @media (min-width: 501px) {
        .offer__wrapper--img-0 {
            background: url("../assets/services-img-desktop-1.png") no-repeat 0;
        }

        .offer__wrapper--img-1 {
            background: url("../assets/services-img-desktop-2.png") no-repeat 0;
        }

        .offer__wrapper--img-2 {
            background: url("../assets/services-img-desktop-3.png") no-repeat 0;
        }
    }



    .offer__heading {
        padding-left: 200px;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        transition: 0.3s;
    }

    .offer__price {
        position: relative;
        align-self: center;
        text-align: center;
        font-weight: normal;
        font-size: 20px;
        transition: 0.3s;

        &:after {
            content: '';
            position: absolute;
            right: 0;
            align-self: center;
            justify-self: flex-end;
            width: 10px;
            height: 20px;
            background: url("../assets/services-more-info.svg") no-repeat;
            background-size: contain;
            transition: 0.3s;
            transform: translateX(20px);
        }
    }

    @media (max-width: 1340px) and (min-width: 901px) {
        .offer__link {
            display: grid;
            grid-template-columns: 450px auto auto;
        }

        .offer__heading {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }
    }

    @media (max-width: 1024px) {

        .offer__heading-wrapper {
            grid-area: 1/1/3/3;
            background-size: 130px;
            justify-content: center;
            padding-left: 100px;
        }

        .offer__price {
            grid-area: 2/1/3/3;
            margin-right: 0;
            padding-left: 100px;

            &:after {
                right: auto;
                transform: translateX(10px);
            }
        }

        .offer__btn {
            position: relative;
        }

        .offer__btn--position {
            top: 35px;
        }

        .offers__list {
            width: 650px;
            margin: 0 auto;
            padding: 0 0 90px 30px;
        }

        .offer__link {
            grid-template-columns: repeat(2, auto);
            grid-template-rows: 90px auto;

            &:after {
                grid-area: 1/2/3/3;
                align-self: center;
            }
        }

        .offer__heading {
            font-size: 20px;
            font-weight: 600;
            padding-left: 0;
        }
    }

    @media (max-width: 900px) {

        .offers__list {
            width: 450px;
        }

    }


    @media (max-width: 500px) {

        .offer__link {
            grid-template-rows: repeat(2, auto);
            column-gap: 10px;
        }

        .offers__list {
            width: 310px;
            position: relative;
            padding: 20px 10px 110px 5px;
        }

        .offer__heading-wrapper  {
            height: 100px;
            background-size: 80px;
            padding-left: 70px;
        }

        .offer__price {
            padding-left: 70px;
        }

        .offer__heading {
            max-width: 190px;
            text-align: center;
            font-size: 18px;
        }

        .offer__btn--position {
            top: 55px;
        }

        .offer__btn-link {
            font-size: 16px;
        }
    }

</style>