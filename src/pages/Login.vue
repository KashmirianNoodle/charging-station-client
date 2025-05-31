<!-- src/pages/Login.vue -->
<template>
  <form @submit.prevent="login">
    <h2>Login</h2>

    <label>Email</label>
    <input v-model="email" type="email" placeholder="Enter your email" required />

    <label>Password</label>
    <input v-model="password" type="password" placeholder="Enter your password" required />

    <button type="submit">Login</button>

    <p style="text-align: center; margin-top: 1rem;">
      Don't have an account?
      <a href="#" @click.prevent="$router.push('/register')">Register</a>
    </p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { email: '', password: '' };
  },
  methods: {
    async login() {
      const res = await axios.post('/api/auth/login', {
        email: this.email,
        password: this.password
      });
      localStorage.setItem('token', res.data.token);
      this.$router.push('/dashboard');
    }
  }
};
</script>
