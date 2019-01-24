<template>
    <div class="LeftNavLink">
        <div class="left-nav-item">
            <div class="icon">
                <i :class=" 'fa ' + iconName"></i>
            </div>
            <div class="link">
                <router-link to="/host/home">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class LeftNavLink extends Vue {

        @Prop({default: ''})
        public iconNameProp!: string;

        @Prop({default: ''})
        public linkPathProp!: string;


        // bind prop values to local data values.
        public iconName: string = this.iconNameProp;
        public linkPath: string = this.linkPathProp;

    }

</script>

<style lang="scss" scoped>
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

            a {
                color: white;
                text-decoration: none;
            }
        }
    }
</style>