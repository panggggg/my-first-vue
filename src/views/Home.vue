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
    <div class="container">
      <h1>Student Info</h1>
       <div class="input-group mb-3">
                <span class="input-group-text" >Student ID</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Student ID" v-model=studentInfo.studentID>
      </div>
      <div class="input-group mb-3">
                <span class="input-group-text" >Firstname</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Firstname" v-model=studentInfo.firstName>
      </div>
      <div class="input-group mb-3">
                <span class="input-group-text" >Lastname</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Lastname" v-model=studentInfo.lastName>
      </div>
      <div class="input-group mb-3">
                <span class="input-group-text" >Level</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Level" v-model=studentInfo.level>
      </div>
        <button type="submit" class="btn btn-primary" @click="addStudent">Add</button>
    </div>
    <div class="container">
      <b-table striped hover :items="student"></b-table>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
    data() {
      return {
        id : null,
        studentInfo : {
          studentID: '',
          firstName: '',
          lastName: '',
          level: ''
        }
      };
    },
    methods: {
      addUser(){
        this.$store.dispatch('setCurrentUser', this.id);
      },
      addStudent(){
        this.$store.dispatch('setStudent', this.studentInfo)
      }
    },
    computed: {
      users(){
        console.log(this.$store.getters.getUser)
        return this.$store.getters.getUser
      },
      student(){
        return this.$store.getters.getStudent
      }
    }
}
</script>
