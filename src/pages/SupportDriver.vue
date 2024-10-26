<template>
  <v-container fluid class="support-container">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>{{ $t('SUPPORT.TITLE') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="accent" :to="{ name: 'DashboardDriver' }">
        {{ $t('SUPPORT.BACK_TO_HOME') }}
      </v-btn>
    </v-toolbar>

    <v-row justify="center" class="support-content">
      <v-col cols="12" md="6" class="support-card">
        <v-card>
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
          <v-card-actions>
            <v-btn color="primary" @click="sendQuery">{{ $t('SUPPORT.SEND_BUTTON') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="support-card">
        <v-card>
          <v-card-title class="support-card-title">
            <v-icon left>mdi-email-open</v-icon>
            {{ $t('SUPPORT.CONTACT_US_TITLE') }}
          </v-card-title>
          <v-card-text>
            <p>{{ $t('SUPPORT.CONTACT_US_DESCRIPTION') }}</p>
            <v-row class="social-icons" justify="center">
              <v-col v-for="(icon, index) in socialIcons" :key="index" cols="auto">
                <v-icon large @click="openLink(icon.link)" class="social-icon">{{ icon.name }}</v-icon>
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
        { name: 'mdi-email', link: 'mailto:support@domain.com' }
      ]
    };
  },
  methods: {
    sendQuery() {
      // Logic to send the query
      console.log(this.query);
      // Aquí puedes agregar la lógica para enviar el formulario
    },
    openLink(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style scoped>
.support-container {
  margin: 20px;
}

.support-card {
  margin: 20px 0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.support-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.social-icons {
  margin-top: 15px;
}

.social-icon {
  color: #00796b;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #004d40;
}

.support-card-title {
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
}

.input-textarea {
  margin-top: 10px;
}

@media (max-width: 768px) {
  .support-card {
    max-width: 100%;
  }
}
</style>
