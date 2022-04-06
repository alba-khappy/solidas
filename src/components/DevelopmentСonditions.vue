<template lang="pug">
    li.additional-page__step
        p {{content}}
</template>

<script>
    export default {
        name: 'DevelopmentConditions',
        props: {
            content: {
                type: String,
            },
        },
    }

</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

    .additional-page__step {
        width: 280px;
        height: 130px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        text-align: center;
        background-color: #F0F7F9;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

</style>