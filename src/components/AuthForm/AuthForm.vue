<script setup lang="ts">
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { CRequired, CFemail, CMinLength } from '@/helpers/rulesValidation';
import router from '@/router';

const email = ref('');
const password = ref('');

const rules = {
  email: { CRequired, CFemail },
  password: { CRequired, minLength: CMinLength(6) },
};

const v$ = useVuelidate(rules, { email, password });

const onLoginClick = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    router.push('/game');
  }
};
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-card class="pa-4 auth__card">
      <v-form @submit.prevent="onLoginClick">
        <v-text-field
          label="Email"
          v-model="email"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          label="Password"
          v-model="password"
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          type="password"
          outlined
          dense
        ></v-text-field>

        <v-btn color="primary" @click="onLoginClick">Login</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.card {
  max-width: 800px;
  width: 100%;
}
</style>
