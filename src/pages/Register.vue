<template>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-form name="form" label-position="top">
        <el-form-item label="CNPJ">
          <el-input v-model="cnpj" :maxlength="14" />
        </el-form-item>
        <el-form-item label="Razão Social">
          <el-input v-model="razaoSocial" :maxlength="50" />
        </el-form-item>
        <el-form-item label="Telefone">
          <el-input v-model="phone" :maxlength="11" />
        </el-form-item>
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

      const isValid = Object.values(payload).every((prop) => prop !== "");

      if (!isValid)
        return this.$message({
          message: "Todos os campos são obrigatórios.",
          type: "warning",
        });

      this.load = true;
      registerResource.register(payload).then(() => {
        this.$message({
          message: "Cadastrado com sucesso!",
          type: "success",
        });

        this.resetFields();
        this.load = false;
      });
    },

    resetFields() {
      this.cnpj = "";
      this.razaoSocial = "";
      this.phone = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>
<style>
</style>