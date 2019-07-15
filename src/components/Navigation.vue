<template>
    <div>
        <a class="menu-toggle rounded" href="#" @click.prevent="toggleOpen">
            <i class="fas fa-bars"></i>
        </a>
        <nav class="sidebar-wrapper" :class="navClass()">
            <ul class="sidebar-nav">
                <li :class="itemClass(index)" v-for="(link, index) in links" :key="index">
                    <a class="js-scroll-trigger" :href="link.href">{{link.name}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            links: [
                {name:'Start Bootstrap', href:'#page-top'},
                {name:'Home', href:'#page-top'},
                {name:'About', href:'#about'},
                {name:'Services', href:'#services'},
                {name:'Portfolio', href:'#portfolio'},
                {name:'Contact', href:'#contact'},
            ]
        }
    },
    methods: {
        itemClass(index){
            return (index == 0) ? 'sidebar-brand' : 'sidebar-nav-item'
        },
        navClass() {
            return this.show ? 'active' : ''
        },
        toggleOpen(e) {
            this.show = !this.show;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_bootstrap-overrides.scss";

.sidebar-wrapper {
    position: fixed;
    z-index: 2;
    right: 0;
    width: 250px;
    height: 100%;
    transition: all 0.4s ease 0s;
    transform: translateX(250px);
    background: $primary;
    border-left: 1px solid fade-out($white, 0.9);

    &.active {
        right: 250px;
        width: 250px;
        transition: all 0.4s ease 0s;
    }

}

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
    

}

li.sidebar-nav-item a {
    display: block;
    text-decoration: none;
    color: $white;
    padding: 15px;

    &:hover {
        text-decoration: none;
        color: #fff;
        background: rgba(255, 255, 255, .2);
    }

    &:active, 
    &:focus{
        text-decoration: none;
    }
}

.sidebar-brand {
    font-size: 1.2rem;
    background: fade-out($gray-800, .9);
    height: 80px;
    line-height: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    a {
        color: $white;

        &:hover {
            color: #fff;
            background: none;
        }
    }
}

.menu-toggle {
    position: fixed;
    right: 15px;
    top: 15px;

    width: 50px;
    height: 50px;

    text-align: center;

    color: $white;
    background: fade-out($gray-800, .5);

    line-height: 50px;

    z-index: 999;
    &:focus,
    &:hover {
        color: $white;
    }
    &:hover {
        background: $gray-800;
    }
}
</style>