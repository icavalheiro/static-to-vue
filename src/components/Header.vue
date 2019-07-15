<template>
    <header class="masthead d-flex" :style="bgStyle()">
        <div class="container text-center my-auto">
        <h1 class="mb-1">{{title}}</h1>
        <h3 class="mb-5">
            <em>{{subTitle}}</em>
        </h3>
        <a class="btn btn-primary btn-xl js-scroll-trigger" :href="btnHref">{{btnText}}</a>
        </div>
        <div class="overlay"></div>
    </header>
</template>

<script>
import Style from "../common/Style"

export default {
    methods: {
        bgStyle(){
            return Style.getSectionBackgroundWithImage(this.bgImage);
        }
    },
    props: {
        title: String,
        subTitle: String,
        btnText: String,
        btnHref: String,
        bgImage: String,
    }
}
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";

.masthead {
    min-height: 30rem;
    position: relative;
    display: table;
    width: 100%;
    height: auto;
    padding-top: 8rem;
    padding-bottom: 8rem;

    h1 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 992px) {
        height: 100vh;
        h1 {
            font-size: 5.5rem;
        }
    }
}
</style>


