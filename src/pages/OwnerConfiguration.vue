<template>
  <div class="owner-configuration-container">
    <div class="owner-configuration-row">
      <v-card class="owner-configuration-card elevation-2">
        <h2 class="card-title">{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.TITLE') }}</h2>
        <p>
          {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.DESCRIPTION') }}
          <span v-if="showMore">
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.TITLE') }}</strong><br><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.TEXT') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.COLLECTION_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.COLLECTION_TEXT') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.FULL_NAME') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.EMAIL') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.VEHICLE_INFO') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.LOCATION') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.PAYMENT_INFO') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.USE_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.USE_TEXT') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.MANAGE_ACCOUNT') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.NOTIFICATIONS') }}<br>
            - {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.IMPROVE_EXPERIENCE') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.SHARING_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.SHARING_TEXT') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.SECURITY_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.SECURITY_TEXT') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.RIGHTS_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.RIGHTS_TEXT') }}<br><br>
            <strong>{{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.CHANGES_TITLE') }}</strong><br>
            {{ $t('OWNER_CONFIGURATION.PRIVACY_POLICY.CONTENT.CHANGES_TEXT') }}<br>
          </span>
        </p>
        <v-btn @click="toggleShowMore" color="primary">{{ showMore ? $t('OWNER_CONFIGURATION.SHOW_LESS') : $t('OWNER_CONFIGURATION.SHOW_MORE') }}</v-btn>
      </v-card>

      <v-card class="owner-configuration-card elevation-2">
        <h2 class="card-title">{{ $t('OWNER_CONFIGURATION.LANGUAGE.TITLE') }}</h2>
        <v-select v-model="selectedLanguage" @change="changeLanguage" outlined>
          <v-list-item v-for="(lang, index) in languages" :key="index" :value="lang.code">
            {{ lang.name }}
          </v-list-item>
        </v-select>
        <v-btn @click="toggleLanguage" color="primary">
          {{ selectedLanguage === 'es' ? $t('OWNER_CONFIGURATION.CHANGE_TO_ENGLISH') : $t('OWNER_CONFIGURATION.CHANGE_TO_SPANISH') }}
        </v-btn>
      </v-card>
    </div>

    <div class="owner-configuration-row">
      <v-card class="owner-configuration-card elevation-2">
        <h2 class="card-title">{{ $t('OWNER_CONFIGURATION.THEFT_REPORT.TITLE') }}</h2>
        <v-textarea :label="$t('OWNER_CONFIGURATION.THEFT_REPORT.DESCRIPTION')" v-model="theftDescription" outlined></v-textarea>
        <v-btn @click="reportTheft" color="primary">{{ $t('OWNER_CONFIGURATION.THEFT_REPORT.SUBMIT') }}</v-btn>
      </v-card>
    </div>

    <div class="owner-configuration-row">
      <v-card class="owner-configuration-card full-width elevation-2">
        <h2 class="card-title">{{ $t('OWNER_CONFIGURATION.DELETE_ACCOUNT.TITLE') }}</h2>
        <p>{{ $t('OWNER_CONFIGURATION.DELETE_ACCOUNT.CONFIRMATION') }}</p>
        <v-btn @click="deleteAccount" color="red">{{ $t('OWNER_CONFIGURATION.DELETE_ACCOUNT.DELETE_BUTTON') }}</v-btn>
      </v-card>
      <v-btn @click="$router.push('/dashboard-owner')" color="accent">{{ $t('OWNER_CONFIGURATION.BACK_TO_HOME') }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'es',
      showMore: false,
      theftDescription: '',
      languages: [
        { code: 'es', name: 'Español' },
        { code: 'en', name: 'English' }
      ]
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    toggleLanguage() {
      this.selectedLanguage = this.selectedLanguage === 'es' ? 'en' : 'es';
      this.changeLanguage();
    },
    reportTheft() {
      // Handle theft report submission logic
    },
    deleteAccount() {
      // Handle account deletion logic
    }
  }
};
</script>

<style scoped>
.owner-configuration-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.owner-configuration-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.owner-configuration-card {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #FAFAFA;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.owner-configuration-card.full-width {
  flex: 1;
}
.card-title {
  font-size: 1.5em;
  font-weight: 600;
  color: #2C3E50;
}
button, .v-btn {
  margin-top: 10px;
}
.owner-configuration-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px) {
  .owner-configuration-container {
    flex-direction: column;
  }
  .owner-configuration-row {
    flex-direction: column;
  }
  .owner-configuration-card {
    padding: 15px;
  }
  .card-title {
    font-size: 1.3em;
  }
}
</style>
