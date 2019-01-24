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

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class LeftNavLink extends Vue {

        @Prop()
        public iconName!: string;

        @Prop()
        public linkPath!: string;

        @Prop({default: ''})
        public linkTitle!: string;
    }

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

    .left-nav-item {
        height: 50px;
        display: flex;
        flex: 1 1 0;
        align-items: center;
        border-bottom: 1px solid #383e4e3b;

        .icon {
            margin-left: 10px;
            height: 100%;
            display: flex;
            padding: 5px;
            align-items: center;
        }

        .link {
            margin-left: 10px;
            height: 100%;
            padding: 5px;
            display: flex;
            align-items: center;
        }

    }
</style>