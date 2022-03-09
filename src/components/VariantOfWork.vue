<template lang="pug">
    ul.option-parameters__wrapper
        li.option-parameters__item {{type}}
        li.option-parameters__item {{cost}}
        li.option-parameters__item {{steps}}
        li.option-parameters__item {{examples}}
</template>

<script>
    export default {
        name: 'VariantOfWork',
        props: {
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
        grid-template-columns: 200px repeat(3, auto);
        background: #F0F7F9;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
        padding: 40px;
        margin-bottom: 45px;
    }


</style>