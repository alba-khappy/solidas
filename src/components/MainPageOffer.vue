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
        background: #F0F7F9;
        padding: 40px 110px 65px;
        margin-bottom: 50px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 25%);
    }

    .offer__item {

        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    .offer__link {
        display: grid;
        grid-template-columns: 600px auto auto;
        column-gap: 10px;
        color: $blackColorText;

        &:after {
            content: '';
            align-self: center;
            justify-self: flex-end;
            width: 10px;
            height: 20px;
            background: url("../assets/services-more-info.svg") no-repeat;
            background-size: contain;
        }
    }

    .offer__heading-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 200px;
    }

    .offer__wrapper--img-0 {
        background: url("../assets/services-img-desctop-1.png") no-repeat 0;
    }

    .offer__wrapper--img-1 {
        background: url("../assets/services-img-desctop-2.png") no-repeat 0;
    }

    .offer__wrapper--img-2 {
        background: url("../assets/services-img-desctop-3.png") no-repeat 0;
    }

    .offer__heading {
        padding-left: 200px;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
    }

    .offer__price {
        position: relative;
        align-self: center;
        text-align: center;
        margin-right: 40px;
        font-weight: normal;
        font-size: 20px;
    }

    @media (max-width: 1340px) and (min-width: 901px) {
        .offer__link {
            display: grid;
            grid-template-columns: 450px auto auto;
        }

        .offer__heading {
            font-size: 20px;
            font-weight: 600;
        }
    }

    @media (max-width: 1024px) {

        .offer__heading-wrapper {
            grid-area: 1/1/3/3;
            background-size: 130px;
        }

        .offer__price {
            grid-area: 2/1/3/3;
            margin-right: 0;
        }

        .offer__btn {
            position: relative;
        }

        .offer__btn--position {
            top: 35px;
        }

        .offer__link {
            grid-template-columns: repeat(2, auto);
            grid-template-rows: 180px auto;

            &:after {
                grid-area: 1/2/3/3;
                align-self: center;
            }
        }

        .offer__heading {
            font-size: 20px;
            font-weight: 600;
            padding-left: 140px;
        }

    }

    @media (max-width: 900px) and (min-width: 501px) {

        .offers__list {
            padding: 0 30px 90px;
        }
    }

    @media (max-width: 500px) {

        .offer__item:not(:last-child) {
            margin-bottom: 0;
        }

        .offer__link {
            grid-template-rows: repeat(2, auto);
            column-gap: 10px;
        }

        .offers__list {
            position: relative;
            padding: 20px 10px 112px 5px;
        }

        .offer__heading-wrapper  {
            height: 150px;
            background-size: 60px;
        }

        .offer__heading {
            padding-left:70px;
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