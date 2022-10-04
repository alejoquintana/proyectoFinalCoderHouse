const URL = 'https://632ba0ac5568d3cad872d716.mockapi.io/products';
import axios from 'axios'

export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		getProducts(state) {
			return state.products
		},
	},
	mutations: {
		setProducts(state, payload) {
			state.products = payload
		},
	},
	actions: {
		/* async fetchProducts() {
			carrito.forEach(async (element) => {
			await axios.get('url/id')
			.then((response) => {
					if (element.price > 1000	) {
						await commit('SET_PRODUCTS', response.data)
					}
				});
			})
			.catch((err) => {
				alert(err)
			})
			//.finally(() => console.log('Peticion terminada'))
		}, */
		async fetchProducts({commit}) {
			await axios.get(URL)
				.then((response) =>{
					commit('changeState', {
						products:response.data
					})
				})
				.catch((err) => {
					console.log('error', err)
				})
			//.finally(() => console.log('Peticion terminada'))
		}
	},
}