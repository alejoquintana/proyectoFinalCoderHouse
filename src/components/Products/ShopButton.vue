<template>
	<div>
		<button v-if="count <= 0" class="btn w-100 btn-success" @click="count++">
			COMPRAR <span class="fa-solid fa-cart-plus"></span>
		</button>
		<div v-else class="d-flex justify-content-between align-items-center">
			<button class="btn w-25 btn-success" @click="count--">
				<span class="fa-solid fa-minus"></span>
			</button>
			<!-- <span class="h3 fw-bold border-success text-success mb-0">{{count}}</span> -->
			<input type="number" v-model="count" @change="changeCount($event)" class="h3 fw-bold border-success text-success mb-0">
			<button class="btn w-25 btn-success" @click="count++">
				<span class="fa-solid fa-plus"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {product: Object},
	data(){return {
		count:0
	}},
	computed:{
		carrito(){
			return this.$store.getters['carrito/getCarrito']
		},
	},
	methods: {
		changeCount(event){
			this.count = event.target.value
		},
	},
	watch:{
		count(value){
			this.$store.dispatch('carrito/updateCarrito',{
				product:this.product,
				count:value
			})
		}
	},
	mounted(){
		this.count = this.$store.getters['carrito/getCount'](this.product.id)
	}
}
</script>

<style scoped>
input{
    width: 45%;
    text-align: center;
    border: 2px solid #88888888;
    border-radius: 0.375rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
