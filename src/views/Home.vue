<template>
  <div>
    <header>
      <div class="banner"></div>
    </header>
    <section class="looking">
      <div>
        <h3>Tipos de Vehiculos</h3>

        <p class="parrafo" style="width: 30rem">
          Los monovolúmenes son un tipo de coche según su carrocería. El espacio
          interior integra en un solo volumen el compartimento de equipajes, el
          de pasajeros y el del motor. El motor está alojado de tal manera que
          sobresale muy poco por delante del eje delantero, y está montado más
          alto e incluso más inclinado que en un turismo, para liberar espacio
          en el habitáculo. Atendiendo a este volumen interior, existen otras
          variantes: dos volúmenes (maletero y habitáculo están comunicados) y
          tres volúmenes (el espacio del maletero y el motor están separados).
        </p>
      </div>
      <div class="card" style="width: 36rem">
        <strong><p>¿ENCUENTRAS EL INDICADO?</p></strong>
        <div class="card-body">
          <h5 class="card-title">¿Quieres comprar un vehículo?</h5>
          <h6>SIGUE ESTOS TIPS AL MOMENTO DE COMPRAR</h6>
          <p class="card-text">
            Toca molduras, parrilla y defensas, para detectar si existió algún
            daño y quedó mal reparado. Revisa si existen abolladuras, rayones y
            óxido en todos los paneles de carrocería y techo. Ten en cuenta que
            la separación que existe entre los paneles y las superficies que los
            rodean tiene que ser uniforme: si están mal alineados u observas una
            separación desmesurada, puede que tengan una falla de fábrica o
            hayan sido reparados en alguna oportunidad.
          </p>
          <p>¿Quieres saber más?</p>
          <a
            href="https://www.autofact.cl/blog/comprar-auto/revision/revisar-exterior-auto"
            >Loockea Ofertas!</a
          >
        </div>
      </div>
    </section>

    <footer>
      <div class="Footer">
        <div>
          <strong><h6>Talcahuano 2020</h6></strong>
          <p class="text-muted copyright">copyrightv.8!</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
}
p,
h6 {
  font-size: 20px;
  margin-top: 15px;
}
.banner {
  background-image: url("https://velvet-mag.lat/wp-content/uploads/2019/05/blade-3d-printed-hypercarweb.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
}

.looking {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-content: center;
  padding: 30px;
}
footer {
  background-color: rgb(131, 84, 84);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parrafo {
  width: 300px;
}
</style>
