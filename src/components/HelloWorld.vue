<template>
  <div id ="hello">
    <h1>Name: {{ myName }}</h1>
       <h1>Tel : {{ tel }}</h1>
       <h1>ID : {{ id }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myName : "Pawornwan Sriprathung",
      tel : "0614696233",
      id: "6130203357"
    };
  }
}
</script>

<style>

#hello {
  background-color: blueviolet;
  color: white;
}

</style>