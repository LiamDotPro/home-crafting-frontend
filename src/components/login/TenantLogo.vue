<template>
    <div id="TenantLogo">
        <img :src="require('../../assets/gopher-space.png')" alt="Your company logo"></img>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class TenantLogo extends Vue {

    }

</script>

<style lang="scss" scoped>

    #TenantLogo {
        min-height: 200px;
        text-align: center;

        img {
            max-width: 200px;
            max-height: 200px;
        }
    }

</style>