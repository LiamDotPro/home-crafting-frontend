<template>
    <div class="HostDashboard">
        <TopMenu/>
        <div class="container-fluid">
            <div class="row">
                <LeftMenu/>
                <div class="main-area col-12">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="h1">test</div>
                            </div>
                        </div>
                    </div>
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

    .main-area {
        position: relative;
        padding-top: 56px;
        padding-left: 240px;
        padding-right: 0;
        width: 100%;
        min-height: 100vh;
    }
</style>