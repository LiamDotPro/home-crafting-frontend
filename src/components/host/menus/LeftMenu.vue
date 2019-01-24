<template>
    <div class="LeftMenu d-none d-md-block">
        <div class="sticky">
            <template v-for="linkItem in Links">
                <left-nav-link :iconName="linkItem.IconName"
                               :linkPath="linkItem.LinkPath"
                               :linkTitle="linkItem.LinkTitle"
                ></left-nav-link>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LeftNavLink from '@/components/host/menus/left-menu/LeftNavLink.vue';
    import ILeftNavLink from '@/components/host/menus/types/ILeftNavLink';

    @Component({
        components: {LeftNavLink},
    })
    export default class LeftMenu extends Vue {

        public Links: ILeftNavLink[] = [
            {
                IconName: 'fa-home',
                LinkPath: '/host/home',
                LinkTitle: 'Home',
            },
            {
                IconName: 'fa-user',
                LinkPath: '/host/customers',
                LinkTitle: 'Customers',
            },
            {
                IconName: 'fa-vimeo',
                LinkPath: '/host/tutorials',
                LinkTitle: 'Tutorials',
            },
            {
                IconName: 'fa-cog',
                LinkPath: '/host/settings',
                LinkTitle: 'Settings',
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
        width: 242px;
        padding: 48px 0 0;
        color: white;
        border-right: 1px solid #f1f1f1;

        .sticky {
            position: sticky;
            top: 0;
            height: calc(100vh - 48px);
            padding-top: 0.5rem;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }


</style>