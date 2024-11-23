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
            <li class="list-item">
              <strong>{{ $t('VEHICLE_TRACKING.ALERT_1') }}</strong>
              <span>{{ $t('VEHICLE_TRACKING.ALERT_1_DATE') }}</span>
            </li>
            <li class="list-item">
              <strong>{{ $t('VEHICLE_TRACKING.ALERT_2') }}</strong>
              <span>{{ $t('VEHICLE_TRACKING.ALERT_2_DATE') }}</span>
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
  background-color: #f8fafc;
}

.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e88e5;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.app-bar h1 {
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
}

.language-button,
.back-button {
  background-color: #ff5252;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.language-button:hover,
.back-button:hover {
  background-color: #e53935;
  box-shadow: 0px 4px 12px rgba(229, 57, 53, 0.3);
}

.content {
  display: flex;
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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.welcome-card h2,
.tracking-card h3,
.sensor-card h3 {
  color: #1565c0;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item strong {
  font-weight: bold;
  color: #333;
}

.list-item span {
  color: #666;
  font-style: italic;
}

/* Responsividad */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .app-bar h1 {
    font-size: 1.4rem;
  }

  .language-button,
  .back-button {
    padding: 8px 10px;
  }
}
</style>
