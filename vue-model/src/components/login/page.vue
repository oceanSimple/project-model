<template>
  <h1>loginPage</h1>
  <el-button type="primary" @click="goHome">goHome</el-button>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/home')
}
</script>

<style scoped>

</style>