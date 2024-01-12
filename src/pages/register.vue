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
        <p class="mb-0"> Start XXS attack!</p>
      </v-cardText>

      <v-cardText>
        <v-form @submit.prevent="() => {}">
          <v-row>

            <v-col cols="12">
              <v-text-field variant="underlined" v-model="form.email" label="Email" type="email"/>
            </v-col>

            <v-col cols="12">
              <v-text-field variant="underlined" v-model="form.fullName" label="Full name" type="text"/>
            </v-col>

            <v-col cols="12">
              <v-text-field
                variant="underlined"
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
                <v-checkbox style="flex: initial;" v-model="form.privacyPolicies" hide-details />
                <v-label
                  for="privacy-policy"
                  style="opacity: 1;"
                >
                  <span class="me-1">I agree to</span>
                  <a href="javascript:void(0)" class="text-primary" >privacy policy & terms</a>
                </v-label>
              </div>

              <v-btn :disabled="!form.privacyPolicies"  block @click="register" >
                Sign up
              </v-btn>
            </v-col>

            <v-col cols="12" class="text-center text-base" >
              <span>Already have an account?</span>
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
