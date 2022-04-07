<template lang="pug">
    a(:href="address").button-transparent {{text}}
        span
        span
        span
        span
</template>

<script>
    export default {
        name: 'ButtonTransparent',
        props: {
                address: {
                    type: String,
                },
                text: {
                    type: String,
                },
            },
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .button-transparent {
        position: absolute;
        width: 180px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
        border: 1px solid $blackColorText;
        border-radius:5px;
        color: $blackColorText;
        transition: 0.5s;
        overflow: hidden;
        font-size: 20px;
    }

    .button-transparent:hover {
        color: #fff;
    }
    .button-transparent span {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(37, 62, 70, 0.5);
        transition: 0.5s;
        z-index: -1;
    }
    .button-transparent span:nth-child(1) {
        top: -100%;
        left: -100%;
    }
    .button-transparent:hover span:nth-child(1) {
        top: 0;
        left: 0;
    }
    .button-transparent span:nth-child(2) {
        bottom: -100%;
        left: -100%;
    }
    .button-transparent:hover span:nth-child(2) {
        bottom: 0;
        left: 0;
    }
    .button-transparent span:nth-child(3) {
        top: -100%;
        right: -100%;
    }
    .button-transparent:hover span:nth-child(3) {
        top: 0;
        right: 0;
    }
    .button-transparent span:nth-child(4) {
        bottom: -100%;
        right: -100%;
    }
    .button-transparent:hover span:nth-child(4) {
        bottom: 0;
        right: 0;
    }

</style>