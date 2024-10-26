<template>
  <v-container fluid class="settings-container">
    <v-row class="settings-row" align="start" justify="center">
      <v-col xs="12" sm="6" md="4">
        <v-card class="settings-card">
          <v-card-title>
            <h2>{{ $t('SETTINGS.PRIVACY_POLICY.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <p>
              {{ $t('SETTINGS.PRIVACY_POLICY.DESCRIPTION') }}
              <span v-if="showMore">
                <strong>{{ $t('SETTINGS.PRIVACY_POLICY.TITLE') }} - ParkingNow</strong><br /><br />
                <span v-html="$t('SETTINGS.PRIVACY_POLICY.CONTENT')"></span>
              </span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="toggleShowMore" color="primary">
              {{ showMore ? $t('SETTINGS.PRIVACY_POLICY.SHOW_LESS') : $t('SETTINGS.PRIVACY_POLICY.SHOW_MORE') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" sm="6" md="4">
        <v-card class="settings-card">
          <v-card-title>
            <h2>{{ $t('SETTINGS.REFUND.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="refundForm" @submit.prevent="submitRefund">
              <v-text-field v-model="refundForm.name" :label="$t('SETTINGS.REFUND.NAME')" required></v-text-field>
              <v-text-field v-model="refundForm.email" :label="$t('SETTINGS.REFUND.EMAIL')" required></v-text-field>
              <v-textarea v-model="refundForm.reason" :label="$t('SETTINGS.REFUND.REASON')" required></v-textarea>
              <v-btn type="submit" color="primary">{{ $t('SETTINGS.REFUND.SUBMIT') }}</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="6" md="4">
        <v-card class="settings-card">
          <v-card-title>
            <h2>{{ $t('SETTINGS.THEFT_REPORT.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="theftDescription" :label="$t('SETTINGS.THEFT_REPORT.DESCRIPTION')" required></v-textarea>
            <v-btn @click="reportTheft" color="primary">{{ $t('SETTINGS.THEFT_REPORT.SUBMIT') }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="settings-row" align="start" justify="center">
      <v-col xs="12">
        <v-card class="settings-card full-width">
          <v-card-title>
            <h2>{{ $t('SETTINGS.DELETE_ACCOUNT.TITLE') }}</h2>
          </v-card-title>
          <v-card-text>
            <p>{{ $t('SETTINGS.DELETE_ACCOUNT.CONFIRMATION') }}</p>
            <v-btn @click="deleteAccount" color="error">{{ $t('SETTINGS.DELETE_ACCOUNT.DELETE_BUTTON') }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12">
        <v-btn color="accent" class="back-button" to="/dashboard-driver">
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
}

.settings-card {
  margin-bottom: 20px;
}

.back-button {
  margin-top: 20px;
}
</style>
