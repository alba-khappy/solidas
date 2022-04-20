<template lang="pug">
    form.contacts__form
        input(type="text", placeholder="Введите имя", name="name", v-model="name", :class="{ error: formChecked && !name }").contacts__input
        input(type="tel", placeholder="Введите номер телефона", name="tel", v-model="tel", :class="{ error: formChecked && !tel }").contacts__input
        input(type="email", placeholder="Введите email", name="email", v-model="email", :class="{ error: formChecked && !email }").contacts__input
        label(v-if="false").check-label
            div.check-text Соглашаюсь на обработку информации
            input(type='checkbox')#check
            .wrap
                #check-part-1.check-sign
                #check-part-2.check-sign
        div.button-container
            ButtonTransparent(text="Отправить" @button-click="sendMail")
</template>

<script>
    import ButtonTransparent from './ButtonStyle';
    export default {
        name: 'FormComponent',
        components: {ButtonTransparent},
        props: {
        },
        data() {
            return {
                name: '',
                tel: '',
                email: '',
                formChecked: false,
                send: false
            }
        },
        methods: {
            sendMail() {
                this.formChecked = true;

                if (this.name && this.tel && this.email){
                    fetch('mail.php', {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.name,
                            phone: this.tel,
                            email: this.email
                        })
                    }).then((res) => {
                        if (res.status === 200) {
                            this.send = true;
                        }
                    });
                }
            },
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .button-container {
        position: relative;
        width: 180px;
        height: 60px;
        z-index: 0;
    }

    .contacts__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #E5F3FD url("../../src/assets/contacts-form-bg.png") no-repeat;
        background-size: cover;
        padding: 30px 100px;
        margin: 0 auto 80px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .contacts__input {
        width: 240px;
        height: 50px;
        background-color: white;
        border: 1px solid $blackColorText;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 10px 20px;
        font-size: 16px;
        transition: 0.3s;

        &.error {
            border-color: red;
        }

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

    @media (max-width: 900px) {

        .contacts__form {
            padding: 30px;
        }

        .check-text {
            left: 25px;
        }
    }

</style>