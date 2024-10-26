<template>
  <v-container fluid class="register-owner-container">
    <!-- Botones de idioma -->
    <div class="language-switcher">
      <v-btn text @click="changeLanguage('es')">ESPAÑOL</v-btn>
      <v-btn text @click="changeLanguage('en')">ENGLISH</v-btn>
    </div>

    <v-card class="register-owner-card">
      <h1 class="title">{{ $t('REGISTER_OWNER.TITLE') }}</h1>
      <p class="subtitle">{{ $t('REGISTER_OWNER.SUBTITLE') }}</p>

      <v-form @submit.prevent="onSubmit">
        <!-- Nombre Completo -->
        <v-text-field
            v-model="registerOwnerForm.fullName"
            :label="$t('REGISTER_OWNER.FULL_NAME')"
            :placeholder="$t('REGISTER_OWNER.FULL_NAME_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Nombre del Local -->
        <v-text-field
            v-model="registerOwnerForm.businessName"
            :label="$t('REGISTER_OWNER.BUSINESS_NAME')"
            :placeholder="$t('REGISTER_OWNER.BUSINESS_NAME_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Correo Electrónico -->
        <v-text-field
            v-model="registerOwnerForm.email"
            :label="$t('REGISTER_OWNER.EMAIL')"
            :placeholder="$t('REGISTER_OWNER.EMAIL_PLACEHOLDER')"
            :rules="[rules.required, rules.email]"
            required
        ></v-text-field>

        <!-- Contraseña -->
        <v-text-field
            v-model="registerOwnerForm.password"
            :label="$t('REGISTER_OWNER.PASSWORD')"
            :placeholder="$t('REGISTER_OWNER.PASSWORD_PLACEHOLDER')"
            :rules="[rules.required]"
            type="password"
            required
        ></v-text-field>

        <!-- Repetir Contraseña -->
        <v-text-field
            v-model="registerOwnerForm.confirmPassword"
            :label="$t('REGISTER_OWNER.CONFIRM_PASSWORD')"
            :placeholder="$t('REGISTER_OWNER.CONFIRM_PASSWORD_PLACEHOLDER')"
            :rules="[rules.required]"
            type="password"
            required
        ></v-text-field>

        <!-- RUC -->
        <v-text-field
            v-model="registerOwnerForm.ruc"
            :label="$t('REGISTER_OWNER.RUC')"
            :placeholder="$t('REGISTER_OWNER.RUC_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Dirección del Local -->
        <v-text-field
            v-model="registerOwnerForm.address"
            :label="$t('REGISTER_OWNER.ADDRESS')"
            :placeholder="$t('REGISTER_OWNER.ADDRESS_PLACEHOLDER')"
            :rules="[rules.required]"
            required
        ></v-text-field>

        <!-- Botón de Registro -->
        <v-btn type="submit" color="primary" class="full-width">
          {{ $t('REGISTER_OWNER.SUBMIT_BUTTON') }}
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterOwner',
  data() {
    return {
      registerOwnerForm: {
        fullName: '',
        businessName: '',
        email: '',
        password: '',
        confirmPassword: '',
        ruc: '',
        address: ''
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
      console.log('Formulario enviado:', this.registerOwnerForm);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  }
};
</script>

<style scoped>
.register-owner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.register-owner-card {
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
  .register-owner-card {
    padding: 20px;
  }
}
</style>
