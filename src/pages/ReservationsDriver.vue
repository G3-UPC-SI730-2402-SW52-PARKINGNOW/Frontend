<template>
  <v-container fluid class="reservations-container">
    <!-- Reservation Card -->
    <v-card class="reservation-card" elevation="3">
      <v-card-title class="d-flex align-center flex-column">
        <h2>{{ $t('RESERVATIONS.TITLE') }}</h2>

        <!-- Language Switcher Buttons -->
        <div class="language-switcher mt-2">
          <v-btn @click="changeLanguage('es')" class="language-btn" outlined>{{ $t('LANGUAGE.SPANISH') }}</v-btn>
          <v-btn @click="changeLanguage('en')" class="language-btn" outlined>{{ $t('LANGUAGE.ENGLISH') }}</v-btn>
        </div>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
              v-model="reservationForm.vehicleRegistration"
              :label="$t('RESERVATIONS.VEHICLE_REGISTRATION_LABEL')"
              :placeholder="$t('RESERVATIONS.VEHICLE_REGISTRATION_PLACEHOLDER')"
              :rules="[rules.required]"
              outlined
              class="mb-4"
          ></v-text-field>

          <v-select
              v-model="reservationForm.typeOfVehicle"
              :label="$t('RESERVATIONS.VEHICLE_TYPE_LABEL')"
              :items="vehicleTypeOptions"
              item-text="label"
              item-value="value"
              :rules="[rules.required]"
              outlined
              class="mb-4"
          ></v-select>

          <v-text-field
              v-model="reservationForm.reservationTime"
              :label="$t('RESERVATIONS.RESERVATION_TIME_LABEL')"
              type="datetime-local"
              :rules="[rules.required]"
              outlined
              class="mb-4"
          ></v-text-field>

          <div class="action-buttons">
            <v-btn color="primary" type="submit" class="reserve-btn" elevation="2">
              {{ $t('RESERVATIONS.RESERVE_BUTTON') }}
            </v-btn>
            <v-btn color="green" outlined class="pay-btn" elevation="2" @click="goToPayment">
              {{ $t('RESERVATIONS.PAY_BUTTON') }}
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Google Maps Embedded Card -->
    <v-card class="google-map-card" elevation="3">
      <v-card-title>
        <h3>{{ $t('MAPS.TITLE') }}</h3>
      </v-card-title>
      <v-card-text>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065927.627304934!2d-80.31448045081555!3d-9.204770971501427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses-419!2spe!4v1730833160499!5m2!1ses-419!2spe"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </v-card-text>
    </v-card>

    <!-- Parking Recommendations Card -->
    <v-card class="recommendations-card" elevation="3">
      <v-card-title>
        <h3>{{ $t('PARKING_RECOMMENDATIONS.TITLE') }}</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item v-for="(parking, index) in recommendedParkings.slice(0, 3)" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ parking.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ parking.price }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :href="parking.link" target="_blank" color="primary" outlined>
                    {{ $t('PARKING_RECOMMENDATIONS.LINK_TEXT') }}
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item v-for="(parking, index) in recommendedParkings.slice(3)" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ parking.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ parking.price }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :href="parking.link" target="_blank" color="primary" outlined>
                    {{ $t('PARKING_RECOMMENDATIONS.LINK_TEXT') }}
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Current Reservations List -->
    <v-card class="reservation-list" elevation="3">
      <v-card-title>
        <h3>{{ $t('RESERVATIONS.CURRENT_RESERVATIONS_TITLE') }}</h3>
      </v-card-title>

      <v-data-table
          :headers="tableHeaders"
          :items="parkingReservations"
          class="mat-elevation-z8"
          v-if="parkingReservations.length > 0"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon @click="deleteReservation(item.id)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <v-alert v-else type="info" dismissible class="no-reservations-alert">
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
      vehicleTypeOptions: [
        { value: 'Motorcycle', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.MOTORCYCLE') },
        { value: 'Truck', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.TRUCK') },
        { value: 'Car', label: this.$t('RESERVATIONS.VEHICLE_TYPE_OPTIONS.CAR') },
      ],
      rules: {
        required: value => !!value || this.$t('RESERVATIONS.REQUIRED_FIELD'),
      },
      parkingReservations: [],
      tableHeaders: [
        { text: this.$t('RESERVATIONS.TABLE_HEADERS.ID'), value: 'id' },
        { text: this.$t('RESERVATIONS.TABLE_HEADERS.VEHICLE_REGISTRATION'), value: 'vehicleRegistration' },
        { text: this.$t('RESERVATIONS.TABLE_HEADERS.VEHICLE_TYPE'), value: 'typeOfVehicle' },
        { text: this.$t('RESERVATIONS.TABLE_HEADERS.RESERVATION_TIME'), value: 'reservationTime' },
        { text: this.$t('RESERVATIONS.TABLE_HEADERS.ACTIONS'), value: 'actions', sortable: false },
      ],
      recommendedParkings: [
        { name: this.$t('PARKING_RECOMMENDATIONS.LARCOMAR.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.LARCOMAR.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-12.1293,-77.0307' },
        { name: this.$t('PARKING_RECOMMENDATIONS.JOCKEY_PLAZA.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.JOCKEY_PLAZA.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-12.0854,-76.9714' },
        { name: this.$t('PARKING_RECOMMENDATIONS.REAL_PLAZA.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.REAL_PLAZA.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-12.0921,-77.0461' },
        { name: this.$t('PARKING_RECOMMENDATIONS.PLAZA_NORTE.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.PLAZA_NORTE.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-11.9956,-77.0729' },
        { name: this.$t('PARKING_RECOMMENDATIONS.MEGA_PLAZA.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.MEGA_PLAZA.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-11.9925,-77.0603' },
        { name: this.$t('PARKING_RECOMMENDATIONS.KENNEDY.NAME'), price: this.$t('PARKING_RECOMMENDATIONS.KENNEDY.PRICE'), link: 'https://www.google.com/maps/dir/?api=1&destination=-12.1211,-77.0297' }
      ]
    };
  },
  methods: {
    onSubmit() {
      const newReservation = {
        id: this.parkingReservations.length + 1,
        vehicleRegistration: this.reservationForm.vehicleRegistration,
        typeOfVehicle: this.reservationForm.typeOfVehicle,
        reservationTime: this.reservationForm.reservationTime,
      };
      this.parkingReservations.push(newReservation);
      this.resetForm();
    },
    resetForm() {
      this.reservationForm = {
        vehicleRegistration: '',
        typeOfVehicle: '',
        reservationTime: '',
      };
    },
    deleteReservation(id) {
      this.parkingReservations = this.parkingReservations.filter(reservation => reservation.id !== id);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    goToPayment() {
      window.location.href = '/payment-form';
    }
  }
};
</script>

<style scoped>
.reservations-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.reservation-card, .google-map-card, .recommendations-card, .reservation-list {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: #2E3440;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2, h3 {
  text-align: center;
  color: #81A1C1;
}

.language-switcher {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.language-btn {
  color: #81A1C1;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #81A1C1;
  border-radius: 8px;
  padding: 4px 12px;
  transition: background-color 0.3s, color 0.3s;
}

.language-btn:hover {
  background-color: #81A1C1;
  color: #2E3440;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.reserve-btn, .pay-btn {
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s ease;
}

.reserve-btn:hover, .pay-btn:hover {
  transform: scale(1.05);
}

.no-reservations-alert {
  margin-top: 20px;
}

.mat-elevation-z8 {
  border-radius: 12px;
}
</style>
