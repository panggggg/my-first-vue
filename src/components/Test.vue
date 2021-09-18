<template>
    <div id="test" :class=color>
        <p>Hello World</p>
        <img v-bind:src= imgURL />
        <span/> Celcius : {{celcius}}
        <span/> Fahrenheit : {{fahrenheit}}
        <p>Random : {{show}}</p>
        <b-button variant="info" type="button" v-on:click="alertMsg('D', 'F', $event)">Click</b-button>
        <span/>  <b-button variant="dark" type="button" @click="alertMsg()">Click</b-button>
        <span/>  <b-button variant="success" type="button" @dblclick="logName()">Click</b-button>
        <div class="info">
            <div class="card">
                <div class="class-header">
                    Name: {{ myInfo.myName }}
                    <span/> <b-button variant="warning" type="button" @click="myShowInfo()">{{ lableButton }}</b-button>
                </div>
                <div class="class-body" v-bind:hidden="!hideShow">
                    Nickname: {{ myInfo.myNickname }}
                    ID: {{ myInfo.myStudentID }}
                </div>
            </div>
        </div>
        <div class="container">
        <p>V-model</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">User</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="userName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="userPass">
            </div>
            <div>
                Show <br>
                User: {{ userName }} <br>
                Password: {{ userPass }}
            </div>
        </div>
        <div class="container">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Color</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="bgColor">
            </div>
            <div v-bind:style="{'background-color': bgColor}">
            Color : {{ bgColor}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name : "Test",
   data() {
       return {
           name: "Pangpicc",
           imgName: "shiba",
           imgURL: "https://stickershop.line-scdn.net/stickershop/v1/sticker/5747085/android/sticker.png;compress=true",
           color: "tmp2",
           celcius: 30,
           data: ["หัว", "ก้อย"],
           text: "click",

           myInfo: {
               myName: "Pawornwan Sriprathung",
               myNickname: "Pang",
               myStudentID: "6130203357"
           },
           hideShow : true,

           userName: null,
           userPass: null,
           bgColor: null
       }
    },
    computed:{
        fahrenheit(){
            let result = (this.celcius * 1.8) + 32;
            return result;
        },
        random(){
            return Math.random() > 0.5 ? 1 : 0
        },
        show(){
            return this.data[this.random]
        },
        lableButton(){
            return this.hideShow ? "Hide" : "Show"
        }
    },
    methods: {
        alertMsg(p1, p2, e){
            alert(`You ${e.type} the button at ${e.clientX}, ${e.clientY}`)
            alert(`parameter ${p1}, ${p2}`)
        },
        logName(){
            console.log("Pawornwan Sriprathung")
        },
        myShowInfo(){
            this.hideShow = !this.hideShow;
        }
    }
};
</script>

<style>
.tmp{
    background-color: black;
    color: white
}
.tmp2{
    background-color: #A2D9CE;
}
.info{
    padding-top: 15px;
    padding-bottom: 15px
}


</style>