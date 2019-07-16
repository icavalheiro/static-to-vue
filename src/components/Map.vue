<template>
    <section id="contact" class="map">
        <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            :src="mapUrl">
        </iframe>
    </section>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";
</style>

<script>
export default {
    props: {
        mapParams: String
    },
    computed: {
        mapUrl(){
            return 'https://maps.google.com/maps?' + this.mapParams
        }
    },
}
</script>


