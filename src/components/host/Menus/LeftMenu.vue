<template>
    <div class="LeftMenu d-none d-md-block">
        <div class="sticky">

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class LeftMenu extends Vue {

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
        width:240px;
        padding: 48px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

        .sticky {
            position: sticky;
            top: 0;
            height: calc(100vh - 48px);
            padding-top: .5rem;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }


</style>