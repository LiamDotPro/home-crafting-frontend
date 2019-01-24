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

        // bind prop values to local data values.
        // public iconName: string = this.iconName;
        // public linkPath: string = this.linkPath;
        // public linkTitle: string = this.linkTitle;

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
        height: 30px;
        display: flex;
        flex: 1 1 0;
        align-items: center;

        .icon {
            margin-left: 10px;
            height: 100%;
            padding: 5px;
        }

        .link {
            margin-left: 10px;
            height: 100%;
            padding: 5px;

        }

    }
</style>