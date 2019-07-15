<template>
    <nuxt />
</template>


<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../scss/_bootstrap-overrides.scss';
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/global.scss";
@import "../scss/masthead.scss";
@import "../scss/sidebar.scss";
@import "../scss/services.scss";
@import "../scss/callout.scss";
@import "../scss/portfolio.scss";
@import "../scss/footer.scss";
@import "../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
</style>

<script>
export default {
    head () {
        return {
            title: "Default website",
            meta: [
                { hid: 'charset', charset: 'utf-8' },
                { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                { hid: 'description', name: 'description', content: 'A test website to train static site remaking in nuxt' },
                { hid: 'author', name: 'author', content: 'Ivan S. Cavalheiro' },
            ]
        }
    }
}
</script>

