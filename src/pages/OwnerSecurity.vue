<template>
  <div class="owner-security-container">
    <!-- Botón para cambiar de idioma -->
    <div class="language-switcher">
      <v-btn @click="switchLanguage('en')" color="primary">English</v-btn>
      <v-btn @click="switchLanguage('es')" color="primary">Español</v-btn>
    </div>

    <!-- Botón para ir al inicio -->
    <div class="back-to-home">
      <v-btn color="primary" to="/dashboard-owner">
        {{ $t('OWNER_SECURITY.BACK_TO_HOME') }}
      </v-btn>
    </div>

    <!-- Tarjeta de encabezado -->
    <v-card class="header-card">
      <h1 class="title">{{ $t('OWNER_SECURITY.TITLE') }}</h1>
      <p class="description">{{ $t('OWNER_SECURITY.DESCRIPTION') }}</p>
    </v-card>

    <!-- Sección de vehículos registrados -->
    <div class="vehicles-section">
      <v-card class="vehicles-card">
        <h2>{{ $t('OWNER_SECURITY.REGISTERED_VEHICLES') }}</h2>
        <v-simple-table>
          <thead>
          <tr>
            <th>{{ $t('OWNER_SECURITY.TABLE_HEADERS.PLATE') }}</th>
            <th>{{ $t('OWNER_SECURITY.TABLE_HEADERS.MODEL') }}</th>
            <th>{{ $t('OWNER_SECURITY.TABLE_HEADERS.OWNER') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="vehicle in vehicles" :key="vehicle.plate">
            <td>{{ vehicle.plate }}</td>
            <td>{{ vehicle.model }}</td>
            <td>{{ vehicle.owner }}</td>
          </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </div>

    <!-- Sección de alertas -->
    <div class="alerts-section">
      <v-card class="alerts-card">
        <h2>{{ $t('OWNER_SECURITY.ALERTS.TITLE') }}</h2>
        <v-list>
          <v-list-item v-for="alert in alerts" :key="alert.id" class="alert-item">
            <v-list-item-icon>
              <v-icon color="warning">mdi-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="alert-title">
                {{ alert.date | formatDate }} - {{ alert.type | translate }}
              </v-list-item-title>
              <v-list-item-subtitle class="alert-description">
                {{ alert.description | translate }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnerSecurity',
  data() {
    return {
      vehicles: [], // Rellena esta lista con los datos de vehículos
      alerts: [], // Rellena esta lista con los datos de alertas
    };
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma de la aplicación
    }
  },
  filters: {
    formatDate(value) {
      const date = new Date(value);
      return date.toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.owner-security-container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.language-switcher {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.back-to-home {
  margin-bottom: 20px;
}

.header-card {
  text-align: center;
  padding: 30px;
  background-color: #f5f5f5;
  border: 1px solid black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.description {
  font-size: 1.2rem;
  color: #666;
}

.vehicles-card,
.alerts-card {
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vehicles-card:hover,
.alerts-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.alert-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.alert-item:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.alert-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.alert-description {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .vehicles-card,
  .alerts-card {
    margin-bottom: 10px;
    padding: 15px;
  }

  .header-card {
    text-align: left;
  }

  .title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
