<template>
  <div class="local-records-container">
    <!-- Botones para cambiar de idioma -->
    <div class="language-switcher">
      <button @click="changeLanguage('es')" class="language-button">Español</button>
      <button @click="changeLanguage('en')" class="language-button">English</button>
    </div>

    <!-- Botón de Inicio -->
    <button class="back-button" @click="goBack">
      {{ $t('LOCAL_RECORDS.BACK_TO_HOME') }}
    </button>

    <div class="header-card">
      <h1>{{ $t('LOCAL_RECORDS.WELCOME') }}</h1>
      <p>{{ $t('LOCAL_RECORDS.MANAGE_RECORDS') }}</p>
    </div>

    <div class="cards-section">
      <div class="card animate-card">
        <h2>{{ $t('LOCAL_RECORDS.TITLE') }}</h2>
        <p>{{ $t('LOCAL_RECORDS.RECORDS') }}</p>
      </div>

      <div class="card animate-card">
        <h2>{{ $t('LOCAL_RECORDS.STATISTICS') }}</h2>
        <p>{{ $t('LOCAL_RECORDS.STATISTICS_DESC') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalRecords',
  methods: {
    goBack() {
      this.$router.push('/dashboard-owner'); // Redirige al dashboard
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  }
};
</script>

<style scoped>
/* Fondo blanco y estructura */
.local-records-container {
  background-color: #f9f9f9;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

/* Botones de idioma */
.language-switcher {
  margin-bottom: 20px;
}

.language-button {
  border: 2px solid #007bff; /* Borde azul */
  background-color: white;
  color: #007bff;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.language-button:hover {
  background-color: #007bff;
  color: white;
}

/* Botón de Inicio */
.back-button {
  align-self: flex-start;
  margin-bottom: 20px;
  border: 2px solid #007bff; /* Borde azul */
  background-color: white;
  color: #007bff;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #007bff;
  color: white;
}

/* Header principal con animación */
.header-card {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #000;
  transition: transform 0.3s ease-in-out; /* Animación suave */
}

.header-card:hover {
  transform: scale(1.05); /* Aumenta el tamaño en hover */
}

/* Sección de tarjetas */
.cards-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

/* Tarjetas con bordes negros y colores */
.card {
  background-color: #ffffff;
  color: #333;
  padding: 20px;
  flex: 1;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #000;
  margin: 0 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h2 {
  margin-bottom: 15px;
  font-size: 1.4em;
  color: #007bff; /* Azul para destacar */
}

.card p {
  font-size: 1.1em;
}

/* Animación suave en las tarjetas */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  background-color: #f0f8ff; /* Suave cambio de color al hover */
}

@media (max-width: 768px) {
  .cards-section {
    flex-direction: column;
  }

  .card {
    margin: 0 0 20px 0;
  }
}
</style>
