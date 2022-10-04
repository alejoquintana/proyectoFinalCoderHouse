import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
//const URL = 'https://632ba0ac5568d3cad872d716.mockapi.io/products';

// MODULOS
import products from "./products";
import carrito from "./carrito";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		str1:"coder",
		str2:"comidas",
	},
	getters: {
		getTitle(state) {
			return state.str1+state.str2
		},
		getCarrito(state) {
			return state.carrito
		},
	},
	mutations: {
		updateCarrito(state,item) {
			let itemExists = false
			state.carrito.forEach((listItem) => {
				if (listItem.product.id == item.product.id) {
					listItem.count += item.sum;
					itemExists = true
				}
			});
			if (!itemExists) {
				state.carrito.push({
					product: item.product,
					count: 1
				});
			}
		},
	},
	actions: {
		async updateCarrito({commit},item) {
			setTimeout(() => {
				commit('updateCarrito',item)
			}, 2000);
		},
	},
	modules: {
		products,
		carrito
	}
})