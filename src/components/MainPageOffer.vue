<template lang="pug">
    li.offer__item
        a(href="/prices.html").offer__link
            div.offer__heading-wrapper(:class="'offer__wrapper--img-'+index")
                h3.offer__heading {{heading}}
            p.offer__description {{description}}

</template>

<script>
    export default {
        name: 'MainPageOffer',
        props: {
            index: {
                type: String,
                required: true,
            },
            heading: {
                type: String,
                required: true,
            },
            description: {
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
        padding: 40px 110px;
        margin-bottom: 50px;
    }

    .offer__item {

        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    .offer__link {
        display: grid;
        grid-template-columns: 480px auto auto;
        column-gap: 20px;
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
        width: 200px;
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
        font-size: 30px;
    }

    .offer__description {
        position: relative;
        max-width: 450px;
        align-self: center;
        margin-right: 40px;
        font-weight: normal;
        font-size: 20px;
    }
</style>