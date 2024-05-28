import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: false,
  user: null,

  login(user) {
    this.isAuthenticated = true;
    this.user = user;
  },

  logout() {
    this.isAuthenticated = false;
    this.user = null;
  }
});
