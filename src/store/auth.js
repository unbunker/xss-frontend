import { defineStore } from 'pinia';
import apiService from '@/services/apiService';
import jwt_decode from "jwt-decode";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: getUser()
  }),
  actions: {
    async logout() {
      this.user = null;
      localStorage.clear();
    },
    async login(credentials) {
        try {
            const response = await apiService.login(credentials);
            this.user = response.data; 
        
            localStorage.setItem("token", response.data.token);

            return true;
        } catch (error) {
            return false;
        }
    },
    async register(credentials) {
      try {
          const response = await apiService.register(credentials);
          this.user = response.data; 

          return true;
      } catch (error) {
          return false;
      }
  }
  }
});

//Bad authentication
function getUser() {

    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);

      if (decoded.exp) {
        let expirationDate = new Date(decoded.exp * 1000);
        let now = new Date();
        if (expirationDate > now) {
          return decoded;
        }
      }
    }

    return false;
}