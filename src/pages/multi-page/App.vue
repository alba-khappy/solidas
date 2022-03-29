<template lang="pug">
    #multiPage
        HeaderComponent(:logoLink="logoLink")
        section.section__about-page
            div.container.about-page__container
                h2.h2.h2--secondary About us
                h2.h2.h2--primary.h2__about-page--primary О нас
                p kkkkkk
                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import Technologies from "../../components/Technologies";
import FooterComponent from "../../components/FooterComponent";

export default {
  name: 'multiPage',
  components: {
      FooterComponent,
      Technologies,
      HeaderComponent
  },
    data() {
        return {
            logoLink: true,
            technologiesList: [
                {
                    img1: "html.png",
                    img2: "css.png",
                    img3: "js.png",
                },
                {
                    img1: "angular.png",
                    img2: "react.png",
                    img3: "vue.png",
                },
                {
                    img1: "figma.png",
                    img2: "photoshop.png",
                    img3: "illustrator.png",
                },
                {
                    img1: "nodejs.png",
                    img2: "java.png",
                    img3: "nginx.png",
                },
                {
                    img1: "jenkins.png",
                    img2: "gitlab.png",
                    img3: "mongo.png",
                },
                {
                    img1: "mysql.png",
                    img2: "php.png",
                    img3: "postgress.png",
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

    .section__about-page {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: cover;
        height: 100vh;
    }

    .about-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/about-header-bg-desktop.png") no-repeat top right;
        background-size: 30%;
    }

    .h2__about-page--primary {
        margin-bottom: 100px;
    }

    .about-page__content {
        font-size: 20px;
        margin-bottom: 70px;
    }

    .about-page__technologies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 300px;
    }

    @media (max-width: 900px) {

        .about-page__container {
            background-size: 60%;
            background-position: top center;
        }

        .about-page__container {
            padding: 70px 20px 0;
        }

        .h2__about-page--primary {
            margin-bottom: 50px;
        }

        .about-page__technologies-list {
            margin-bottom: 150px;
        }

    }




</style>
