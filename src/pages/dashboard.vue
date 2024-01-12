<script setup>

import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

const decoded = authStore.user;

const username = decoded.username ?? "";

</script>

<template>
  <v-row class="match-height">
    <v-col cols="12" md="12">
      <v-card elevation="4" class="withbg">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                <div>
                  <v-card-title class="text-h5">Welcome back {{username}}!</v-card-title>
                </div>
            </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
