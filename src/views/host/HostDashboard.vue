<template>
    <div class="HostDashboard">
        <TopMenu/>
        <div class="container-fluid">
            <div class="row">
                <LeftMenu/>
                <div class="main-area">
                    <div class="container-fluid content-area">
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

<script lang="js">
    import {Component, Vue} from 'vue-property-decorator';
    import LeftMenu from '../../components/host/menus/LeftMenu.vue';
    import TopMenu from '../../components/host/menus/TopMenu.vue';

    @Component({
        components: {TopMenu, LeftMenu},
    })
    class HostDashboard extends Vue {

    }

    export default HostDashboard;

</script>

<style lang="scss">
    .HostDashboard {
        background: #f1f1f1;
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

        .content-area {
            height: 100%;
        }
    }
</style>