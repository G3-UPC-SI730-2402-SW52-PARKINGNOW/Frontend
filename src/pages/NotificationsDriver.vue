<template>
  <v-container fluid class="notifications-container">
    <v-row>
      <v-col xs="12">
        <div class="notifications-header">
          <h1>{{ $t('NOTIFICATIONS.TITLE') }}</h1>
          <div class="language-switcher">
            <v-btn @click="changeLanguage('es')" class="lang-button">Español</v-btn>
            <v-btn @click="changeLanguage('en')" class="lang-button">Inglés</v-btn>
          </div>
          <v-btn
              class="back-button"
              color="accent"
              :to="{ name: 'DashboardDriver' }"
          >
            <v-icon left>arrow_back</v-icon>
            {{ $t('NOTIFICATIONS.BACK_TO_HOME') }}
          </v-btn>
        </div>
      </v-col>

      <v-col xs="12" md="6" class="notification-column">
        <div class="notification-section">
          <h2>{{ $t('NOTIFICATIONS.RECEIPTS') }}</h2>
          <ul class="recibos-list">
            <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_001') }}</li>
            <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_002') }}</li>
            <li>• {{ $t('NOTIFICATIONS.RECEIPT_LIST.RECIBO_003') }}</li>
          </ul>
        </div>
      </v-col>

      <v-col xs="12" md="6" class="notification-column">
        <div class="notification-section">
          <h2>{{ $t('NOTIFICATIONS.FAVORITE_PLACES') }}</h2>
          <ul class="lugares-favoritos-list">
            <li class="favorito-item">
              <v-checkbox
                  v-model="lugares[0].seleccionado"
                  @change="onFavoriteChange(0)"
              >
                {{ $t('NOTIFICATIONS.FAVORITE_PLACES_LIST.LUGAR_001') }}
              </v-checkbox>
            </li>
            <li class="favorito-item">
              <v-checkbox
                  v-model="lugares[1].seleccionado"
                  @change="onFavoriteChange(1)"
              >
                {{ $t('NOTIFICATIONS.FAVORITE_PLACES_LIST.LUGAR_002') }}
              </v-checkbox>
            </li>
            <li class="favorito-item">
              <v-checkbox
                  v-model="lugares[2].seleccionado"
                  @change="onFavoriteChange(2)"
              >
                {{ $t('NOTIFICATIONS.FAVORITE_PLACES_LIST.LUGAR_003') }}
              </v-checkbox>
            </li>
          </ul>
        </div>
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
      this.$i18n.locale = lang; // Cambia el idioma
    },
  },
};
</script>

<style scoped>
.notifications-header {
  display: flex;
  flex-direction: column; /* Cambio a columna para pantallas pequeñas */
  align-items: flex-start;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.notifications-header h1 {
  font-size: 2rem; /* Ajuste del tamaño del texto */
  font-weight: 700;
  color: #1b5e20; /* Color verde oscuro */
  margin: 0;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: #ff7043;
  color: white;
  font-weight: 600;
  border-radius: 25px;
  margin-top: 10px; /* Espaciado superior */
}

.language-switcher {
  display: flex;
  gap: 10px; /* Espacio entre los botones de idioma */
  margin-top: 10px; /* Espaciado superior */
}

.notifications-container {
  padding: 20px;
}

.notification-column {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Centra verticalmente el contenido */
  text-align: center; /* Centra horizontalmente el contenido */
  margin-bottom: 20px; /* Espaciado inferior para separar columnas */
}

.notification-section {
  background-color: #e8f5e9; /* Fondo verde claro */
  color: #1b5e20; /* Texto en verde oscuro */
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
}

.notification-section h2 {
  font-size: 1.5rem; /* Ajuste del tamaño del texto */
  font-weight: 600;
  color: #1b5e20;
  margin-bottom: 15px;
}

.recibos-list,
.lugares-favoritos-list {
  list-style: none;
  padding: 0;
}

.recibos-list li,
.lugares-favoritos-list li {
  margin-bottom: 12px;
  font-size: 1rem; /* Ajuste del tamaño del texto */
  line-height: 1.5;
  color: #1b5e20;
}

.lugares-favoritos-list {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los ítems horizontalmente */
}

.favorito-item {
  text-align: left; /* Alinear el texto a la izquierda para los lugares favoritos */
}

mat-checkbox {
  color: #1b5e20;
}

@media (min-width: 768px) {
  .notifications-header {
    flex-direction: row; /* Cambio a fila para pantallas grandes */
    justify-content: space-between; /* Espaciado entre los elementos */
  }
  .notifications-header h1 {
    font-size: 2.5rem; /* Tamaño del texto para pantallas grandes */
  }
  .notification-section h2 {
    font-size: 1.8rem; /* Tamaño del texto para pantallas grandes */
  }
  .recibos-list li,
  .lugares-favoritos-list li {
    font-size: 1.2rem; /* Tamaño del texto para pantallas grandes */
  }
}
</style>
