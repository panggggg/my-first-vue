<template>
  <div class="container">
      <h1>All Student</h1>
      <div class="container">
      <b-table striped hover :items="allStudents"></b-table>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        allStudents(){
            return this.$store.getters.getAllStudents
        }
    }
}
</script>

<style>

</style>