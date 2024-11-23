<template>
  <v-container fluid class="support-container">
    <!-- Barra de herramientas superior -->
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>{{ $t('SUPPORT.TITLE') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="accent" :to="{ name: 'DashboardDriver' }" class="back-home-btn">
        {{ $t('SUPPORT.BACK_TO_HOME') }}
      </v-btn>
    </v-toolbar>

    <!-- Botones de cambio de idioma -->
    <div class="language-switcher">
      <v-btn @click="changeLanguage('es')" class="language-btn" outlined>Español</v-btn>
      <v-btn @click="changeLanguage('en')" class="language-btn" outlined>Inglés</v-btn>
    </div>

    <v-row justify="center" class="support-content">
      <!-- Card de Asistencia Virtual -->
      <v-col cols="12" md="6">
        <v-card class="support-card" elevation="6">
          <v-card-title class="support-card-title">
            <v-icon left>mdi-help-circle</v-icon>
            {{ $t('SUPPORT.VIRTUAL_ASSISTANCE_TITLE') }}
          </v-card-title>
          <v-card-text>
            <p>{{ $t('SUPPORT.VIRTUAL_ASSISTANCE_DESCRIPTION') }}</p>
            <v-textarea
                v-model="query"
                :label="$t('SUPPORT.INPUT_LABEL')"
                outlined
                rows="4"
                class="input-textarea"
            ></v-textarea>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" @click="sendQuery" class="send-btn">
              {{ $t('SUPPORT.SEND_BUTTON') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Card de Contacto -->
      <v-col cols="12" md="6">
        <v-card class="support-card" elevation="6">
          <v-card-title class="support-card-title">
            <v-icon left>mdi-email-open</v-icon>
            {{ $t('SUPPORT.CONTACT_US_TITLE') }}
          </v-card-title>
          <v-card-text>
            <p>{{ $t('SUPPORT.CONTACT_US_DESCRIPTION') }}</p>
            <v-row class="social-icons" justify="center">
              <v-col v-for="(icon, index) in socialIcons" :key="index" cols="auto">
                <v-icon large @click="openLink(icon.link)" class="social-icon">
                  {{ icon.name }}
                </v-icon>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      socialIcons: [
        { name: 'mdi-github', link: 'https://github.com' },
        { name: 'mdi-facebook', link: 'https://facebook.com' },
        { name: 'mdi-instagram', link: 'https://instagram.com' },
        { name: 'mdi-email', link: 'mailto:support@domain.com' },
      ],
    };
  },
  methods: {
    sendQuery() {
      console.log(this.query);
    },
    openLink(link) {
      window.open(link, '_blank');
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.support-container {
  padding: 20px;
  background-color: #f9fafb;
}

.language-switcher {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.language-btn {
  color: #1e88e5;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #1e88e5;
  border-radius: 8px;
  padding: 4px 12px;
  transition: background-color 0.3s, color 0.3s;
}

.language-btn:hover {
  background-color: #1e88e5;
  color: #ffffff;
}

.support-card {
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #ffffff;
  padding: 20px;
}

.support-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.support-card-title {
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: #1e88e5;
}

.input-textarea {
  margin-top: 10px;
}

.send-btn {
  font-weight: bold;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(30, 136, 229, 0.3);
}

.social-icons {
  margin-top: 15px;
}

.social-icon {
  color: #1e88e5;
  transition: color 0.3s ease, transform 0.3s;
  cursor: pointer;
}

.social-icon:hover {
  color: #1565c0;
  transform: scale(1.2);
}

.back-home-btn {
  font-weight: bold;
}

@media (max-width: 768px) {
  .support-card {
    max-width: 100%;
  }
}
</style>
