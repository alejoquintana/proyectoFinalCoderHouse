<template>
	<div class="fcc m-0">
		<vue-form :state="formState" @submit.prevent="onSubmit">
			<validate class="fc"  :custom="{validator:nameValidator}">
				<span>Email *</span>
				<input type="text" v-model="data.email" required name="email">
				<field-messages>
					<div class="text-success">Correcto!</div>
					<div slot="required">Este campo es obligatorio</div>
					<div slot="validator">Este campo tiene que ser un email</div>
				</field-messages>
			</validate>
			<validate class="fc my-3" :custom="{validator:passwordValidator}">
				<label>Contraseña</label>
				<input type="text" v-model="data.password" required name="password">
				<field-messages>
					<div class="text-success">Correcto!</div>
					<div slot="required">Este campo es obligatorio</div>
					<div slot="validator">Este campo tiene mayor a 8 caracteres</div>
				</field-messages>
			</validate> 
			<button type="submit" class="btn btn-info w-100">ENVIAR!</button>
		</vue-form>


		<br>
		<br>
		invalid: {{formState.$invalid}}
		<br>
		valid: {{formState.$valid}}
		<br>
		submittedState: {{formState.$submittedState}}
	
		<div v-for="(value,key) in formState.$error" :key="key">
			{{key}} : {{value}}
		</div>
		<!-- <div v-for="(value,key) in formState" :key="key">
			{{key}} : {{value}}
		</div> -->
	</div>
</template>

<script>
export default {
	data(){return{
		formState:{},
		data:{
			email:'',
			password:''
		}
	}},
	methods:{
		onSubmit(){
			if (this.formState.$invalid) {
				alert("ERROR EN EL FORMULARIO")
				return
			}
			alert("FORMULARIO ENVIADO")
		},
		passwordValidator: function (value) {
			let res = true
			if (value.length > 8) {
				res = false
			}
			return res;
		},
		nameValidator: function (value) {
			let res = true
			if (!value.includes('@')) {
				res = false
			}
			if (!value.includes('.com')) {
				res = false
			}
			return res;
		}
	},
}
/*
// ...
<validate :custom="{customValidator: customValidator, 'email-available': isEmailAvailable}">
  <input v-model="something" name="something" />
  <!--
    slot name inside field-messages would be: <div slot="customValidator">...</div>
  -->
</validate>
 
//...
 
methods: {
  customValidator: function (value) {
    // return true to set input as $valid, false to set as $invalid
    return value === 'custom';
  }
},
computed: {
  isEmailAvailable: function () {
    // return true to set input as $valid, false to set as $invalid
  }
}

*/
</script>

<style scoped>
</style>
