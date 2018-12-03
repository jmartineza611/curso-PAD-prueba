<template>
  <div>
    <h1>Nombre: {{name}} </h1>
    <h2>Trabajo: {{job}} </h2>
    <b-container class="bv-example-row">
      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="4">
          <b-form-input v-model="form.name"
                        type="text"
                        placeholder="Introduce tu nombre"></b-form-input>
          <b-form-input v-model="form.job"
                        type="text"
                        placeholder="Introduce tu empleo"></b-form-input>
          <b-button class="mt-5" @click="agregarUsuario()"> Agregar Usuario</b-button>
        </b-col>
        <b-col lg="4"></b-col>
      </b-row>
    </b-container>
    <b-table class="mt-5" hover :items="users"></b-table>
  </div>
</template>

<script>
import UserService from '@/services/getUserService'

export default {
  name: 'if',
  data() {
    return{
      name: '',
      job: '',
      form: {
        name: '',
        job: ''
      },
      users: []
    }
  },
  methods: {
    async traerUser() {
      const resp = await UserService.getUser()
      this.users = resp.data.users
    },
     async agregarUsuario() {
      const response = await UserService.addUser(this.form)
      alert(response.data.message)
    }
  },
  mounted(){
    this.traerUser()
  }
}
</script>
