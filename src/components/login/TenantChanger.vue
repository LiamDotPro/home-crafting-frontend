<template>
    <div id="TenantChanger">
        <div class="row">
            <div class="col">
                <p>Current Tenant: {{host}} <a @click="emitModalEvent" href="#">(Change Tenant)</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class TenantChanger extends Vue {

        public host: string = 'Master';

        @Prop() public tenantModalEvent: any;

        public emitModalEvent(): void {
            this.tenantModalEvent();
        }

    }

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