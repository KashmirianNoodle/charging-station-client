<template>
  <form @submit.prevent="register">
    <h2>Register</h2>

    <label>Email</label>
    <input v-model="email" type="email" placeholder="Enter your email" required />

    <label>Password</label>
    <input v-model="password" type="password" placeholder="Choose a password" required />

    <label>Username</label>
    <input v-model="username" placeholder="Choose a username" required />

    <button type="submit">Register</button>

    <p style="text-align: center; margin-top: 1rem;">
      Already have an account?
      <a href="#" @click.prevent="$router.push('/login')">Login</a>
    </p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      username: ''
    };
  },
  methods: {
    async register() {
      const payload = {
        email: this.email,
        password: this.password,
        username: this.username
      };

      const res = await axios.post('/api/auth/register', payload);
      localStorage.setItem('token', res.data.token);
      this.$router.push('/dashboard');
    }
  }
};
</script>
