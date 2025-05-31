<template>
  <div class="charger-form">
    <h2>{{ isEdit ? 'Edit' : 'Add' }} Charger</h2>
    <form @submit.prevent="submit">
      <input v-model="form.name" placeholder="Name" />
      <input v-model="form.location_lat" placeholder="Latitude" />
      <input v-model="form.location_lng" placeholder="Longitude" />
      <select v-model="form.status">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input v-model="form.power_output" placeholder="Power (kW)" />
      <input v-model="form.connector_type" placeholder="Connector Type" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        location_lat: '',
        location_lng: '',
        status: 'active',
        power_output: '',
        connector_type: ''
      }
    };
  },
  computed: {
    isEdit() {
      return this.$route.params.id;
    }
  },
  async mounted() {
    if (this.isEdit) {
      const res = await axios.get('/api/chargers', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const charger = res.data.find(c => c.id == this.$route.params.id);
      if (charger) this.form = charger;
    }
  },
  methods: {
    async submit() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      if (this.isEdit) {
        await axios.put('/api/chargers/' + this.$route.params.id, this.form, config);
      } else {
        await axios.post('/api/chargers', this.form, config);
      }
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.charger-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
}

input,
select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  box-sizing: border-box;
  width: 100%;
}

select {
  background-color: white;
  color: #333;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button {
  padding: 0.6rem 1.2rem;
  background-color: #2e86de;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1b4f72;
}
</style>
