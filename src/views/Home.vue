<template>
	<div class="row">
		<div class="col-3" v-for="product in getProducts" :key="product.id" >
			<ProductsCard :product="product" />
		</div>
	</div>
</template>

<script>
import ProductsCard from '@/components/Products/ProductsCard.vue'
import { mapGetters } from "vuex";
export default {
	name: 'HomeView',
	components: {
		ProductsCard
	},
	computed:{
		...mapGetters('products', [ 'getProducts' /*, 'otroGetter'*/]),
		products(){
			return this.$store.getters['products/getProducts']
		},
	},
	mounted(){
		this.$store.dispatch('products/fetchProducts')
	}
}
</script>
