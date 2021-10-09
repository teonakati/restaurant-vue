<template>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-form name="form" label-position="top">
        <el-form-item label="Nome">
          <el-input v-model="name" :maxlength="50" />
        </el-form-item>
        <el-form-item label="Marca">
          <el-input v-model="brand" :maxlength="50" />
        </el-form-item>
        <el-form-item label="Descrição">
          <el-input v-model="description" :maxlength="200" />
        </el-form-item>
        <el-form-item label="Valor R$">
          <el-input v-model="value" :maxlength="50" />
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row :justify="'center'">
    <el-col :span="12">
      <el-button type="primary" :loading="load" @click="cadastrar">
        Cadastrar Produto
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import productResource from "../api/resources/product";
export default {
  name: "Product",
  data() {
    return {
      name: "",
      brand: "",
      description: "",
      value: "",
      load: false
    };
  },
  methods: {
    cadastrar() {
      let payload = {
        name: this.name,
        brand: this.brand,
        description: this.description,
        value: this.value,
      };

      this.load = true;
      productResource
        .cadastrar(payload)
        .then(() => {
          this.load = false;
          this.$router.push('/');
        })
        .catch((error) => {
          this.load = false;
          this.$message({
            message: error.message,
            type: "error",
          });
        });
    },
  },
};
</script>

<style>
</style>