<template>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-form name="form" label-position="top">
        <el-form-item label="E-mail">
          <el-input v-model="email" :maxlength="50" />
        </el-form-item>
        <el-form-item label="Senha">
          <el-input
            v-model="password"
            type="password"
            :maxlength="20"
            :show-password="true"
          />
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-button type="primary" :loading="load" @click="login">
        Login
      </el-button>
    </el-col>
  </el-row>
</template>
<script>
import loginResource from "../api/resources/login";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      load: false,
    };
  },
  methods: {
    ...mapActions(["updateAuthenticated"]),
    login() {
      if (this.email == "" || this.password == "")
        return this.$message({
          message: "Todos os campos são obrigatórios.",
          type: "warning",
        });

      let payload = {
        email: this.email,
        password: this.password,
      };

      loginResource
        .login(payload)
        .then(() => {
          this.load = false;
          this.updateAuthenticated(true);
          this.$router.push("/");
        })
        .catch((error) => {
          this.load = false;
          this.$message({
            message: error.message,
            type: "warning",
          });
        });
    },
  },
};
</script>
<style>
</style>