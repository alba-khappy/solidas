<template lang="pug">
    #about
        HeaderComponent
        section.section__about-page
            div.container.about-page__container
                h2.h2.h2--secondary About us
                h2.h2.h2--primary.h2__about-page--primary О нас
                h3.h3--about-page Наши принципы:
                ul.about-page--principles-list
                    li.h3__about-page--principles-item Agile
                    li.h3__about-page--principles-item Высокое качество продукта
                    li.h3__about-page--principles-item Индивидуальные дизайн и разработка, нет шаблонам и коробочным решениям, без вордпресса и тильды
                h3.h3--about-page Наша команда:
                ul.about-page--team-list
                    li.h3__about-page--team-item Начала свое формирование в 2019 году;
                    li.h3__about-page--team-item Участники работали над проектами крупнейших банков, трэвел агентств и маркетплейсов;
                    li.h3__about-page--team-item Разработчики имеют опыт работы в Европе, США, Японии, Бразилии и других странах мира;
                h3.h3--about-page Наши технологии:
                ul.about-page__technologies-list
                    Technologies(v-for = "technologies in technologiesList",
                        :img1 = "technologies.img1",
                        :img2 = "technologies.img2",
                        :img3 = "technologies.img3",
                    )
                h3.h3--about-page Наше
                    a(href="")  мнение о нашей профессии.
                h3.h3--about-page Наши вакансии*

                //ul
                    li Angular
                    li Java
                    li Взять вакансии и продать резюме на работу?

                //p.about-page__content Наша команда состоит из разработчиков с опытом работы более 100500лет, все профессионалы высшего класса. И так далее и тому подобное.Технологии, которые мы используем для разработки:

                a(href="/how-to-become-a-developer.html").about-page__article Статья о том, как стать разработчиком.
                FooterComponent
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";
import Technologies from "../../components/Technologies";
import FooterComponent from "../../components/FooterComponent";

export default {
  name: 'About',
  components: {
      FooterComponent,
      Technologies,
      HeaderComponent
  },
    data() {
        return {
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
                    img3: "php.png",
                },
                {
                    img1: "mongo.png",
                    img2: "postgres.png",
                    img3: "mysql.png",
                },
                {
                    img1: "jenkins.png",
                    img2: "gitlab.png",
                    img3: "nginx.png",
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
        background-size: contain;
        min-height: 100vh;
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
        margin-bottom: 100px;
    }

    .about-page__article {
        color: $blackColorText;
        margin-bottom: 100px;
        border-bottom: 1px solid $blackColorText;
        width: fit-content;

        &:before {
        content: 'ⓘ';
        margin-right: 10px;
        }
    }

    .h3--about-page {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .about-page--principles-list, .about-page--team-list {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 40px;
    }

    .h3__about-page--principles-item {
        max-width: 300px;
        font-weight: normal;
    }

    .h3__about-page--team-item {
        max-width: 600px;
        font-weight: normal;
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
            margin-bottom: 50px;
        }

    }




</style>
