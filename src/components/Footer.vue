<template>
  <footer class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item" v-for="(icon, index) in icons" :key="index">
          <a :class="getIconClass(index)" :href="icon.href">
            <i :class="icon.icon"></i>
          </a>
        </li>
      </ul>
      <p class="text-muted small mb-0">
        <slot></slot>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props:{
    icons: Array,
  },
  methods:{
    getIconClass(index){
      if(index + 1 === this.$props.icons.length){
        return "social-link rounded-circle text-white";
      }

      return "social-link rounded-circle text-white mr-3";
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";

footer.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  .social-link {
    display: block;
    height: 4rem;
    width: 4rem;
    line-height: 4.3rem;
    font-size: 1.5rem;
    background-color: $primary;
    transition: background-color 0.15s ease-in-out;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: darken($primary, 10%);
      text-decoration: none;
    }
  }
}

</style>

