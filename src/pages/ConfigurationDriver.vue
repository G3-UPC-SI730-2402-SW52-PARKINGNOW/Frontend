<template>
  <v-container fluid class="settings-container">
    <v-row class="settings-row" align="start" justify="center">
      <!-- Botón de cambio de idioma -->
      <v-col xs="12" class="language-switcher">
        <v-btn @click="toggleLanguage" color="secondary" outlined>
          {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="settings-row" align="start" justify="space-between" dense>
      <!-- Columna 1: Política de Privacidad y Formulario de Reembolso -->
      <v-col xs="12" sm="6" md="5">
        <!-- Política de Privacidad -->
        <v-card class="settings-card" elevation="4">
          <v-card-title class="card-title">
            <v-icon left>mdi-shield-lock-outline</v-icon>
            <h2>{{ $t('SETTINGS.PRIVACY_POLICY.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <p>
              {{ $t('SETTINGS.PRIVACY_POLICY.DESCRIPTION') }}
              <span v-if="showMore">
                <strong>{{ $t('SETTINGS.PRIVACY_POLICY.TITLE') }} - ParkingNow</strong><br /><br />
                <span v-html="$t('SETTINGS.PRIVACY_POLICY.CONTENT.TEXT')"></span>
              </span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="toggleShowMore" color="primary" outlined>
              {{ showMore ? $t('SETTINGS.PRIVACY_POLICY.SHOW_LESS') : $t('SETTINGS.PRIVACY_POLICY.SHOW_MORE') }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Formulario de Reembolso -->
        <v-card class="settings-card" elevation="4" style="margin-top: 20px;">
          <v-card-title class="card-title">
            <v-icon left>mdi-cash-refund</v-icon>
            <h2>{{ $t('SETTINGS.REFUND.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="refundForm" @submit.prevent="submitRefund">
              <v-text-field v-model="refundForm.name" :label="$t('SETTINGS.REFUND.NAME')" outlined required></v-text-field>
              <v-text-field v-model="refundForm.email" :label="$t('SETTINGS.REFUND.EMAIL')" outlined required></v-text-field>
              <v-textarea v-model="refundForm.reason" :label="$t('SETTINGS.REFUND.REASON')" outlined required></v-textarea>
              <v-btn type="submit" color="primary" block>{{ $t('SETTINGS.REFUND.SUBMIT') }}</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Columna 2: Reporte de Robo y Eliminar Cuenta -->
      <v-col xs="12" sm="6" md="5">
        <!-- Reporte de Robo -->
        <v-card class="settings-card" elevation="4">
          <v-card-title class="card-title">
            <v-icon left>mdi-car-emergency</v-icon>
            <h2>{{ $t('SETTINGS.THEFT_REPORT.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="theftDescription" :label="$t('SETTINGS.THEFT_REPORT.DESCRIPTION')" outlined required></v-textarea>
            <v-btn @click="reportTheft" color="primary" block>{{ $t('SETTINGS.THEFT_REPORT.SUBMIT') }}</v-btn>
          </v-card-text>
        </v-card>

        <!-- Eliminar Cuenta -->
        <v-card class="settings-card delete-card" elevation="4" style="margin-top: 20px;">
          <v-card-title class="card-title">
            <v-icon left color="error">mdi-account-remove</v-icon>
            <h2>{{ $t('SETTINGS.DELETE_ACCOUNT.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <p>{{ $t('SETTINGS.DELETE_ACCOUNT.CONFIRMATION') }}</p>
            <v-btn @click="deleteAccount" color="error" outlined block>{{ $t('SETTINGS.DELETE_ACCOUNT.DELETE_BUTTON') }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Botón de regreso a inicio -->
    <v-row class="settings-row" align="center" justify="center">
      <v-col xs="12" md="8">
        <v-btn color="secondary" class="back-button" to="/dashboard-driver" outlined block>
          {{ $t('SETTINGS.BACK_TO_HOME') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      showMore: false,
      refundForm: {
        name: '',
        email: '',
        reason: '',
      },
      theftDescription: '',
    };
  },
  methods: {
    toggleLanguage() {
      // Cambiar el idioma y guardar la configuración
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
      this.$i18n.locale = this.currentLanguage;
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    submitRefund() {
      // Lógica para enviar el reembolso
    },
    reportTheft() {
      // Lógica para informar sobre el robo
    },
    deleteAccount() {
      // Lógica para eliminar la cuenta
    },
  },
};
</script>

<style scoped>
.settings-container {
  padding: 20px;
  background-color: #f4f6f9;
}

.language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.settings-row {
  gap: 20px;
}

.settings-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.settings-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.delete-card {
  background-color: #ffebee;
  color: #b71c1c;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1976d2;
  font-weight: bold;
}

.card-title h2 {
  font-size: 1.2rem;
}

.v-btn {
  margin-top: 10px;
  font-weight: bold;
}

.back-button {
  margin-top: 20px;
}

.v-text-field,
.v-textarea {
  margin-bottom: 15px;
}

/* Responsividad */
@media (max-width: 768px) {
  .settings-card {
    max-width: 100%;
  }
}
</style>
