<template lang="pug">
  header.page-header
    nav.main-navigation.container
        btn.burger-menu(@click="show = !show")
        ul.site-navigation(:class="{'site-navigation--opacity': !show}")
            li.site-navigation__item
                a(href="/")(v-show="logoLink").site-navigation__link--home-page Главная
                    img(src="../assets/logo.svg").site-navigation__logo.home-page-link--desktop

            HeaderLink(v-for = "headerLink in headerLinks",
                    :url = "headerLink.url",
                    :page = "headerLink.page",)
</template>

<script>
import HeaderLink from "./HeaderLink";
export default {
  name: 'HeaderComponent',
    components: {
      HeaderLink
    },
    props: {
        logoLink: {
            type: Boolean,
        },
    },
    data() {
        return {
            show: false,
            headerLinks: [
                {
                    url: "/about.html",
                    page: "О нас",
                },
                {
                    url: "/prices.html",
                    page: "Услуги и цены",
                },
                {
                    url: "/examples.html",
                    page: "Примеры работ",
                },
                {
                    url: "/#contacts",
                    page: "Контакты",
                },
            ]
        }
    },
    methods: {

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

    .burger-menu {
        display: none;
    }

    .site-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 115px;
    }

    .site-navigation__item {

        &:not(:last-child) {
            margin-right: 40px;
        }
    }

    .site-navigation__logo {
        height: 100px;
    }

    /*.home-page-link--desktop {*/
    /*    display: block;*/
    /*}*/

    /*.home-page-link--mobile {*/
    /*    display: none;*/
    /*}*/


    @media (max-width: 900px) {

        .page-header {
            background-color: transparent;
        }

        .site-navigation__link {
            color: $blackColorText;
        }

        .site-navigation--opacity {
            display: none;
        }

        .site-navigation__logo {
            display: none;
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
            border: none;
        }

        .site-navigation {
            position: fixed;
            flex-direction: column;
            justify-content: flex-start;
            height: auto;
            padding-top: 120px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #FFFFFF;
            z-index: 1;
        }

        .site-navigation__item {
            margin-bottom: 30px;

            &:not(:last-child) {
                margin-right: 0;
            }
        }

        .site-navigation__link--home-page {
            cursor: pointer;
            color: $blackColorText;
            font-size: 20px;
        }



    }

</style>
