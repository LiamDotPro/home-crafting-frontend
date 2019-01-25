<template>
    <div id="TenantChanger">
        <div class="row">
            <div class="col">
                <p>Current Tenant: {{host}} <a @click="emitModalEvent" href="#">(Change Tenant)</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    class TenantChanger extends Vue {

        host = 'Master';

        @Prop() tenantModalEvent;

        emitModalEvent() {
            this.tenantModalEvent();
        }

    }

    export default TenantChanger;

</script>

<style lang="scss">

    #TenantChanger {
        margin-top: 30px;
        text-align: center;

        p {
            font-size: 13px;

            span {
                font-size: 30px;
            }

            a {
                margin-left: 20px;
            }
        }
    }


</style>