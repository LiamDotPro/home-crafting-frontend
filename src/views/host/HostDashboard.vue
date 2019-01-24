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
                                <router-view/>
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
    import LeftMenu from '../../components/host/menus/LeftMenu.vue';
    import TopMenu from '../../components/host/menus/TopMenu.vue';

    @Component({
        components: {TopMenu, LeftMenu},
    })
    export default class HostDashboard extends Vue {

    }

</script>

<style lang="scss">
    .HostDashboard {
        background: #f5f5f5;
        min-height: 100vh;
        @import url('https://fonts.googleapis.com/css?family=Inconsolata');
        font-family: 'Inconsolata', monospace !important;
        font-weight: 200;
    }

    .main-area {
        position: relative;
        padding-top: 56px;
        padding-left: 242px;
        padding-right: 0;
        width: 100%;
        min-height: 100vh;
    }
</style>