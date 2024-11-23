<template>
  <v-container fluid class="d-flex justify-center align-center fill-height">
    <v-card class="forgot-password-card" elevation="10">
      <!-- Botones de idioma -->
      <div class="language-switcher">
        <v-btn text @click="changeLanguage('es')">ESPAÑOL</v-btn>
        <v-btn text @click="changeLanguage('en')">ENGLISH</v-btn>
      </div>

      <v-card-title class="justify-center">
        <v-img src="/images/parkingnow.png" max-width="120" class="mb-4 logo-center"></v-img>
      </v-card-title>

      <v-card-subtitle class="text-center mb-4">
        <h2>{{ $t('forgot_password.title') }}</h2>
      </v-card-subtitle>

      <v-card-text>
        <p>{{ $t('forgot_password.subtitle') }}</p>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
              v-model="email"
              :label="$t('forgot_password.email')"
              :rules="[rules.required]"
              outlined
              required
          ></v-text-field>
          <v-btn type="submit" color="primary" block>
            {{ $t('forgot_password.submit') }}
          </v-btn>
        </v-form>
      </v-card-text>

      <v-card-text>
        <router-link to="/login">{{ $t('forgot_password.back_to_login') }}</router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      rules: {
        required: v => !!v || 'Este campo es requerido',
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.email) {
        // Lógica para manejar el envío del correo para recuperar contraseña
        console.log('Email enviado a:', this.email);
      }
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  },
};
</script>

<style scoped>
.forgot-password-card {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  background-color: #272727;
  text-align: center;
}

.language-switcher {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.logo-center {
  display: block; /* Para que se comporte como un bloque */
  margin-left: auto; /* Centra el logo horizontalmente */
  margin-right: auto; /* Centra el logo horizontalmente */
}

.v-btn {
  color: white; /* Cambia el color de los botones si es necesario */
}
</style>
