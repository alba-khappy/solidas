<template lang="pug">
    a(:href="link").option-parameters__link
        ul.option-parameters__wrapper
            li.option-parameters__item.option-parameters__item--type {{type}}
            li.option-parameters__item.option-parameters__item--cost {{cost}}
            li.option-parameters__item.option-parameters__item--steps {{steps}}
            li.option-parameters__item.option-parameters__item--examples {{examples}}
</template>

<script>
    export default {
        name: 'VariantOfWork',
        props: {
            link: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            steps: {
                type: String,
                required: true,
            },
            cost: {
                type: String,
                required: true,
            },
            examples: {
                type: String,
                required: true,
            }
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .option-parameters__wrapper {
        display: grid;
        align-items: center;
        grid-column-gap: 20px;
        grid-template-columns: auto 200px 120px repeat(2, auto);
        background: #F0F7F9;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
        padding: 40px;
        margin-bottom: 45px;
        transition: 0.3s;

        &:before {
            content: '';
            background: transparent url("../assets/triangle.png") no-repeat center;
            width: 40px;
            height: 60px;
        }

        &:hover .option-parameters__item, &:hover {
            transform: scale(1.03);
        }
    }

    .option-parameters__item {
        transition: 0.3s;
    }

    .option-parameters__item--type {
        font-weight: bold;
        font-size: 20px;
    }

    .option-parameters__link {
        color: $blackColorText;
    }

    @media (max-width: 900px) {

        .option-parameters__wrapper {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, auto);
            row-gap: 0;

            &:before {
                grid-area: 1/1/2/-1;
                justify-self: center;
                transform: rotate(90deg);
            }
        }

        .option-parameters__item {
            text-align: center;
        }

        .option-parameters__item--type {
            justify-self: center;
            grid-area: 2/1/3/-1;
            position: relative;
            margin-bottom: 30px;
        }

        .option-parameters__item--cost {
            grid-area: 3/1/4/-1;
            justify-self: center;
            margin-bottom: 30px;
        }

        .option-parameters__item--steps {
            grid-area: 4/1/5/-1;
            justify-self: center;
            margin-bottom: 30px;
        }

        .option-parameters__item--examples {
            grid-area: 5/1/6/-1;
            justify-self: center;
            margin-bottom: 30px;
        }
    }

</style>