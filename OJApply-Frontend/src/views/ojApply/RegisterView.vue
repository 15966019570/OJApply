<script lang="ts" setup>

import axios from "../../../node_modules/axios"
import { reactive, ref } from 'vue'
import router from '../../router'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import App from './App.vue'
import type { FormInstance, FormRules } from 'element-plus'

// const inForm = reactive({
//   name : '',
//   email : '',
//   password : '',
// })
const ruleForm = reactive({
  name: '',
  email: '',
  password: '',
  checkPass: '',
})

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof ruleForm>>({
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  // if (!formEl) return
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!')
  //     return false
  //   }
  // })
  axios.post('http://127.0.0.1:8848/users',{
    "name":ruleForm.name,
    "email":ruleForm.email,
    "password":ruleForm.password,
  })
  .then(res => {
    console.log(res.data);
    alert("注册成功");
    router.push({
      path: '/Login',
      replace: true
    })
  })
  .catch(error => {
    console.log(error);
    alert("注册失败");
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
  <div >
    <h1>注册</h1>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
    <el-form-item label="Name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >      
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >提交</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>

    <!-- <p>姓名: </p>
    <input type="text" v-model="inForm.name" placeholder="" />
    <p>邮箱: </p>
    <input type="email" v-model="inForm.email" placeholder="OJApply@qq.com" />
    <p>密码: </p>
    <input type="password" v-model="inForm.password" placeholder="" />
    <br><br>
    <button @click.prevent="onSubmit">注册</button> -->
  </div>
</template>

<style>
div{
  margin: auto;
}
h1{
  text-align: center;
  margin-left:30%;
}
</style>