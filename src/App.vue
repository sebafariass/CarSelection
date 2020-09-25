<template>
	<div id="app">
		<div id="Nav-bar">
			<router-link to="/">Inicio</router-link> |
			<router-link :to="{ name: 'History' }">Historia</router-link> |
			<router-link :to="{ name: 'Contacto' }">Contactanos</router-link> |
			<router-link :to="{ name: 'Datos' }">Datos de vehiculos</router-link> |
			<router-link to="/post/1">Última Pagina</router-link> |
		</div>
	
			
	<div>
			<transition name="transition_text">
				<router-view></router-view>
			</transition>
		</div>

	</div>
	

	
</template>


<style lang="scss">
*{
	margin: 0;
	padding: 0;
}

#app {
   font-family: 'Epilogue', sans-serif;
	text-align: center;
	color: #2c3e50;
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

#Nav-bar {
  background-color: black;
	padding: 30px;
	text-align: right;

	a {
		font-weight: bold;
		color:white;

		
	}
}
.transition_text-enter-active {
	transition: all 2s ease;
}

.transition_text-enter,
.transition_text-leave-to {
	transform: translateY(80px);
	opacity: 0;
}

</style>
