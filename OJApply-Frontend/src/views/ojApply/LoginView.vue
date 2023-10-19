<script setup>

import axios from "../../../node_modules/axios"
import { reactive, ref } from 'vue'
import router from "../../router";

const inForm = reactive({
  name : "",
  password : "",
})

const onSubmit = () =>{
  axios.post('http://127.0.0.1:8848/users', {
    'name':inForm.name,
    'password':inForm.password,
  })
  .then(success => {
    alert("登录成功");
    router.push({
      path:'/Form',
      replace: true
    })
  })
  .catch(err =>{
    console.log(err)
    alert(err);
  });
}

</script>

<template>
  <div >
      <h1>登录</h1>
      <p>姓名:</p>
      <input type="name" v-model="inForm.name" placeholder="OJApply@qq.com" />
      <br>
      <p>密码:</p>
      <input type="password" v-model="inForm.password" placeholder="" />
      <br><br>
      <button @click="onSubmit">登录</button>
  </div>
</template>

<style>

</style>