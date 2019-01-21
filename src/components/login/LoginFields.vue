<template>
    <div id="loginFields">
        <el-form ref="form" :model="form" label-width="">
            <el-input
                    placeholder="Your email address"
                    v-model="form.email">
                <template slot="prepend"><i class="fa fa-envelope prepend-icon"></i></template>
            </el-input>
            <el-input
                    placeholder="Password"
                    type="password"
                    v-model="form.password">
                <template slot="prepend"><i class="fa fa-key prepend-icon"></i></template>
            </el-input>
            <el-form-item label="Remember Me?">
                <el-switch v-model="form.rememberMe"></el-switch>
            </el-form-item>
            <el-button type="primary" @click="onSubmit()">Login</el-button>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class LoginFields extends Vue {

        public form: object = {
            email: '',
            password: '',
            rememberMe: false,
        };


        public onSubmit() {
            //
        }
    }

</script>

<style lang="scss" scoped>

    form {
        width: 100%;

        .el-input-group {
            margin-bottom: 20px;
        }
    }

    #loginFields {
        display: flex;
        align-items: center;
        justify-items: center;
        width: 100%;
    }

    .prepend-icon {
        font-size: 20px;
    }
</style>