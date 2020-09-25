<template>
  <div>
    <div>
      <h1 v-text="Text">Holaaaa</h1>
      <router-link :to="conteo(false)">Anterior</router-link>
      <br />
      <router-link :to="conteo(true)">Siguiente</router-link>
      <p></p>
      <div class="mensaje_link">
        <router-link :to="{ name: 'Mensajes' }"
          >Ver Mensaje sorpresa</router-link
        >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mensaje",
  methods: {
    conteo(next) {
      let entrada = parseInt(this.$route.params.entrada);
      if (next) {
        return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
      } else {
        return entrada > 1 ? `/post/${entrada - 1}` : `/post/${entrada}`;
      }
    },
  },
  computed: {
    Text() {
      return `Estas en la pagina ${this.$route.params.entrada} del post `;
    },
  },
};
</script>

<style>
.mensaje_link {
  padding: 50px;
}


</style>