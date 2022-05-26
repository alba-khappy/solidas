<template lang="pug">
    div.popup__container
        div.popup
            button.popup__btn-close(@click="$emit('close-popup')")
            form-component
</template>

<script>
    import FormComponent from "./FormComponent";

    export default {
        name: 'popup-component',
        components: {
            FormComponent
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .popup__container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(28, 33, 29, 0.92);
        z-index: 100;
    }

    .popup {
        position: relative;
    }

    .popup__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .popup__btn-close {
        position: absolute;
        width: 40px;
        height: 40px;
        right: -60px;
        top: -60px;
        border: none;
        background-color: transparent;

        &:before {
            content: '';
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: white;
            transform: rotate(-45deg);
            right: 4px;
        }

        &:after {
            content: '';
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: white;
            transform: rotate(45deg);
            right: 4px;
        }
    }

    @media (max-width: 900px) {

        .popup__btn-close  {
            right: -5px;
        }
    }



</style>

