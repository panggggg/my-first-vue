<template>
    <div class="employee">
        <h1>Employee</h1>
        <div class="container">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">EmployeeID</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model=info.EmployeeID>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Firstname</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model=info.firstName>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Lastname</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model=info.lastName>
            </div>

            <div class="mb-3 mt-3" v-bind:key=index v-for="(data, index) in gender">
                <input type="radio" class="btn-check m-3" name="options" :id="index" autocomplete="off" v-model="info.gender" :value="data.value">
                <label class="btn btn-secondary" for="male" v-bind:style="{'color': data.color}">{{data.label}}</label>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time In</span>
            <b-form-timepicker v-model="info.timeIn" locale="en"></b-form-timepicker>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time Out</span>
            <b-form-timepicker v-model="info.timeOut" locale="en"></b-form-timepicker>
            </div>

            <b-button variant="success" type="button" @click="save()" >Save</b-button>

            <div :hidden="!show" class="m-3">
                <b-table striped hover :items="employeeInfo"></b-table>
            </div>

        </div>
    </div>
</template>

<script>

import moment from 'moment'

export default {
    name: "Employee",
    data() {
        return {
            info : {
                EmployeeID : null,
                firstName: null,
                lastName: null,
                gender: null,
                timeIn: null,
                timeOut: null,
                active: false
            },
            show: false,
            gender: [
                {
                    label : 'Male',
                    value : 'M',
                    color : '#62A8F4'
                },
                {
                    label : 'Female',
                    value : 'F',
                    color : 'pink'
                },
            ],
            employeeInfo: []

        };
    },
    methods: {
        save(){
            this.employeeInfo.push(this.info)
            this.checkActiveTime()
            this.show = true
            this.info = {
                EmployeeID : null,
                firstName: null,
                lastName: null,
                gender: null,
                timeIn: null,
                timeOut: null,
                active: false
            }
            console.log(this.employeeInfo)
        },
        checkActiveTime() { 
            const today = new Date()
            const time = moment(today, 'HH:mm')

            if(moment(this.info.timeIn, 'HH:mm').isBefore(time) && moment(time, 'HH:mm').isBefore(moment(this.info.timeOut, 'HH:mm'))){
                this.info.active = true
            }
            this.info.active = false
        
            console.log(moment(this.info.timeIn, 'HH:mm').isBefore(time)) //check timein before timeout
            console.log(moment(time, 'HH:mm').isBefore(moment(this.info.timeOut, 'HH:mm'))) //check timeout
            
        }
    },
}



</script>

<style>
.employee {
    background-color: #CB9BDF;
    padding: 10px;
}
</style>
