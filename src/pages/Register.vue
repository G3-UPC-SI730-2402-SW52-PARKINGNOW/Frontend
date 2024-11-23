<template>
  <v-container fluid class="register-container">
    <!-- Botones de idioma -->
    <div class="language-switcher">
      <v-btn text @click="changeLanguage('es')">ESPAÑOL</v-btn>
      <v-btn text @click="changeLanguage('en')">ENGLISH</v-btn>
    </div>

    <h2>{{ $t('register.title') }}</h2>
    <v-row class="register-options" justify="center">
      <!-- Opción para Conductor -->
      <v-col cols="12" sm="6" md="4" class="register-option">
        <v-card>
          <v-img src="/images/Conductor.jpg" alt="{{ $t('register.driver') }}" class="register-image"></v-img>
          <v-card-title>{{ $t('register.driver') }}</v-card-title>
          <v-card-text>
            <p>{{ $t('register.driver_description') }}</p>
          </v-card-text>
          <v-card-actions class="justify-center"> <!-- Asegura que el botón esté centrado -->
            <router-link to="/register-driver">
              <v-btn color="primary">
                {{ $t('register.driver_button') }}
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Opción para Dueño de Playa de Estacionamiento -->
      <v-col cols="12" sm="6" md="4" class="register-option">
        <v-card>
          <v-img src="/images/EstacionamientoP.jpg" alt="{{ $t('register.owner') }}" class="register-image"></v-img>
          <v-card-title>
            {{ $t('register.owner').split(' ').slice(0, 3).join(' ') }}<br>
            {{ $t('register.owner').split(' ').slice(3).join(' ') }}
          </v-card-title>
          <v-card-text>
            <p>{{ $t('register.owner_description') }}</p>
          </v-card-text>
          <v-card-actions class="justify-center"> <!-- Asegura que el botón esté centrado -->
            <router-link to="/register-owner">
              <v-btn color="primary">
                {{ $t('register.owner_button') }}
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
    }
  }
};
</script>

<style scoped>
.register-container {
  text-align: center;
}

.language-switcher {
  display: flex;
  justify-content: center; /* Centra los botones de idioma */
  margin-bottom: 20px; /* Espaciado debajo de los botones */
}

.register-options {
  display: flex;
  justify-content: center; /* Asegura que las opciones de registro estén centradas */
  flex-wrap: wrap; /* Permite que las columnas se ajusten en pantallas más pequeñas */
  margin-top: 30px;
}

.register-option {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra más grande */
  margin: 10px; /* Espacio entre las opciones */
}

.register-image {
  height: 200px;
}

h2 {
  font-size: 32px; /* Aumentar el tamaño del título */
  font-weight: bold;
  color: #333;
  margin-bottom: 40px; /* Más espacio debajo del título */
}

h3 {
  font-size: 26px; /* Aumentar el tamaño de los subtítulos */
  color: #007bff;
  margin-bottom: 15px;
}

p {
  font-size: 18px; /* Aumentar el tamaño del texto descriptivo */
  color: #555;
  margin-bottom: 30px;
}

.register-button {
  display: inline-block;
  padding: 12px 30px; /* Aumentar el tamaño del botón */
  font-size: 18px; /* Aumentar el tamaño del texto del botón */
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #0056b3;
}
</style>
