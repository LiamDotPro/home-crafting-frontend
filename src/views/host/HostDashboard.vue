<template>
    <div class="HostDashboard">
        <TopMenu/>
        <div class="container-fluid">
            <div class="row">
                <LeftMenu/>
                <div class="main-area col-lg-10">
                    <h1>Test</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LeftMenu from '../../components/host/Menus/LeftMenu.vue';
    import TopMenu from '../../components/host/Menus/TopMenu.vue';

    @Component({
        components: {TopMenu, LeftMenu},
    })
    export default class HostDashboard extends Vue {

    }

</script>

<style lang="scss" scoped>
    .HostDashboard {
        background: #f5f5f5;
        min-height: 100vh;
    }

    .vertical-layout {
        position: relative;
        display: flex;
        flex: 1 1 0%;
        width: 100%;
        min-width: 0;
        flex-grow: 1;
        min-height: 100vh;
    }

    .main-area {
        position: relative;
        padding-top: 48px;
        margin-left: 240px;
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
</style>