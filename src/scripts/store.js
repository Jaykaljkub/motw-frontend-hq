import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: false,
  user: null,
  isAdmin: false,

  login(user) {
    this.isAuthenticated = true;
    this.user = user;
    this.isAdmin = user.isAdmin || false;
  },

  logout() {
    this.isAuthenticated = false;
    this.user = null;
    this.isAdmin = false;
  }
});
