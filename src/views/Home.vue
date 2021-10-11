<template>
  <div class="home">
    <div>
      <h1>Home</h1>
      <div class="container">
      <!-- <form> -->
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">ID</label>
          <input 
            type="text" 
            class="form-control" 
            id="exampleInputPassword1"
            placeholder="ID"
            v-model="id">
        </div>
        <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
      <!-- </form> -->
      </div>
      <br>
      <div class="container">
      <b-table striped hover :items="users"></b-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
    data() {
      return {
        id : null
      };
    },
    methods: {
      addUser(){
        this.$store.dispatch('setCurrentUser', this.id);
      }
    },
    computed: {
      users(){
        console.log(this.$store.getters.getUser)
        return this.$store.getters.getUser
      }
    }
}
</script>
