<template>
    <div id="TenantLogo">
        <img :src="require('../../assets/logo-assets/logo.png')" alt="Your company logo"/>
    </div>
</template>

<script lang="js">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    class TenantLogo extends Vue {

    }

    export default TenantLogo;

</script>

<style lang="scss" scoped>

    #TenantLogo {
        min-height: 200px;
        text-align: center;

        img {
            max-width: 300px;
            max-height: 300px;
        }
    }

</style>