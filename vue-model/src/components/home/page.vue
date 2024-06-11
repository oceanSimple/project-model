<template>
  <h1>pinia stat</h1>
  <span>name: {{userStore.name}}</span><br>
  <span>age: {{userStore.age}}</span><br>

  <el-button type="primary" @click="goLogin">前往login页面</el-button>
  <h1>homePage</h1>
  <el-button type="primary" @click="getBaidu">axios访问百度</el-button>
  <el-button type="primary" @click="handleClick">切换子路由</el-button>
  <router-view></router-view>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useUerStore} from "../../store/userStore.js";

const userStore = useUerStore()
const getBaidu = async () => {
  await userStore.getBaidu()
}

let flag = true;
const router = useRouter()
const handleClick = () => {
  flag = !flag
  if (flag) {
    router.push("/home/child1")
  } else {
    router.push("/home/child2")
  }
}

const goLogin = () => {
  router.push("/login")
}
</script>

<style scoped>

</style>