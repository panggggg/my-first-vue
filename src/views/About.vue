<template>
  <div class="about">
    <h1>My Data</h1>
    <div class="container">
      <b-table striped hover :items="allUsers"></b-table>
      </div>
      <button type="submit" class="btn btn-success" @click="add" >+ {{ counter }}</button>
      <!-- <button type="submit" class="btn btn-success" @click="addReactive" >- {{ counterReactive.ct }}</button> -->
  </div>
</template>

<script>

// import { ref, reactive } from '@vue/composition-api'
import counters from './Counter'

export default {
  name : 'About',
  setup(){

    const {counter, add} = counters.counterIncrement(10)
    return { counter, add }

    // const counter = ref(0);
    // function add(){
    //   counter.value++;
    // }

    // const counterReactive = reactive({ct:100});
    // function addReactive(){
    //   counterReactive.ct--;
    // }

    // return { counter, add, counterReactive, addReactive}
  },
  data() {
    // return {
    //   counter : 0
    // };
  },
  methods: {
    allUsers(){
      return this.$store.getters.getAllUsers
    },
    // add(){
    //   this.counter++
    // }
  }
}
</script>

