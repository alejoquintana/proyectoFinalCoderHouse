<template>
	<div id="app" class="d-flex mt-0">
		<NavBar />
		<div class="container">
			<div>
				<h1 class="my-4 fw-bold text-center">
					<span class="fa-solid fa-burger"></span>
					CODERCOMIDAS
				</h1>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import NavBar from "./components/Layout/NavBar.vue";

export default {
	name: "App",
	components: {
		NavBar,
	},
	data() {
		return {
		};
	},
	computed: {
		total() {
			let res = 0;
			this.carrito.forEach((item) => {
				res += item.product.price * item.count;
			});
			return res;
		},
	},
	methods: {
	},
};
</script>

<style scoped>
.border-green {
  border-top: 2px solid #9fff31;
}
.total-bouncer {
	border-radius: 48px;
	z-index: 99;
	color: #fff;
	font-weight: bold;
	font-size: 32px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: fit-content;
}
.tent-logo {
  width: 100px;
  border-radius: 12px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
