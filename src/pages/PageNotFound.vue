<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>La página que estás buscando no existe.</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 6rem;
  color: #ff6b6b;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
}

a {
  color: #1d3557;
  text-decoration: none;
  font-weight: bold;
}
</style>
