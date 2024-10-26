<template>
  <v-container fluid class="reservations-container">
    <v-card class="reservation-card">
      <v-card-title>
        <h2>{{ $t('RESERVATIONS.TITLE') }}</h2>
        <v-spacer></v-spacer>
        <div class="language-switcher">
          <v-btn @click="changeLanguage('es')">Español</v-btn>
          <v-btn @click="changeLanguage('en')">Inglés</v-btn>
        </div>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
              v-model="reservationForm.vehicleRegistration"
              :label="$t('RESERVATIONS.VEHICLE_REGISTRATION_LABEL')"
              :placeholder="$t('RESERVATIONS.VEHICLE_REGISTRATION_PLACEHOLDER')"
              :rules="[rules.required]"
          ></v-text-field>

          <v-select
              v-model="reservationForm.typeOfVehicle"
              :label="$t('RESERVATIONS.VEHICLE_TYPE_LABEL')"
              :items="vehicleTypeOptions"
              item-text="label"
              item-value="value"
              :rules="[rules.required]"
          >
          </v-select>

          <v-text-field
              v-model="reservationForm.reservationTime"
              :label="$t('RESERVATIONS.RESERVATION_TIME_LABEL')"
              type="datetime-local"
              :rules="[rules.required]"
          ></v-text-field>

          <div class="action-buttons">
            <v-btn color="primary" type="submit">
              {{ $t('RESERVATIONS.RESERVE_BUTTON') }}
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card class="reservation-list">
      <v-card-title>
        <h3>{{ $t('RESERVATIONS.CURRENT_RESERVATIONS_TITLE') }}</h3>
      </v-card-title>

      <v-data-table
          :headers="tableHeaders"
          :items="parkingReservations"
          class="mat-elevation-z8 full-width"
          v-if="parkingReservations.length > 0"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon @click="deleteReservation(item.id)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <v-alert v-else type="info" dismissible>
        {{ $t('RESERVATIONS.NO_CURRENT_RESERVATIONS') }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ReservationDriver',
  data() {
    return {
      reservationForm: {
        vehicleRegistration: '',
        typeOfVehicle: '',
        reservationTime: '',
      },
      // Asegúrate de que las opciones estén bien definidas
      vehicleTypeOptions: [
        { value: 'Motorcycle', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.MOTORCYCLE') },
        { value: 'Truck', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.TRUCK') },
        { value: 'Car', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.CAR') },
      ],
      rules: {
        required: value => !!value || 'Este campo es requerido.',
      },
      parkingReservations: [], // Aquí almacenamos las reservas
      tableHeaders: [
        { text: 'ID', value: 'id' }, // Encabezado de ID
        { text: 'Matrícula', value: 'vehicleRegistration' }, // Encabezado de Matrícula
        { text: 'Tipo', value: 'typeOfVehicle' }, // Encabezado de Tipo
        { text: 'Hora', value: 'reservationTime' }, // Encabezado de Hora
        { text: 'Acción', value: 'actions', sortable: false }, // Encabezado de Acción
      ],
    };
  },
  methods: {
    onSubmit() {
      // Añadir la nueva reserva a la lista
      const newReservation = {
        id: this.parkingReservations.length + 1, // Genera un ID simple
        vehicleRegistration: this.reservationForm.vehicleRegistration,
        typeOfVehicle: this.reservationForm.typeOfVehicle,
        reservationTime: this.reservationForm.reservationTime,
      };
      this.parkingReservations.push(newReservation); // Agregar la reserva
      this.resetForm(); // Resetear el formulario
    },
    resetForm() {
      // Resetear el formulario
      this.reservationForm = {
        vehicleRegistration: '',
        typeOfVehicle: '',
        reservationTime: '',
      };
    },
    deleteReservation(id) {
      // Lógica para eliminar la reserva
      this.parkingReservations = this.parkingReservations.filter(reservation => reservation.id !== id);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambiar idioma
    },
  },
};
</script>

<style scoped>
.reservations-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.reservation-card {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.full-width {
  width: 100%;
}

h2, h3 {
  text-align: center;
  color: #3f51b5; /* Color principal */
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.language-switcher {
  display: flex;
  gap: 10px; /* Espacio entre botones */
}

.mat-elevation-z8 {
  border-radius: 8px;
}
</style>
