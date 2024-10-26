<template>
  <v-container fluid class="d-flex justify-center align-center fill-height login-background">
    <v-card class="login-card" elevation="10">
      <!-- Selector de idioma -->
      <LanguageSwitcher class="mb-4 language-toggle" />

      <!-- Logo centrado -->
      <v-card-title class="justify-center">
        <v-img src="/images/parkingnow.png" max-width="120" class="mb-4 logo-center"></v-img>
      </v-card-title>

      <!-- Título completo con i18n -->
      <v-card-subtitle class="text-center mb-4 title full-title">
        {{ $t('login.title') }}
      </v-card-subtitle>

      <!-- Subtítulo de registro -->
      <v-card-text class="text-center mb-4">
        <p class="subtitle">{{ $t('login.noAccount') }} <router-link to="/register" class="register-link">{{ $t('login.registerHere') }}</router-link></p>
      </v-card-text>

      <!-- Formulario de inicio de sesión -->
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
              v-model="email"
              :label="$t('login.email')"
              :rules="[rules.required]"
              prepend-icon="mdi-email"
              type="email"
              outlined
              class="mb-4 input-field"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :label="$t('login.password')"
              :rules="[rules.required]"
              prepend-icon="mdi-lock"
              type="password"
              outlined
              class="mb-4 input-field"
              required
          ></v-text-field>

          <!-- Mantener sesión y recuperar contraseña alineados -->
          <v-row align="center" class="mb-2">
            <v-checkbox v-model="remember" :label="$t('login.remember')" class="mr-3"></v-checkbox>
            <v-spacer></v-spacer>
            <v-btn text to="/forgot-password" class="forgot-password">
              {{ $t('login.forgotPassword') }}
            </v-btn>
          </v-row>

          <v-btn type="submit" color="primary" class="mt-4" block>
            {{ $t('login.loginButton') }}
          </v-btn>
        </v-form>
      </v-card-text>

      <!-- Botones sociales -->
      <v-divider class="my-4"></v-divider>

      <v-card-text>
        <v-row>
          <v-btn block color="blue darken-3" class="mb-2 mr-2" large>
            <v-icon left>mdi-facebook</v-icon> Facebook
          </v-btn>

          <v-btn block color="red darken-2" large>
            <v-icon left>mdi-google</v-icon> Google
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import LanguageSwitcher from '../public/components/LanguageSwitcher.vue'; // Importar el componente

export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      rules: {
        required: (v) => !!v || 'Este campo es requerido',
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.email && this.password) {
        // Lógica para manejar el login
        this.$router.push('/reservations');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.login-background {
  background-color: #1e1e1e;
}

.login-card {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  background-color: #272727;
  text-align: center;
}

.logo-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.full-title {
  white-space: normal; /* Para asegurar que la frase se ajuste en la pantalla */
  font-size: 20px;
}

.title {
  color: white;
  font-weight: bold;
}

.subtitle {
  color: #b3b3b3;
}

.register-link {
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.forgot-password {
  color: #007bff;
  font-size: 14px;
  margin-left: 15px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.input-field {
  width: 100%; /* Asegura que las casillas ocupen el 100% del espacio disponible */
  height: 56px; /* Aumenta la altura para que las casillas sean más grandes */
}

.v-btn {
  color: white;
}

.v-btn.v-btn--block {
  border-radius: 30px;
}

.v-card {
  border-radius: 20px;
}

.v-checkbox {
  color: #007bff;
}

.v-row {
  display: flex;
  justify-content: left; /* Alinea los botones sociales a la izquierda */
}

.language-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.v-btn.v-btn--block {
  border-radius: 30px;
  width: 48%;
}
</style>
