<template lang="pug">
    a(:href="address").button-transparent {{text}}
        span
        span
        span
        span
</template>

<script>
    export default {
        name: 'ButtonTransparent',
        props: {
            address: {
                type: String,
            },
            text: {
                type: String,
            },
        },
    }

</script>


<style lang="scss">

    @import "../assets/scss/general.scss";

</style>