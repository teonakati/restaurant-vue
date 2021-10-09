<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item v-if="getAuthenticated" index="/product">Produtos</el-menu-item>
      <el-menu-item index="/login" class="login">Login</el-menu-item>
      <el-menu-item index="/register">Cadastrar</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navbar",
  data() {
    return {
        activeIndex: '/'
    }
  },
  methods: {
      handleSelect(key) {
          this.$router.push(key)
      }
  },
  computed: {
      ...mapGetters([
        'getAuthenticated'
      ])
  }
};
</script>
<style scoped>
.login {
  margin-left: auto;
}
</style>