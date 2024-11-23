<template>
  <div class="owner-reservations-container">
    <!-- Botón para cambiar de idioma -->
    <div class="language-switcher">
      <v-btn @click="switchLanguage('es')" class="language-button">Español</v-btn>
      <v-btn @click="switchLanguage('en')" class="language-button">English</v-btn>
    </div>

    <!-- Botón para ir al inicio -->
    <div class="back-to-home">
      <v-btn color="primary" class="back-button" @click="goBack">
        {{ $t('OWNER_RESERVATIONS.BACK_TO_HOME') }}
      </v-btn>
    </div>

    <v-card class="header-card">
      <h1>{{ $t('OWNER_RESERVATIONS.TITLE') }}</h1>
      <p>{{ $t('OWNER_RESERVATIONS.DESCRIPTION') }}</p>
    </v-card>

    <!-- Sección de filtros de búsqueda -->
    <div class="filter-section">
      <v-text-field
          class="filter-field"
          v-model="filter.id"
          :label="$t('OWNER_RESERVATIONS.FILTER.RESERVATION_ID')"
          placeholder="ID de Reserva"
          outlined
      ></v-text-field>

      <v-menu
          v-model="datePicker"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              class="filter-field"
              v-bind="attrs"
              v-on="on"
              :label="$t('OWNER_RESERVATIONS.FILTER.RESERVATION_DATE')"
              placeholder="Fecha de Reserva"
              readonly
              outlined
          ></v-text-field>
        </template>
        <v-date-picker v-model="filter.date" @change="datePicker = false"></v-date-picker>
      </v-menu>

      <v-text-field
          class="filter-field"
          v-model="filter.user"
          :label="$t('OWNER_RESERVATIONS.FILTER.USER')"
          placeholder="Usuario"
          outlined
      ></v-text-field>

      <v-btn color="primary" @click="applyFilter" class="apply-filter-button">
        {{ $t('OWNER_RESERVATIONS.FILTER.APPLY_FILTER') }}
      </v-btn>
    </div>

    <!-- Tabla de Reservas -->
    <div class="reservations-table-section">
      <v-card class="reservations-card">
        <h2>{{ $t('OWNER_RESERVATIONS.RESERVATIONS_LIST') }}</h2>
        <v-data-table
            :headers="headers"
            :items="filteredReservations"
            class="mat-elevation-z8"
            :items-per-page="5"
        >
          <template v-slot:item.action="{ item }">
            <v-btn color="error" @click="cancelReservation(item.id)">
              {{ $t('OWNER_RESERVATIONS.CANCEL') }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnerReservations',
  data() {
    return {
      filter: {
        id: '',
        date: '',
        user: ''
      },
      datePicker: false,
      headers: [
        { text: this.$t('OWNER_RESERVATIONS.TABLE_HEADERS.ID'), value: 'id' },
        { text: this.$t('OWNER_RESERVATIONS.TABLE_HEADERS.USER'), value: 'user' },
        { text: this.$t('OWNER_RESERVATIONS.TABLE_HEADERS.DATE'), value: 'date' },
        { text: this.$t('OWNER_RESERVATIONS.TABLE_HEADERS.ACTION'), value: 'action' }
      ],
      filteredReservations: [] // Asegúrate de llenar esta lista con tus datos
    };
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    },
    goBack() {
      this.$router.push('/dashboard-owner'); // Redirige al dashboard
    },
    applyFilter() {
      // Implementar lógica de filtrado aquí
    },
    cancelReservation(id) {
      // Implementar lógica de cancelación de reserva aquí
    }
  }
};
</script>

<style scoped>
.owner-reservations-container {
  padding: 20px;
  background-color: #f9f9f9; /* Fondo claro para contraste */
  border-radius: 8px; /* Esquinas redondeadas */
}

.language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.language-button {
  margin-left: 10px;
}

.back-to-home {
  text-align: right;
  margin-bottom: 15px;
}

.header-card {
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.filter-section {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.filter-field {
  flex: 1 1 200px;
  min-width: 150px;
}

.reservations-card {
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.apply-filter-button {
  margin-top: 20px;
}

.mat-table {
  width: 100%;
}

.mat-header-cell,
.mat-cell {
  padding: 10px;
}
</style>
