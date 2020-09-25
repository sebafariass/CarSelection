<template>
	<div class="Contact">
		<h3>Contactanos para más información</h3>
		<h5>Información exclusiva de Vehiculos, Noticias, Revista online</h5>
		<form>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input_email">Nombre :</label>
					<input type="text" class="form-control" id="input_email_id" />
				</div>
				<div class="form-group col-md-6">
					<label for="input_password">Apellido :</label>
					<input type="text" class="form-control" id="input_passwrd_id" />
				</div>
			</div>
			<div class="form-group">
				<label for="input_email">Correo electrónico :</label>
				<input type="email" class="form-control" id="input_email_id" placeholder="Email" />
			</div>
			<div class="form-group">
				<label for="inputAddress2">Celular : </label>
				<input type="number" class="form-control" id="inputAddress2" placeholder="Ej: +569 xxxx xxx" />
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="input_ciudad">Cuidad : </label>
					<input type="text" class="form-control" />
				</div>
				<div class="form-group col-md-4">
					<label for="input_comuna">Comuna :</label>
					<select id="input_comuna_id" class="form-control">
						<option selected id="separador">Opcion</option>
						<option>...</option>
					</select>
				</div>
			</div>

			<button type="submit">Subscribete! </button>
		</form>

		
	</div>
</template>

<script>
export default {};
</script>

<style>
.Contact {
	margin: 30px;

}

input {
	margin: 15px;
}

label {
	color: blue;
	font-size: 25px;
	font-weight: bolder;
}

#input_comuna {
	margin: 0px 10px;
}

.separador{
	margin: 20px;
}

h5 {
	margin-bottom: 30px;
}
</style>
