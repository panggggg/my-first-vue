<template>
  <div id ="hello2">
        <h1>Faculty: {{ myFaculty }}</h1>
        <h1>Major1 : {{ major1 }}</h1>
        <h1>Major2 : {{ major2 }}</h1>
        <b-button variant="info">Click me</b-button>
        <br/>
        <i class="fas fa-bone"></i>
  </div>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      myFaculty : "Science",
      major1: "Information Technology",
      major2: "Computer Science"
    };
  }
}
</script>

<style>

#hello2 {
  background-color: palevioletred;
  color: white;
}

</style>