<template>
    <div class="TopMenu fixed-top flex-md-nowrap">
        <div class="logo-area">
            <div class="logo-holder">

            </div>
            <div class="burger-holder">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class TopMenu extends Vue {

    }

</script>

<style lang="scss" scoped>

    .TopMenu {
        padding: 0 !important;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        background: #fff;
        height: 56px;

        .logo-area {
            height: 100%;
            width: 241px;
            border-right: 1px solid #f1f1f1;
            display: flex;
            align-items: center;

            .logo-holder {
                width: 100%;
                height: 100%;
            }

            .burger-holder {
                width: 20%;
                height: 100%;
                justify-content: center;
                align-items: center;
                display: flex;

                i {
                    font-size: 22px;
                    opacity: 0.2;
                    transition: opacity 300ms ease;

                    &:hover {
                        opacity: 1;
                        cursor: pointer;
                    }
                }
            }
        }

    }

    .fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
    }

</style>