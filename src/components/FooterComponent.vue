<template lang="pug">
    footer.page-footer
        p.page-footer__name © Solidas, {{currentYear}}
        a(:href="`mailto:${email}?subject=Вопрос с сайта solidas.ru`").page-footer__mail.page-footer__link {{email}}
        a(href="").page-footer__agreement.page-footer__link Пользовательское соглашение
</template>

<script>
    import quizToConsole from '../functions/console-info';

    export default {
        name: 'FooterComponent',
        data() {
            return {
                currentYear: (new Date()).getFullYear(),
                email: 'welcome@solidas.ru'
            }
        },
        mounted() {
            quizToConsole();
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .page-footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 70px;
    }

    .page-footer__link {
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }

    .page-footer__name, .page-footer__link {
        color: #253E46;
        font-size: 20px;
    }

    .page-footer__mail {
        width: fit-content;
        justify-self: center;
        text-align: center;
    }

    .page-footer__agreement {
        width: min-content;
        text-align: right;
        justify-self: end;
    }

    @media (max-width: 768px) {
        .page-footer {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, auto);
        }

        .page-footer__link {
            font-size: 10px;
        }

        .page-footer__mail {
            justify-self: end;
            text-align: right;
        }

        .page-footer__agreement {
            grid-area: 2/2/3/3;
            text-align: right;
        }
    }

</style>