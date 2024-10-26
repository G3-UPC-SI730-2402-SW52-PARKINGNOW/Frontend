<template>
  <div class="vehicle-tracking-container">
    <header class="app-bar">
      <!-- Botón para cambiar idioma al inicio de la barra -->
      <button @click="toggleLanguage" class="language-button">
        {{ currentLanguage === 'en' ? 'ES' : 'EN' }}
      </button>

      <h1>{{ $t('VEHICLE_TRACKING.TITLE') }}</h1>

      <button @click="$router.push('/dashboard-driver')" class="back-button">
        {{ $t('VEHICLE_TRACKING.BACK_TO_HOME') }}
      </button>
    </header>

    <div class="content">
      <section class="left-section">
        <div class="card welcome-card">
          <h2>{{ $t('VEHICLE_TRACKING.WELCOME') }}</h2>
        </div>

        <div class="card tracking-card">
          <h3>{{ $t('VEHICLE_TRACKING.REGISTERED_CARS') }}</h3>
          <p>{{ $t('VEHICLE_TRACKING.REGISTERED_CARS_SUBTEXT') }}</p>
          <ul class="list">
            <li v-for="car in registeredCars" :key="car.id" class="list-item">
              <strong>{{ car.plate }}</strong>
              <span>{{ car.model }}</span>
            </li>
          </ul>
        </div>

        <div class="card tracking-card">
          <h3>{{ $t('VEHICLE_TRACKING.LATEST_ALERTS') }}</h3>
          <p>{{ $t('VEHICLE_TRACKING.LATEST_ALERTS_SUBTEXT') }}</p>
          <ul class="list">
            <li v-for="alert in latestAlerts" :key="alert.id" class="list-item">
              <strong>{{ alert.message }}</strong>
              <span>{{ alert.date }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="right-section">
        <div class="card sensor-card">
          <h3>{{ $t('VEHICLE_TRACKING.SENSOR_TITLE') }}</h3>
          <p>{{ $t('VEHICLE_TRACKING.SENSOR_DESCRIPTION') }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleTrackingDriver',
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      registeredCars: [
        { id: 1, plate: 'ABCD-1234', model: 'Toyota Corolla' },
        { id: 2, plate: 'EFGH-5678', model: 'Honda Civic' },
        { id: 3, plate: 'IJKL-9101', model: 'Ford Focus' }
      ],
      latestAlerts: [
        { id: 1, message: 'Sensor A activated', date: '2024-10-25' },
        { id: 2, message: 'Sensor B deactivated', date: '2024-10-24' }
      ]
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
      this.$i18n.locale = this.currentLanguage;
    }
  }
};
</script>

<style scoped>
.vehicle-tracking-container {
  padding: 20px;
}

.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00796b;
  color: white;
  padding: 10px 20px;
}

.app-bar h1 {
  margin: 0 auto;
  font-size: 1.5rem;
}

.language-button {
  background-color: #ff4081;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.language-button:hover {
  background-color: #f50057;
}

.back-button {
  background-color: #ff4081;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #f50057;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.left-section {
  flex: 2;
}

.right-section {
  flex: 1;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.welcome-card h2,
.tracking-card h3,
.sensor-card h3 {
  color: #004d40;
  font-weight: bold;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.list-item strong {
  font-weight: bold;
}

.list-item span {
  color: #555;
}

/* Responsividad */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .app-bar h1 {
    font-size: 1.2rem;
  }

  .language-button,
  .back-button {
    padding: 8px 10px;
  }
}
</style>
