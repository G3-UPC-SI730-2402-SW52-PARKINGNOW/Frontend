<template>
  <v-container fluid class="notifications-container">
    <v-row justify="center">
      <v-col xs="12" md="8">
        <v-card class="notifications-header-card" elevation="4">
          <v-card-title class="d-flex justify-space-between align-center">
            <h1 class="notifications-title">{{ $t('NOTIFICATIONS.TITLE') }}</h1>
            <div class="language-switcher">
              <v-btn @click="changeLanguage('es')" color="primary" outlined class="lang-button">Español</v-btn>
              <v-btn @click="changeLanguage('en')" color="primary" outlined class="lang-button">Inglés</v-btn>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn class="back-button" color="accent" :to="{ name: 'DashboardDriver' }">
              <v-icon left>mdi-arrow-left</v-icon>
              {{ $t('NOTIFICATIONS.BACK_TO_HOME') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" md="5" class="notification-column">
        <v-card class="notification-card" elevation="2">
          <v-card-title class="card-title">
            <v-icon left>mdi-receipt</v-icon>
            <h2>{{ $t('NOTIFICATIONS.RECEIPTS') }}</h2>
          </v-card-title>
          <v-card-text class="text-center"> <!-- Centra el contenido -->
            <ul class="recibos-list">
              <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_001') }}</li>
              <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_002') }}</li>
              <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_003') }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" md="5" class="notification-column">
        <v-card class="notification-card" elevation="2">
          <v-card-title class="card-title">
            <v-icon left>mdi-heart</v-icon>
            <h2>{{ $t('NOTIFICATIONS.FAVORITE_PLACES') }}</h2>
          </v-card-title>
          <v-card-text class="text-center"> <!-- Centra el contenido -->
            <ul class="lugares-favoritos-list">
              <li class="favorito-item" v-for="(lugar, index) in lugares" :key="index">
                <v-checkbox v-model="lugar.seleccionado" @change="onFavoriteChange(index)">
                  {{ $t(`NOTIFICATIONS.FAVORITE_PLACES_LIST.LUGAR_00${index + 1}`) }}
                </v-checkbox>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lugares: [
        { seleccionado: false },
        { seleccionado: false },
        { seleccionado: false },
      ],
    };
  },
  methods: {
    onFavoriteChange(index) {
      console.log(`Lugar ${index + 1} seleccionado: ${this.lugares[index].seleccionado}`);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.notifications-container {
  padding: 30px;
  background-color: #f4f6f8;
}

.notifications-header-card {
  background-color: #2E3440;
  color: #ECEFF4;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.notifications-title {
  font-size: 2rem;
  font-weight: bold;
}

.language-switcher {
  display: flex;
  gap: 10px;
}

.back-button {
  background-color: #ff7043;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 10px;
}

.notification-column {
  display: flex;
  justify-content: center;
}

.notification-card {
  background-color: #e8f5e9;
  color: #1b5e20;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center; /* Centra todo el contenido de la tarjeta */
  transition: transform 0.3s;
}
.notification-card:hover {
  transform: translateY(-4px);
}

.card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center; /* Centra el título */
}

.recibos-list,
.lugares-favoritos-list {
  list-style: none;
  padding: 0;
}

.recibos-list li,
.lugares-favoritos-list li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1b5e20;
}

.favorito-item {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra los checkboxes */
}

@media (min-width: 768px) {
  .notifications-header-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .notifications-title {
    font-size: 2.5rem;
  }
}
</style>
