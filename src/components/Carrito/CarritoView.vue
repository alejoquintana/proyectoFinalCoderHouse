<template>
	<div>
		<div v-for="item,i in carrito" :key="i">
			<div class="d-flex justify-content-between border">
				{{item.product.name}}
				<ShopButton class="w-25" :product="item.product" />
				{{item.product.price*item.count}}
			</div>
		</div>
	</div>
</template>

<script>
import ShopButton from "@/components/Products/ShopButton.vue";
export default {
	components:{
		ShopButton
	},
	data() {
		return {
			
		}
	},
	computed: {
		carrito(){
			return this.$store.getters['carrito/getCarrito']
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>

</style>