<template>
  <div class="dashboard-owner-container">
    <aside class="sidebar">
      <img src="/images/parkingnow.png" alt="ParkingNow Logo" class="logo" />
      <nav class="menu">
        <div
            class="menu-item"
            v-for="item in menuItems"
            :key="item.route"
            @click="navigate(item.route)"
        >
          {{ item.text }}
        </div>
      </nav>
      <div class="language-switcher">
        <button @click="changeLanguage('es')" class="language-button">ES</button>
        <button @click="changeLanguage('en')" class="language-button">EN</button>
      </div>
    </aside>

    <main class="content">
      <div class="card welcome-card">
        <h1>{{ $t('DASHBOARD_OWNER.WELCOME') }}</h1>
      </div>

      <!-- Today's Reservations Section -->
      <section class="reservations-section">
        <div class="card reservations-card">
          <h2>{{ $t('DASHBOARD_OWNER.TODAY_RESERVATIONS') }}</h2>
          <p>{{ $t('DASHBOARD_OWNER.SCHEDULED_RESERVATIONS') }}</p>
        </div>
      </section>

      <!-- Spaces Section -->
      <section class="spaces-section">
        <div class="card spaces-card">
          <h2>{{ $t('DASHBOARD_OWNER.SPACES') }}</h2>
          <p>{{ $t('DASHBOARD_OWNER.SPACES_DESC') }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardOwner',
  data() {
    return {
      menuItems: [
        { text: this.$t('DASHBOARD_OWNER.HOME'), route: '/dashboard-owner' },
        { text: this.$t('DASHBOARD_OWNER.RESERVATIONS'), route: '/local-records' },
        { text: this.$t('DASHBOARD_OWNER.RESERVATIONS'), route: '/owner-reservations' }, // Se usa la misma clave para evitar duplicados
        { text: this.$t('DASHBOARD_OWNER.TRACKING_AND_ALARMS'), route: '/owner-security' },
        { text: this.$t('DASHBOARD_OWNER.SETTINGS'), route: '/owner-configuration' },
        { text: this.$t('DASHBOARD_OWNER.LOGOUT'), route: '/login' },
      ],
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
      this.updateMenuItems(); // Actualiza los textos del menú
    },
    updateMenuItems() {
      this.menuItems = [
        { text: this.$t('DASHBOARD_OWNER.HOME'), route: '/dashboard-owner' },
        { text: this.$t('DASHBOARD_OWNER.RESERVATIONS'), route: '/local-records' },
        { text: this.$t('DASHBOARD_OWNER.RESERVATIONS'), route: '/owner-reservations' }, // Asegúrate de que esta clave sea correcta
        { text: this.$t('DASHBOARD_OWNER.TRACKING_AND_ALARMS'), route: '/owner-security' },
        { text: this.$t('DASHBOARD_OWNER.SETTINGS'), route: '/owner-configuration' },
        { text: this.$t('DASHBOARD_OWNER.LOGOUT'), route: '/login' },
      ];
    }
  },
  mounted() {
    this.updateMenuItems(); // Inicializa los textos del menú
  }
};
</script>

<style scoped>
.dashboard-owner-container {
  display: flex;
  height: 100vh;
  background-color: #e9ecef;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo {
  max-width: 130px;
  margin-bottom: 40px;
}

.menu {
  width: 100%;
}

.menu-item {
  padding: 15px;
  margin-bottom: 15px;
  color: #ecf0f1;
  text-align: center;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-weight: bold;
}

.menu-item:hover {
  background-color: #3498db;
}

.language-switcher {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}

.language-button {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;
}

.language-button:hover {
  color: #3498db;
}

.content {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background-color: #34495e;
  color: #ecf0f1;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.welcome-card h1 {
  font-size: 28px;
  color: #ecf0f1;
  text-align: center;
}

.reservations-card h2,
.spaces-card h2 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1abc9c;
}

.reservations-card p,
.spaces-card p {
  font-size: 16px;
  color: #bdc3c7;
}

/* Responsive for smaller screens */
@media (max-width: 768px) {
  .dashboard-owner-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 10px;
  }

  .content {
    padding: 20px;
  }
}
</style>
