<template>
  <v-container fluid class="payment-container">
    <v-card class="payment-card" elevation="3">
      <v-card-title class="d-flex justify-center">
        <h2 class="text-center">{{ currentLanguage === 'es' ? 'Página de Pago' : 'Payment Page' }}</h2>
      </v-card-title>
      <v-card-subtitle class="text-center">
        {{ currentLanguage === 'es' ? 'Completa el proceso de pago para el estacionamiento seleccionado.' : 'Complete the payment process for the selected parking.' }}
      </v-card-subtitle>

      <v-card-text>
        <v-row class="mb-4">
          <v-col class="text-center">
            <v-btn color="secondary" @click="toggleLanguage">
              {{ currentLanguage === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish' }}
            </v-btn>
          </v-col>
        </v-row>

        <v-form @submit.prevent="processPayment" ref="paymentForm">
          <!-- Parking Name -->
          <v-row class="mb-4">
            <v-col cols="12">
              <v-text-field
                  v-model="selectedParkingName"
                  :label="currentLanguage === 'es' ? 'Estacionamiento Seleccionado' : 'Selected Parking'"
                  outlined
                  placeholder="Escriba el nombre del estacionamiento"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  v-model="selectedParkingPrice"
                  :label="currentLanguage === 'es' ? 'Monto a Pagar' : 'Amount to Pay'"
                  prefix="S/"
                  outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Payment Method Selection with Images -->
          <v-row class="mb-4 d-flex justify-center">
            <v-col cols="4" class="text-center">
              <v-img
                  src="/images/visa.jpg"
                  alt="Visa"
                  contain
                  height="60"
                  @click="selectPaymentMethod('Visa')"
                  :class="{'selected-payment-method': paymentMethod === 'Visa'}"
              ></v-img>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-img
                  src="/images/bcp.png"
                  alt="BCP"
                  contain
                  height="60"
                  @click="selectPaymentMethod('BCP')"
                  :class="{'selected-payment-method': paymentMethod === 'BCP'}"
              ></v-img>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-img
                  src="/images/yape.png"
                  alt="Yape"
                  contain
                  height="60"
                  @click="selectPaymentMethod('Yape')"
                  :class="{'selected-payment-method': paymentMethod === 'Yape'}"
              ></v-img>
            </v-col>
          </v-row>

          <!-- Card Information for Visa and BCP -->
          <v-row v-if="paymentMethod === 'Visa' || paymentMethod === 'BCP'">
            <v-col cols="12">
              <v-text-field
                  v-model="cardNumber"
                  :label="currentLanguage === 'es' ? 'Número de Tarjeta' : 'Card Number'"
                  outlined
                  :rules="[rules.required, rules.cardNumber]"
                  maxlength="16"
                  placeholder="XXXX XXXX XXXX XXXX"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  v-model="expirationDate"
                  :label="currentLanguage === 'es' ? 'Fecha de Expiración (MM/AA)' : 'Expiration Date (MM/YY)'"
                  outlined
                  :rules="[rules.required, rules.expirationDate]"
                  placeholder="MM/AA"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  v-model="cvv"
                  :label="currentLanguage === 'es' ? 'CVV' : 'CVV'"
                  outlined
                  :rules="[rules.required, rules.cvv]"
                  maxlength="3"
                  placeholder="XXX"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  v-model="cardHolderName"
                  :label="currentLanguage === 'es' ? 'Nombre del Titular' : 'Card Holder Name'"
                  outlined
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Yape Information -->
          <v-row v-if="paymentMethod === 'Yape'">
            <v-col cols="12">
              <v-text-field
                  v-model="phoneNumber"
                  :label="currentLanguage === 'es' ? 'Número de Celular' : 'Phone Number'"
                  outlined
                  :rules="[rules.required, rules.phoneNumber]"
                  maxlength="9"
                  placeholder="Ingrese su número de celular"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  v-model="approvalCode"
                  :label="currentLanguage === 'es' ? 'Código de Aprobación' : 'Approval Code'"
                  outlined
                  :rules="[rules.required, rules.approvalCode]"
                  maxlength="6"
                  placeholder="Ingrese el código de aprobación"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Action Buttons -->
          <v-row class="d-flex justify-center mt-4">
            <v-btn color="primary" type="button" @click="processPayment" elevation="2" :disabled="!isFormValid">
              {{ currentLanguage === 'es' ? 'Pagar' : 'Pay' }}
            </v-btn>
            <v-btn color="grey" outlined class="ml-4" @click="cancelPayment">
              {{ currentLanguage === 'es' ? 'Cancelar' : 'Cancel' }}
            </v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PaymentDriver',
  data() {
    return {
      currentLanguage: 'es', // Language state
      selectedParkingName: '',
      selectedParkingPrice: '',
      paymentMethod: null,
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      cardHolderName: "",
      phoneNumber: "",
      approvalCode: "",
      rules: {
        required: value => !!value || (this.currentLanguage === 'es' ? "Este campo es requerido." : "This field is required."),
        cardNumber: value => /^\d{16}$/.test(value) || (this.currentLanguage === 'es' ? "Número de tarjeta inválido." : "Invalid card number."),
        expirationDate: value => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) || (this.currentLanguage === 'es' ? "Formato MM/AA" : "Format MM/YY"),
        cvv: value => /^\d{3}$/.test(value) || (this.currentLanguage === 'es' ? "CVV inválido." : "Invalid CVV."),
        phoneNumber: value => /^\d{9}$/.test(value) || (this.currentLanguage === 'es' ? "Número de celular inválido." : "Invalid phone number."),
        approvalCode: value => /^\d{6}$/.test(value) || (this.currentLanguage === 'es' ? "Código de aprobación inválido." : "Invalid approval code."),
      },
    };
  },
  computed: {
    isFormValid() {
      return (
          this.$refs.paymentForm &&
          this.$refs.paymentForm.validate() &&
          this.paymentMethod &&
          this.selectedParkingName &&
          this.selectedParkingPrice
      );
    },
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    },
    selectPaymentMethod(method) {
      this.paymentMethod = method;
    },
    processPayment() {
      // Validar el formulario antes de procesar el pago
      if (this.isFormValid) {
        // Mostrar un mensaje de éxito
        alert(this.currentLanguage === 'es'
            ? 'Tu estacionamiento ha sido reservado con éxito.'
            : 'Your parking has been successfully reserved.');
        // Redirigir a la ruta "reservations-driver" utilizando this.$router para asegurar la navegación
        this.$router.push({ path: "/reservations-driver" });
      }
    },
    cancelPayment() {
      this.$router.push({ path: "/reservations-driver" });
    },
  },
};
</script>

<style scoped>
.payment-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.payment-card {
  padding: 20px;
  border-radius: 12px;
  background-color: #2E3440;
  color: #D8DEE9;
}

h2 {
  color: #81A1C1;
}

.v-text-field, .v-select {
  color: #D8DEE9;
}

.v-text-field input, .v-select input {
  color: #D8DEE9 !important;
}

.selected-payment-method {
  border: 2px solid #81A1C1;
  border-radius: 8px;
  padding: 4px;
}

.v-btn {
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s ease;
}

.v-btn:hover {
  transform: scale(1.05);
}
</style>
