<template>
  <v-container fluid class="register-driver-container">
    <!-- Botones de idioma arriba del registro de conductor -->
    <div class="language-switcher">
      <v-btn text @click="changeLanguage('es')">ESPAÑOL</v-btn>
      <v-btn text @click="changeLanguage('en')">ENGLISH</v-btn>
    </div>

    <v-card class="register-driver-card">
      <h1 class="title">{{ $t('REGISTER_DRIVER.TITLE') }}</h1>
      <p class="subtitle">{{ $t('REGISTER_DRIVER.SUBTITLE') }}</p>

      <v-form @submit.prevent="onSubmit">
        <!-- Nombre -->
        <v-text-field
            v-model="registerDriverForm.firstName"
            :label="$t('REGISTER_DRIVER.FIRST_NAME')"
            :placeholder="$t('REGISTER_DRIVER.FIRST_NAME_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Apellidos -->
        <v-text-field
            v-model="registerDriverForm.lastName"
            :label="$t('REGISTER_DRIVER.LAST_NAME')"
            :placeholder="$t('REGISTER_DRIVER.LAST_NAME_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Correo Electrónico -->
        <v-text-field
            v-model="registerDriverForm.email"
            :label="$t('REGISTER_DRIVER.EMAIL')"
            :placeholder="$t('REGISTER_DRIVER.EMAIL_PLACEHOLDER')"
            :rules="[rules.required, rules.email]"
            required
        ></v-text-field>

        <!-- Contraseña -->
        <v-text-field
            v-model="registerDriverForm.password"
            :label="$t('REGISTER_DRIVER.PASSWORD')"
            :placeholder="$t('REGISTER_DRIVER.PASSWORD_PLACEHOLDER')"
            :rules="[rules.required]"
            type="password"
            required
        ></v-text-field>

        <!-- Repetir Contraseña -->
        <v-text-field
            v-model="registerDriverForm.confirmPassword"
            :label="$t('REGISTER_DRIVER.CONFIRM_PASSWORD')"
            :placeholder="$t('REGISTER_DRIVER.CONFIRM_PASSWORD_PLACEHOLDER')"
            :rules="[rules.required]"
            type="password"
            required
        ></v-text-field>

        <!-- Placa de Vehículo -->
        <v-text-field
            v-model="registerDriverForm.vehiclePlate"
            :label="$t('REGISTER_DRIVER.VEHICLE_PLATE')"
            :placeholder="$t('REGISTER_DRIVER.VEHICLE_PLATE_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- DNI -->
        <v-text-field
            v-model="registerDriverForm.dni"
            :label="$t('REGISTER_DRIVER.DNI')"
            :placeholder="$t('REGISTER_DRIVER.DNI_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Botón de Registro -->
        <v-btn type="submit" color="primary" class="full-width">
          {{ $t('REGISTER_DRIVER.SUBMIT_BUTTON') }}
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterDriver',
  data() {
    return {
      registerDriverForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        vehiclePlate: '',
        dni: ''
      },
      rules: {
        required: v => !!v || 'Este campo es requerido',
        email: v => /.+@.+\..+/.test(v) || 'Email inválido'
      }
    };
  },
  methods: {
    onSubmit() {
      // Lógica para enviar el formulario
      console.log('Formulario enviado:', this.registerDriverForm);

      // Redirigir al DashboardDriver
      this.$router.push({ name: 'DashboardDriver' });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  }
};
</script>

<style scoped>
.register-driver-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.register-driver-card {
  padding: 40px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.language-switcher {
  display: flex;
  justify-content: center; /* Centra los botones de idioma */
  margin-bottom: 20px; /* Espaciado debajo de los botones */
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
}

.full-width {
  width: 100%;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .register-driver-card {
    padding: 20px;
  }
}
</style>
