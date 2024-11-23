<template>
  <v-row justify="center">
    <v-btn text @click="switchLanguage('es')" :class="{ active: currentLocale === 'es' }">
      Español
    </v-btn>
    <v-btn text @click="switchLanguage('en')" :class="{ active: currentLocale === 'en' }">
      English
    </v-btn>
  </v-row>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.locale = locale; // Cambiar el idioma
    }
  }
};
</script>

<style scoped>
.active {
  font-weight: bold;
  color: #007bff;
}
</style>
