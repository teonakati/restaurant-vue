<template>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-form name="form" label-position="top">
        <el-form-item label="CNPJ">
          <el-input v-model="cnpj" />
        </el-form-item>
        <el-form-item label="Razão Social">
          <el-input v-model="razaoSocial" />
        </el-form-item>
        <el-form-item label="Telefone">
          <el-input v-model="phone" />
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input v-model="email" />
        </el-form-item>
        <el-form-item label="Senha">
          <el-input v-model="password" type="password" />
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-button type="primary" :loading="load" @click="register">
        Cadastrar
      </el-button>
    </el-col>
  </el-row>
</template>
<script>
import registerResource from "../api/resources/register";

export default {
  name: "Register",
  data() {
    return {
      cnpj: "",
      razaoSocial: "",
      phone: "",
      email: "",
      password: "",
      load: false,
    };
  },

  methods: {
    register() {
      let payload = {
        cnpj: this.cnpj,
        razaoSocial: this.razaoSocial,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      this.load = true;
      registerResource.register(payload).then(() => {
        this.$message({
          message: "Cadastrado com sucesso!",
          type: "success",
        });
        
        this.load = false;
      });
    },
  },
};
</script>
<style>
</style>