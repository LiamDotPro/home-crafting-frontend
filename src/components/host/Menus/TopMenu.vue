<template>
    <div class="TopMenu fixed-top flex-md-nowrap">

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
        height: 48px;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
    }

</style>