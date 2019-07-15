<template>
    <section class="callout" :style="getStyle()">
        <div class="container text-center">
        <h2 class="mx-auto mb-5">
            <slot/>
        </h2>
        <a class="btn btn-primary btn-xl" :href="btnHref">{{btnText}}</a>
        </div>
    </section> 
</template>

<script>
import Style from "../common/Style"

export default {
    props: {
        btnText: String,
        btnHref: String,
        bgImage: String,
    },
    methods:{
        getStyle(){
            return Style.getSectionBackgroundWithImage(this.bgImage);
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";

.callout {
    padding: 15rem 0;
    h2 {
        font-size: 3.5rem;
        font-weight: 700;
        display: block;
        max-width: 30rem;
    }
}

</style>

