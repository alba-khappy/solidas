<template lang="pug">
  header.page-header
    nav.main-navigation.container
        div.burger-menu
        ul.site-navigation
            li.site-navigation__item
                a(href="/")
                    img(src="../assets/logo.svg").site-navigation__logo
            li.site-navigation__item
                a(href="/about.html").site-navigation__link О нас
            li.site-navigation__item
                a(href="").site-navigation__link Услуги и цены
            li.site-navigation__item
                a(href="").site-navigation__link Примеры работ
            li.site-navigation__item
                a(href="").site-navigation__link Контакты
            li.site-navigation__item
                a(href="").site-navigation__link Блог
</template>

<script>
export default {
  name: 'HeaderComponent',
    props: {
        logo: {
            type: String,
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    @import "../assets/scss/general.scss";

    .page-header {
      background-color: #23211F;
      color: #F4FDFF;
    }

    .main-navigation {

    }

    .burger-menu {
        display: none;
    }

    .site-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .site-navigation__item {

        &:not(:last-child) {
            margin-right: 40px;
        }
    }

    .site-navigation__logo {
        height: 100px;
    }

    .site-navigation__link {
        color: #F4FDFF;
        font-size: 20px;
        border: 1px solid transparent;
        padding: 5px 10px;

        &:hover {
            border: 1px solid #F4FDFF;
            border-radius: 5px;
        }
    }

    @media (max-width: 900px) and (min-width: 320px) {

        .page-header {
            background-color: transparent;
        }

        .site-navigation__link {
            color: $blackColorText;
        }

        .burger-menu {
            display: block;
            position: absolute;
            right: 30px;
            top: 50px;
            background: url("../assets/burger-menu.png") no-repeat center;
            width: 100px;
            height: 100px;
            z-index: 10;
        }

        .site-navigation {
            display: none;
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 100px;
            padding-top: 120px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #FFFFFF;
            z-index: 1;
        }

        .site-navigation__item {
            margin-bottom: 30px;
        }



    }

</style>
