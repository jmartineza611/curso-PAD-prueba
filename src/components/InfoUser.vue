<template>
  <div>
    <h1>Nombre: {{name}} </h1>
    <h2>Trabajo: {{job}} </h2>
  </div>
</template>

<script>
import UserService from '@/services/getUserService'

export default {
  name: 'if',
  data() {
    return{
      name: '',
      job: ''
    }
  },
  methods: {
    async traerUser() {
      const resp = await UserService.getUser()
      this.name = resp.data.name
      this.job = resp.data.job
    }
  },
  mounted(){
    this.traerUser()
  }
}
</script>

