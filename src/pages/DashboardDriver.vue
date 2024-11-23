<template>
  <v-container fluid class="dashboard-container">
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" class="sidebar">
        <v-img
            src="public/images/parkingnow.png"
            alt="Logo de ParkingNow"
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
                    ripple
                >
                  {{ $t(item.title) }}
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!-- Language Switcher -->
        <div class="language-switcher">
          <v-btn @click="changeLanguage('es')" class="language-btn">Español</v-btn>
          <v-btn @click="changeLanguage('en')" class="language-btn">Inglés</v-btn>
        </div>
      </v-col>

      <!-- Main Content -->
      <v-col cols="12" md="9" class="content">
        <v-card elevation="2" class="main-card">
          <v-card-title>
            <h1>{{ $t('DASHBOARD_DRIVER.WELCOME') }}</h1>
          </v-card-title>

          <v-card-text>
            <v-row>
              <!-- Favorite Places Card -->
              <v-col cols="12" md="6">
                <v-card class="info-card" elevation="3">
                  <v-card-title>
                    <h2>{{ $t('DASHBOARD_DRIVER.FAVORITE_PLACES') }}</h2>
                  </v-card-title>
                  <v-card-text>
                    {{ $t('DASHBOARD_DRIVER.FAVORITE_PLACES_DESC') }}
                  </v-card-text>
                </v-card>
              </v-col>

              <!-- Weekly Offers Card -->
              <v-col cols="12" md="6">
                <v-card class="info-card" elevation="3">
                  <v-card-title>
                    <h2>{{ $t('DASHBOARD_DRIVER.WEEKLY_OFFERS') }}</h2>
                  </v-card-title>
                  <v-card-text>
                    {{ $t('DASHBOARD_DRIVER.WEEKLY_OFFERS_DESC') }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <!-- Sección del Mapa en el Dashboard con Google Maps -->
            <h2 class="reserve-title">{{ $t('DASHBOARD_DRIVER.RESERVE_NOW') }}</h2>
            <v-card class="map-card" elevation="2">
              <!-- Div para el mapa embebido de Google Maps -->
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065927.627304934!2d-80.31448045081555!3d-9.204770971501427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses-419!2spe!4v1730833160499!5m2!1ses-419!2spe"
                  width="100%"
                  height="400"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </v-card>
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
        { title: 'SIDEBAR.NOTIFICATIONS', route: '/notifications-driver' },
        { title: 'SIDEBAR.LOGOUT', route: '/login' },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  }
};
</script>

<style scoped>
.dashboard-container {
  padding: 0;
}

.sidebar {
  background-color: #2E3440;
  color: #D8DEE9;
  padding: 20px;
  min-height: 100vh;
  border-right: 1px solid #3B4252;
}

.logo {
  margin-bottom: 20px;
  max-width: 100%;
}

.menu-item {
  color: #D8DEE9;
  width: 100%;
  justify-content: flex-start;
  font-weight: bold;
  transition: background-color 0.3s;
}
.menu-item:hover {
  background-color: #4C566A;
  border-radius: 8px;
}

.language-switcher {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.language-btn {
  color: #88C0D0;
  font-weight: bold;
  text-transform: uppercase;
}

.content {
  padding: 20px;
}

.main-card {
  background-color: #ECEFF4;
  padding: 20px;
  border-radius: 16px;
}

.info-card {
  padding: 20px;
  border-radius: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #D8DEE9;
}
.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.reserve-title {
  font-weight: bold;
  margin-top: 20px;
}

.map-card {
  overflow: hidden;
  border-radius: 16px;
  background-color: #D8DEE9;
}
</style>
