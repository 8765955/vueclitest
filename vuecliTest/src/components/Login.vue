<template>
<div id="app">
    <el-row type="flex" justify="center" align="bottom">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <!-- <el-button type="primary" icon="fa fa-user-circle" @click="submitForm('ruleForm')"> 提交</el-button> -->
                <el-button type="primary" icon="el-icon-upload" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</div>
</template>

<script>
//import store from '@/vuex/store'
import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                pass: ''
            },
            rules: {
                name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 10,
                        message: '长度在 3 到 10 个字符',
                        trigger: 'blur'
                    }
                ],
                pass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
            }
        };
    },
    //store,
    computed: {
        ...mapState(['token', 'count']) //this
    },
    methods: {
        ...mapMutations(['setToken']), //this
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                    this.$store.dispatch('setToken', '12345')
                   // this.$options.methods.setToken('12345')
                    console.log(this.token)
                    console.log(this.count)
                    this.$router.push('/')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    position: absolute;
    top: 30%;
    bottom: 0;
    width: 100%;
}
</style>
