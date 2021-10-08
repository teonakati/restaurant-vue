<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">Restaurantes</el-menu-item>
      <el-menu-item index="/pedidos">Pedidos</el-menu-item>
      <el-menu-item index="/login" class="login">Login</el-menu-item>
      <el-menu-item index="/register">Cadastrar</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
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
  }
};
</script>
<style scoped>
.navbar {
    display: flex;
}

.login {
    margin-left: auto;
}
</style>