<template>
    <div class="LeftNavLink">
        <router-link :to="this.linkPath">
            <div class="left-nav-item">
                <div class="icon">
                    <i :class=" 'fa ' + this.iconName"></i>
                </div>
                <div class="link">
                    {{this.linkTitle}}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script lang="js">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    class LeftNavLink extends Vue {

        @Prop()
        iconName;

        @Prop()
        linkPath;

        @Prop({default: ''})
        linkTitle;
    }

    export default LeftNavLink;

</script>

<style lang="scss" scoped>
    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: white;
            text-decoration: none;
        }
    }

    .router-link-exact-active {
        .left-nav-item {
            background: #252935;
            transition: background ease 300ms;

            .icon {
                opacity: 1 !important;
            }

            .link {
                opacity: 1 !important;
            }

        }
    }

    .left-nav-item {
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #383e4e3b;

        .icon {
            margin-left: 10px;
            height: 100%;
            display: flex;
            padding: 5px;
            align-items: center;
            opacity: 0.4;
            transition: opacity 300ms ease;
        }

        .link {
            margin-left: 10px;
            height: 100%;
            padding: 5px;
            display: flex;
            align-items: center;
            opacity: 0.4;
            transition: opacity 300ms ease;
        }

    }
</style>