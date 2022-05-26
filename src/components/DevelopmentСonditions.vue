<template lang="pug">
    li.additional-page__step
        p {{content}}
</template>

<script>
    export default {
        name: 'DevelopmentConditions',
        props: {
            content: {
                type: String,
            },
        },
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .additional-page__step {
        position: relative;
        padding-left: 30px;

        &:before {
            content: '';
            background: url("../../src/assets/about-check.svg") no-repeat center;
            width: 19px;
            height: 19px;
            position: absolute;
            background-size: contain;
            left: 0;
            top: -3px;
        }
    }

    @media (max-width: 900px) {

        .additional-page__step {
            width: 300px;
            text-align: left;
        }
    }

</style>