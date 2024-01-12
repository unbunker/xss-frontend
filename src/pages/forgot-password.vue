<script setup>

import LOGO from '../components/Logo.vue'
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
const router = useRouter(); 

const form = ref({
  email: '',
  Fullname: '',
  password: '',
  privacyPolicies: false,
})

const authStore = useAuthStore();

const register = async () => {
    let result = await authStore.register({ email: form.value.email, fullName: form.value.fullName, password: form.value.password });

    if (result) {
        router.push("/login")
    } 
};


const isPasswordVisible = ref(false)
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-card elevation="4" class="pa-4 pt-7" max-width="448" >
      <v-cardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <LOGO/>
          </div>
        </template>

        <v-cardTitle class="font-weight-semibold text-2xl text-uppercase">
          Unbunker
        </v-cardTitle>
      </v-cardItem>

      <v-cardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1"> Adventure starts here 🚀 </h5>
        <p class="mb-0"> Start your XSS adventure</p>
      </v-cardText>

      <v-cardText>
        <v-form @submit.prevent="() => {}">
          <v-row>

            <v-col cols="12">
              <v-text-field variant="underlined" v-model="form.email" label="Email" type="email"/>
            </v-col>

            <v-col cols="12">
              <v-btn :disabled="!form.email"  block @click="register" >
                Send link
              </v-btn>
            </v-col>
            <v-col cols="12" class="text-center text-base" >
              <span>Remembered your password?</span>
              <router-link class="text-primary ms-2" to="login" >
                Sign in instead
              </router-link>
            </v-col>
          </v-row>
        </v-form>
      </v-cardText>
    </v-card>

  </div>
</template>

<style lang="scss">
</style>
