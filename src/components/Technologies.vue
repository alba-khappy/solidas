<template lang="pug">
    li.technologies-item
        img(:src="require(`../assets/${img1}`)", :alt="alt1", :title="alt1")
        img(:src="require(`../assets/${img2}`)", :alt="alt2", :title="alt2")
        img(:src="require(`../assets/${img3}`)", :alt="alt3", :title="alt3")
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
            alt1: {
                type: String,
                required: true,
            },
            alt2: {
                type: String,
                required: true,
            },
            alt3: {
                type: String,
                required: true,
            }
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