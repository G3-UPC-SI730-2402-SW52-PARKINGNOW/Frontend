<template>
  <div class="dashboard-owner-container">
    <aside class="sidebar">
      <img src="/images/parkingnow.png" alt="ParkingNow Logo" class="logo" />
      <nav class="menu">
        <div
            class="menu-item"
            v-for="item in menuItems"
            :key="item.text"
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
      <div class="welcome">
        <h1>{{ $t('DASHBOARD_OWNER.WELCOME') }}</h1>
      </div>

      <!-- Sección de Reservas para hoy -->
      <section class="reservations-section">
        <div class="card">
          <h2>{{ $t('DASHBOARD_OWNER.TODAY_RESERVATIONS') }}</h2>
          <p>{{ $t('DASHBOARD_OWNER.SCHEDULED_RESERVATIONS') }}</p>
        </div>
      </section>

      <!-- Sección de Espacios -->
      <section class="spaces-section">
        <div class="card">
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
        { text: this.$t('SIDEBAR.HOME'), route: '/dashboard-owner' },
        { text: this.$t('SIDEBAR.RESERVATIONS'), route: '/local-records' },
        { text: this.$t('SIDEBAR.RESERVATIONS'), route: '/owner-reservations' },
        { text: this.$t('SIDEBAR.TRACKING_AND_ALARMS'), route: '/owner-security' },
        { text: this.$t('SIDEBAR.SETTINGS'), route: '/owner-configuration' },
        { text: this.$t('SIDEBAR.LOGOUT'), route: '/login' },
      ],
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  }
};
</script>

<style scoped>
.dashboard-owner-container {
  display: flex;
  height: 100vh;
  background-color: #f5f7fa; /* Fondo suave para el contenido */
}

.sidebar {
  width: 250px;
  background-color: #2c3e50; /* Color oscuro elegante */
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
  color: white;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #1abc9c; /* Efecto hover con color de contraste */
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
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 40px;
  background-color: #f5f7fa; /* Fondo claro */
}

.welcome h1 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 40px;
}

/* Secciones de reservas y espacios */
.reservations-section,
.spaces-section {
  margin-bottom: 30px;
}

/* Cards mejoradas */
.card {
  background-color: #34495e; /* Fondo oscuro para las tarjetas */
  color: white;
  padding: 25px;
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra */
}

.card h2 {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 700;
}

.card p {
  font-size: 16px;
  color: #bdc3c7; /* Texto gris claro */
}

/* Responsividad para pantallas más pequeñas */
@media (max-width: 768px) {
  .dashboard-owner-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    padding: 20px;
  }
}
</style>
