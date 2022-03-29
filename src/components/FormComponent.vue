<template lang="pug">
    form.contacts__form
        input(type="text", placeholder="Ведите имя").contacts__input
        input(type="number", placeholder="Введите номер телефона").contacts__input
        input(type="email", placeholder="Введите email").contacts__input
        label.check-label
            div.check-text Согласие на обработку персональных данных
            input(type='checkbox')#check
            .wrap
                #check-part-1.check-sign
                #check-part-2.check-sign
        button(type="submit").btn.contacts__btn-sent Отправить

</template>

<script>
    export default {
        name: 'FormComponent',
        props: {
        }
    }

</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .contacts__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #E5F3FD url("../../src/assets/contacts-form-bg.png") no-repeat;
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

    .contacts__btn-sent {
        font-family: "NeueMachina", sans-serif;
        color: $blackColorText;
        background-color: transparent;
        font-size: 20px;
    }

</style>