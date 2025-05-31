<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h2>Chargers</h2>
      <button class="logout-btn" @click="logout">Logout</button>
    </header>

    <button class="add-btn" @click="$router.push('/charger')">Add New Charger</button>

    <div class="charger-list">
      <div v-for="c in chargers" :key="c.id" class="charger-item">
        <div class="charger-info">
          <b>{{ c.name }}</b> ({{ c.status }})<br />
          Power: {{ c.power_output }} kW<br />
          Connector: {{ c.connector_type }}
        </div>
        <div class="charger-actions">
          <button @click="$router.push('/charger/' + c.id)" class="edit-btn">Edit</button>
          <button @click="delCharger(c.id)" class="delete-btn">Delete</button>
        </div>
      </div>
    </div>

    <MapView :chargers="chargers" />
  </div>
</template>

<script>
import axios from 'axios';
import MapView from '../components/MapView.vue';

export default {
  components: { MapView },
  data() {
    return { chargers: [] };
  },
  async mounted() {
    const res = await axios.get('/api/chargers', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    this.chargers = res.data;
  },
  methods: {
    async delCharger(id) {
      await axios.delete('/api/chargers/' + id, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      this.chargers = this.chargers.filter(c => c.id !== id);
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.dashboard-header h2 {
  margin: 0;
}

.logout-btn {
  display: inline-block; /* prevent stretching */
  width: auto;
  padding: 0.4rem 0.7rem;
  background-color: #dc3545;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s;
  min-width: 70px;
  text-align: center;
}

.logout-btn:hover {
  background-color: #a71d2a;
}


.add-btn {
  background-color: #2e86de;
  border: none;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background-color 0.2s;
}

.add-btn:hover {
  background-color: #1b4f72;
}

.charger-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.charger-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fafafa;
  transition: box-shadow 0.2s;
}

.charger-item:hover {
  box-shadow: 0 2px 6px rgba(46, 134, 222, 0.2);
}

.charger-info {
  font-size: 1rem;
  color: #333;
}

.charger-actions button {
  margin-left: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
}

.edit-btn {
  background-color: #2980b9;
  color: white;
}

.edit-btn:hover {
  background-color: #1c5980;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

.delete-btn:hover {
  background-color: #b03026;
}
</style>
