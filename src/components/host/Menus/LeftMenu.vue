<template>
    <div class="LeftMenu d-none d-md-block">
        <div class="sticky">
            <template v-for="linkItem in Links">
                <left-nav-link :iconNameProp="linkItem.iconName"></left-nav-link>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LeftNavLink from '@/components/host/Menus/left-menu/LeftNavLink.vue';
    import ILeftNavLink from '@/components/host/Menus/types/ILeftNavLink';

    @Component({
        components: {LeftNavLink},
    })
    export default class LeftMenu extends Vue {

        public Links: ILeftNavLink[] = [
            {
                iconName: 'fa-home',
            },
        ];

    }

</script>

<style lang="scss" scoped>

    .LeftMenu {
        background-color: #1e2129;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 240px;
        padding: 48px 0 0;
        color: white;

        .sticky {
            position: sticky;
            top: 0;
            height: calc(100vh - 48px);
            padding-top: 1rem;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }


</style>