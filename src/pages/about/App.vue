<template lang="pug">
    #about
        HeaderComponent
        section.section__about-page
            div.container.about-page__container
                h2.h2.h2--secondary About us
                h2.h2.h2--primary.h2__about-page--primary О нас
                h3.h3--about-page Наши принципы
                ul.about-page--principles-list
                    li.h3__about-page--principles-item Agile
                    li.h3__about-page--principles-item Высокое качество продукта
                    li.h3__about-page--principles-item Индивидуальные дизайн и разработка, нет шаблонам и коробочным решениям, без вордпресса и тильды
                h3.h3--about-page Наша команда
                ul.about-page--team-list
                    li.h3__about-page--team-item Начала свое формирование в 2019 году;
                    li.h3__about-page--team-item Участники работали над проектами крупнейших банков, трэвел агентств и маркетплейсов;
                    li.h3__about-page--team-item Разработчики имеют опыт работы в Европе, США, Японии, Бразилии и других странах мира;
                h3.h3--about-page Наши технологии
                ul.about-page__technologies-list
                    Technologies(v-for = "technologies in technologiesList",
                        :img1 = "technologies.img1",
                        :img2 = "technologies.img2",
                        :img3 = "technologies.img3",
                        :alt1 = "technologies.alt1",
                        :alt2 = "technologies.alt2",
                        :alt3 = "technologies.alt3",
                    )
                p.about-page__article Наше <a href="/how-to-become-a-developer.html" class='about-page__article-link'> мнение о нашей профессии</a>

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
                    alt1: "HTML",
                    alt2: "CSS",
                    alt3: "JavaScript",
                },
                {
                    img1: "angular.png",
                    img2: "react.png",
                    img3: "vue.png",
                    alt1: "Angular",
                    alt2: "React",
                    alt3: "Vue.js",
                },
                {
                    img1: "figma.png",
                    img2: "photoshop.png",
                    img3: "illustrator.png",
                    alt1: "Figma",
                    alt2: "Adobe Photoshop",
                    alt3: "Adobe Illustrator",
                },
                {
                    img1: "nodejs.png",
                    img2: "java.png",
                    img3: "php.png",
                    alt1: "Node.js",
                    alt2: "Java",
                    alt3: "PHP",
                },
                {
                    img1: "mongo.png",
                    img2: "postgres.png",
                    img3: "mysql.png",
                    alt1: "MongoDB",
                    alt2: "PostgreSQL",
                    alt3: "MySQL",
                },
                {
                    img1: "jenkins.png",
                    img2: "gitlab.png",
                    img3: "nginx.png",
                    alt1: "Jenkins",
                    alt2: "GitLab",
                    alt3: "Nginx",
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

    @mixin aboutListItem {
        position: relative;
        font-weight: normal;
        margin-bottom: 30px;
        padding-left: 30px;

        &:before {
            content: '';
            background: transparent url("../../assets/about-check.svg") no-repeat center;
            width: 20px;
            height: 20px;
            position: absolute;
            background-size: contain;
            left: 0;
            top: -4px;
        }
    }

    .section__about-page {
        background: url("../../assets/triangular-bg-desktop.png") center;
        background-size: contain;
        min-height: 100vh;
    }

    .about-page__container {
        display: grid;
        grid-template-rows: repeat(2, auto);
        padding: 50px 140px 0;
        background: transparent url("../../assets/about-header-bg-d.png") no-repeat top right;
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

    .h3--about-page {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .about-page--principles-list, .about-page--team-list {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .h3__about-page--principles-item {
        @include aboutListItem;
    }

    .h3__about-page--team-item {
        @include aboutListItem;
    }

    .about-page__article {
        margin-bottom: 30px;

        &:before {
            content: 'ⓘ';
            margin-right: 5px;
        }
    }

    .about-page__article-link {
        color: $blackColorText;
        border-bottom: 1px solid $blackColorText;
    }

    @media (max-width: 900px) {

        .about-page__container {
            background-image: url("../../assets/about-header-bg-m.png");
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
