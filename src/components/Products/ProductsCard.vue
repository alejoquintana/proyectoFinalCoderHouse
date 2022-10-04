<template>
	<div class="border p-3 mb-4">
		<p class="mb-0 bold">{{product.name}}</p>
		<div class="relative my-2">
			<img class="w-100" :src="product.img | url">
			<span class="sign px-2 py-1 bold">
				${{product.price}}
			</span>
		</div>
		<ShopButton :product="product"/>
	</div>
</template>

<script>
import ShopButton from "./ShopButton";
export default {
	components: { ShopButton },
	props: {
		product: Object,
	},
};
</script>

<style scoped>
.border {
	border-radius: 12px;
}
.sign{
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-color: #9fff31;
	border-radius: 12px;
}
</style>