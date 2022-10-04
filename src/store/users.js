export default {
	state: {
		logged:{
			"email": "alejo@admin.com",
			"name": "Alejo",
			"password": "admin",
			"admin": true,
			"id": "1"
		}
	},
	getters: {
		getUser(state){
			return state.logged
		},
		getAdmin(state){
			return state.logged.admin
		}
	},
	mutations: {
	},
	actions: {
		/* async login({},data){

		},
		async register({},data){

		} */
	}
}