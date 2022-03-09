<template lang="pug">
  #about
    HeaderComponent
    div
        img(src="../../assets/examples-header-bg-desktop.png")
        h2.h2.h2--secondary About us
            h2.h2.h2--primary.h2__services--primary О нас

    p Наша команда состоит из разработчиков с опытом работы более 100500лет, все профессионалы высшего класса. И так далее и тому подобное.Технологии, которые мы используем для разработки:
    div
        div
            img(src="../../assets/html.png")
            img(src="../../assets/css.png")
            img(src="../../assets/js.png")
        div
            img(src="../../assets/angular.png")
            img(src="../../assets/react.png")
            img(src="../../assets/vue.png")



    a(href="/") to home
</template>

<script>

import HeaderComponent from "../../components/HeaderComponent";

export default {
  name: 'About',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
    @import "../../assets/scss/general.scss";

</style>
