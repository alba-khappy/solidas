<template lang="pug">

    li
        img(:src="require(`../assets/${img}`)").example__img
        p.example__description {{text}}

</template>

<script>
    export default {
        name: 'MainPageExample',
        props: {
            img: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .example__img {
        width: 350px;
        margin-bottom: 40px;
    }

    .example__description {
        text-align: center;
    }

</style>