<template>
    <div class="student">
        <form @submit="checkForm">

            <p v-if="conditions.length">
                <ul>
                    <li v-for="error in conditions" :key="error" style="color:red">{{error}}</li>
                </ul>
            </p>

            <input class="m-3" type="text" v-model="id" placeholder="Student Id"/>
            <br>
            <input class="m-3" type="checkbox" v-model="gender" value="Male"/> Male
            <input class="m-3" type="checkbox" v-model="gender" value="Female"/> Female
            <br>
            <input class="m-3" type="text" v-model="firstName" placeholder="Firstname" required/>
            <input class="m-3" type="text" v-model="lastName" placeholder="Lastname" required/>
            <br>
            <textarea class="m-3" v-model="introduce" placeholder="Introduce yourself"/>
            <br>
            <input class="m-3" type="radio" v-model="picked" value="one"/> จบการศึกษา
            <input class="m-3" type="radio" v-model="picked" value="two"/> กำลังศึกษา
            <br>
            <select v-model="selected">
                <option value="">Select one</option>
                <option v-for="option in options" :key="option" :value="option.value">{{option.text}}</option>
            </select>
            <br>
            <input type="submit" value="Submit"/>
            <br>
        </form>
        <b-button variant="warning" @click="allInfo">ดูรายชื่อทั้งหมด</b-button>
    </div>
</template>

<script>

import Router from 'vue-router'

const router = new Router({
    mode: "history"
})

export default {
    name: "Student",
    data () {
        return {
            id : null,
            firstName : null,
            lastName : null,
            introduce : null,
            gender : [],
            picked : null,
            selected : "",
            options : [
                {
                    text: "ชั้นปีที่ 1",
                    value: 1
                },
                {
                    text: "ชั้นปีที่ 2",
                    value: 2
                },
                {
                    text: "ชั้นปีที่ 3",
                    value: 3
                },
                {
                    text: "ชั้นปีที่ 4",
                    value: 4
                },

            ],
            conditions : []
        }
    },
    methods: {
    checkForm(e) {
      if (!this.id) {
        this.conditions.push("*Please input your studentID");
      } else {
          router.push(`/page1/${this.id}/${this.firstName}/${this.lastName}/${this.selected}/${this.gender}`)
          router.go()
      }

      console.log(this.selected)
      e.preventDefault();
    },
    allInfo() {
        router.push(`/page2`)
        router.go()
    }
  },
}

</script>

<style>
.student {
    background-color: darkseagreen;
    color: black;
    padding: 50px;
}
</style>