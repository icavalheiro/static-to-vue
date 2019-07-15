<template>
    <section class="content-section bg-primary text-white">
        <div class="container text-center">
        <h2 class="mb-4">{{title}}</h2>
        <a :href="link1Href" class="btn btn-xl btn-light mr-4">{{link1Name}}</a>
        <a :href="link2Href" class="btn btn-xl btn-dark">{{link2Name}}</a>
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
        link1Name: String,
        link1Href: String,
        link2Name: String,
        link2Href: String,
    }
}
</script>


