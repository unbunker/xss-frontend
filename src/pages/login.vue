<script setup>

import LOGO from '../components/Logo.vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
const router = useRouter(); 

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const emailError = ref([]);
const passwordError = ref([]);


const authStore = useAuthStore();
 
const login = async () => {
    let result = await authStore.login({ email: form.value.email, password: form.value.password });

    if (result) {
        router.push("/")
    } else {
      emailError.value.push("Incorrect");
      passwordError.value.push("Incorrect");
    }
};

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-card elevation="4" class="pa-4 pt-7" max-width="448" >
      <v-card-item class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <LOGO/>
          </div>
        </template>

        <v-card-title class="font-weight-semibold text-2xl text-uppercase">
          Unbunker
        </v-card-title>
      </v-card-item>

      <v-cardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to Unbunker! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </v-cardText>

      <v-cardText>
        <v-form @submit.prevent="() => {}">
          <v-row>
            <v-col cols="12">
              <v-text-field variant="underlined"  v-model="form.email"  label="Email" type="email"  :error-messages="emailError"/>
            </v-col>

            <v-col cols="12">
              <v-text-field
                variant="underlined" 
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                :error-messages="passwordError"
              />

              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <v-checkbox v-model="form.remember" label="Remember me" />

                <a class="ms-2 mb-1" href="/forgot-password" >
                  Forgot Password?
                </a>
              </div>

              <v-btn @click="login" block >
                Login
              </v-btn>
            </v-col>

            <v-col cols="12"  class="text-center text-base" >
              <span>New on our platform?</span>
              <RouterLink class="text-primary ms-2" to="/register" >
                Create an account
              </RouterLink>
            </v-col>

          </v-row>
        </v-form>
      </v-cardText>
    </v-card>


  </div>
</template>

<style lang="scss">
</style>
