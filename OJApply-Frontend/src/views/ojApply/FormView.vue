<script lang="ts" setup>
import axios from "../../../node_modules/axios"
import { reactive, ref } from 'vue'
import router from "../../router";
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import App from './App.vue'
import type { FormInstance, FormRules } from 'element-plus'

const size = ref<'default' | 'large' | 'small'>('default')

const ruleFormRef = ref<FormInstance>()

const Form = reactive({
  user_id: "",//用户ID
  gender: "",//性别
  name: "",//姓名
  student_id: "",//学生ID
  birthdate: "",//出生日期
  political_status: "",//政治面貌
  ethnicity: "",//民族
  major_class: "",//专业班级
  previous_position: "",//曾任职位
  special_skills: "",//专长
  self_introduction: "",//自我介绍
  job_expectation: "",//职位期望
  profile_photo: "",//头像照片
  phone_number: "",//电话号码
  attachment: ""//附件
})


const genderOptions = [
  {
    value: '男',
    label: '男',
  },
  {
    value: '女',
    label: '女',
  },
  {
    value: '武装直升机',
    label: '武装直升机',
  },
  {
    value: '沃尔玛购物袋',
    label: '沃尔玛购物袋',
  },
]

const handleChange = (Form: { major_class: any; }) => {
  console.log(Form.major_class)
}

const classOptions = [
  {
    value: '计231',
    label: '计231',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计232',
    label: '计232',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计233',
    label: '计233',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计234',
    label: '计234',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计235',
    label: '计235',
  },
  {
    value: '计236',
    label: '计236',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计237',
    label: '计237',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    value: '计239',
    label: '计239',
    children: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
]

const submitForm = (formEl: FormInstance | undefined) => {
  axios.post('http://127.0.0.1:8848/users',{
    "user_id": Form.user_id,
    "gender": Form.gender,
    "name": Form.name,
    "student_id": Form.student_id,
    "birthdate": Form.birthdate,
    "political_status": Form.political_status,
    "ethnicity": Form.ethnicity,
    "major_class": Form.major_class,
    "previous_position": Form.previous_position,
    "special_skills": Form.special_skills,
    "self_introduction": Form.self_introduction,
    "job_expectation": Form.job_expectation,
    "profile_photo": Form.profile_photo,
    "phone_number": Form.phone_number,
    "attachment": Form.attachment,
  })
  .then(res => {
    console.log(res.data);
    alert("提交成功");
    router.push({
      path: '/Home',
      replace: true
    })
  })
  .catch(error => {
    console.log(error);
    alert("提交失败");
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div>

    <h1 size="large">个人信息</h1>
    <el-form-item>
      <p>姓名</p>
      <el-input v-model="Form.user_id" placeholder="Please input" />
    </el-form-item>
    <p>性别</p>
    <el-form-item>
      <el-select v-model="Form.gender" class="gender0" placeholder="">
        <el-option v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <p>学生ID</p>
    <el-form-item>
      <el-input type="number" v-model="Form.student_id" placeholder="Please input" />
    </el-form-item>
    <p>出生日期</p>
    <el-form-item>
      <el-input v-model="Form.birthdate" type="date" placeholder="Pick a day" :size="size" />
    </el-form-item>
    <p>政治面貌</p>
    <el-form-item>
      <el-input v-model="Form.political_status" placeholder="" />
    </el-form-item>
    <p>民族</p>
    <el-form-item>
      <el-input v-model="Form.ethnicity" placeholder="" />
    </el-form-item>
    <p>专业班级</p>
    <el-form-item>
      <el-cascader v-model="Form.major_class" :options="classOptions" @change="handleChange" />
    </el-form-item>
    <p>曾任职位</p>
    <el-form-item>
      <el-input v-model="Form.previous_position" placeholder="" />
    </el-form-item>
    <p>特长</p>
    <el-form-item>
      <el-input v-model="Form.special_skills" autosize type="textarea" placeholder="" />
    </el-form-item>
    <p>自我介绍</p>
    <el-form-item>
      <el-input v-model="Form.self_introduction" autosize type="textarea" placeholder="" />
    </el-form-item>
    <p>职位期望</p>
    <el-form-item>
      <el-input v-model="Form.job_expectation" autosize type="textarea" placeholder="" />
    </el-form-item>
    <p>头像照片</p>
    <el-form-item>
      <el-input type="file" v-model="Form.profile_photo" placeholder="" />
    </el-form-item>
    <p>电话号码</p>
    <el-form-item>
      <el-input type="number" v-model="Form.phone_number" placeholder="Please input" />
    </el-form-item>
    <p>附件</p>
    <el-form-item>
      <el-input type="file" v-model="Form.attachment" placeholder="" />
    </el-form-item>
    <br>
    <br>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </div>
</template>
  
<style>
h1{
  margin: auto;
}
</style>