<template>
    <div class="TopMenu fixed-top flex-md-nowrap">
        <div class="logo-area">
            <div class="logo-holder">
                <p>CreateCards.co.uk</p>
            </div>
            <div class="burger-holder">
                <i class="fa fa-bars"></i>
            </div>
        </div>

        <div class="right-nav">

            <div class="right-nav-item">
                <router-link to="/">
                    <i class="fa fa-sign-out"></i>
                </router-link>
            </div>

            <div class="right-nav-item">
                <img class="img-fluid img-rounded" :src="require('../../../assets/no-profile.jpg')"
                     alt="profile"></img>
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
        display: flex;
        align-items: center;

        .logo-area {
            height: 100%;
            width: 241px;
            border-right: 1px solid #f1f1f1;
            display: flex;
            align-items: center;

            .logo-holder {
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                display: flex;

                p {
                    margin: 0 0 0 0;
                }
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

        .right-nav {
            height: 100%;
            width: calc(100% - 241px);
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .right-nav-item {
                margin-right: 20px;
                height: 56px;

                display: flex;
                justify-content: center;
                align-items: center;


                img {
                    border-radius: 30px 30px;
                    height: 40px;
                    cursor: pointer;
                }

                i {

                    font-size: 20px;
                    opacity: 0.3;
                    transition: opacity 500ms ease-in-out;
                    color: #000;
                    margin-top: 7.5px;
                    text-decoration: none;

                    cursor: pointer;

                    &:hover {
                        opacity: 1;
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