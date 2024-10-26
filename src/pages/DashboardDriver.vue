<template>
  <v-container fluid class="dashboard-container">
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" class="sidebar">
        <v-img
            src="public/images/parkingnow.png"
            alt="ParkingNow Logo"
            class="logo"
            contain
        ></v-img>
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="item in menuItems" :key="item.title">
              <v-list-item-action>
                <v-btn
                    text
                    :to="item.route"
                    class="menu-item"
                >
                  {{ $t(item.title) }}
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!-- Language Switcher -->
        <div class="language-switcher">
          <v-btn @click="changeLanguage('es')">Español</v-btn>
          <v-btn @click="changeLanguage('en')">Inglés</v-btn>
        </div>
      </v-col>

      <!-- Main Content -->
      <v-col cols="12" md="9" class="content">
        <v-card>
          <v-card-title>
            <h1>{{ $t('DASHBOARD.WELCOME') }}</h1>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <v-card-title>
                    <h2>{{ $t('DASHBOARD.FAVORITE_PLACES') }}</h2>
                  </v-card-title>
                  <v-card-text>
                    {{ $t('DASHBOARD.FAVORITE_PLACES_DESC') }}
                  </v-card-text>
                </v-card>
                <!-- GIF Card for Favorite Places -->
                <v-card class="gif-card">
                  <v-card-title></v-card-title>
                  <v-card-text>
                    <v-img src="path_to_your_favorite_gif.gif" alt="GIF" contain></v-img>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card>
                  <v-card-title>
                    <h2>{{ $t('DASHBOARD.WEEKLY_OFFERS') }}</h2>
                  </v-card-title>
                  <v-card-text>
                    {{ $t('DASHBOARD.WEEKLY_OFFERS_DESC') }}
                  </v-card-text>
                </v-card>
                <!-- GIF Card for Weekly Offers -->
                <v-card class="gif-card">
                  <v-card-title></v-card-title>
                  <v-card-text>
                    <v-img src="path_to_your_weekly_offer_gif.gif" alt="GIF" contain></v-img>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <h2>{{ $t('DASHBOARD.RESERVE_NOW') }}</h2>
            <div id="map" style="height: 400px;"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      menuItems: [
        { title: 'SIDEBAR.HOME', route: '/dashboard-driver' },
        { title: 'SIDEBAR.RESERVATIONS', route: '/reservations-driver' },
        { title: 'SIDEBAR.SUPPORT', route: '/support-driver' },
        { title: 'SIDEBAR.TRACKING_AND_ALARMS', route: '/vehicle-tracking-driver' },
        { title: 'SIDEBAR.SETTINGS', route: '/configuration-driver' },
        { title: 'SIDEBAR.NOTIFICATIONS', route: '/notifications-driver' }, // Corregida a la ruta correcta
        { title: 'SIDEBAR.LOGOUT', route: '/login' },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 0;
}

.sidebar {
  background-color: #f5f5f5; /* Fondo claro para la barra lateral */
  border-right: 1px solid #e0e0e0; /* Línea divisoria */
}

.logo {
  margin-bottom: 20px;
  max-width: 100%; /* Asegura que el logo sea responsivo */
}

.menu-item {
  width: 100%; /* Botones ocupan el 100% del ancho */
  justify-content: flex-start; /* Alinear texto a la izquierda */
}

.content {
  padding: 20px;
}

.language-switcher {
  margin-top: 20px; /* Espaciado para los botones de cambio de idioma */
  display: flex;
  justify-content: space-between; /* Espacio entre los botones */
}

.gif-card {
  margin-top: 20px; /* Espaciado para la tarjeta de GIF */
}
</style>
