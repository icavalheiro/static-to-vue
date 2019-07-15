<template>
    <section class="content-section bg-light" id="about">
        <div class="container text-center">
        <div class="row">
            <div class="col-lg-10 mx-auto">
            <h2>{{title}}</h2>
            <p class="lead mb-5">
                <slot/>
            </p>
            <a class="btn btn-dark btn-xl js-scroll-trigger" :href="btnHref">{{btnText}}</a>
            </div>
        </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";
</style>

<script>
export default {
    props: {
        title: String,
        btnText: String,
        btnHref: String
    }
}
</script>


