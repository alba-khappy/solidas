<template lang="pug">
  header.page-header
    nav.main-navigation.container
        div.burger-menu(@click="toggleBurger", :class="{ 'burger-menu--opened': show }")
            .line
            .line
            .line
        ul.site-navigation(:class="{'site-navigation--opened': show}")
            li.site-navigation__item
                a(href="/").site-navigation__link--home-page Главная
                    img(src="../assets/logo-min.svg").site-navigation__logo.home-page-link--desktop

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
                    url: "/contacts.html",
                    page: "Контакты",
                },
            ]
        }
    },
    methods: {
        toggleBurger(){
            this.show = !this.show;
            document.body.classList.toggle('no-scroll');
        }
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

    .site-navigation__link--home-page {
        color: transparent;
    }

    .site-navigation__logo {
        height: 100px;
    }

    @media (max-width: 1024px) and (min-width: 901px){
        .site-navigation__item:not(:last-child) {
            margin-right: 10px;
        }

        .site-navigation__link {
            font-size: 18px;
        }
    }



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
            display: none;
        }

        .site-navigation--opened {
            display: flex;
            animation: fadeIn 0.3s;
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

        /*burger*/

        .burger-menu {
            position: absolute;
            right: 30px;
            top: 70px;
            background: transparent url("../assets/polygon.svg") no-repeat 50% 100%;
            flex-direction: column;
            width: 60px;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10;
        }

        .burger-menu--opened {
            position: fixed;

            .line:nth-child(1) {
                transform: rotate(45deg) translate(5px, 6px);
            }
            .line:nth-child(2) {
                width: 15px;
                transform: rotate(-45deg) translate(-5px, -3px);
            }
            .line:nth-child(3) {
                width: 15px;
                transform: rotate(-45deg) translate(19px, -11px);
            }

        }

        .line {
            height: 2px;
            width: 30px;
            background: $blackColorText;
            margin: 5px auto;
            transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: initial;

            &:nth-child(2) {
                width: 20px;
            }
            &:nth-child(3) {
                width: 13px;
            }
        }



    }

</style>
