<template lang="pug">
    li.technologies-item
        img(:src="require(`../assets/${img1}`)")
        img(:src="require(`../assets/${img2}`)")
        img(:src="require(`../assets/${img3}`)")
</template>

<script>
    export default {
        name: 'Technologies',
        props: {
            img1: {
                type: String,
                required: true,
            },
            img2: {
                type: String,
                required: true,
            },
            img3: {
                type: String,
                required: true,
            },
        }
    }
</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .technologies-item {
        display: grid;
        grid-template-columns: repeat(3, 90px);
        grid-template-rows: 90px;
        justify-items: center;
    }

</style>