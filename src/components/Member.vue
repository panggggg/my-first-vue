<template>
    <div class="member">
        <h1 v-bind:style="{'background-color' : '#A78474', 'color': 'white'}">หญิงเองก็ลำบากกว่า</h1>
        <div class="container">
                <b-container>
                <b-row>
                    <b-col>
                        <b-form inline>
                        <label class="mr-sm-2" for="inline-form-custom-select-pref">คำนำหน้า</label>
                        <b-form-select v-model="data.pre" size="sm">
                            <option v-for="(data, index) in pres" v-bind:key="index">{{data}}</option>
                        </b-form-select>
                    </b-form>
                    </b-col>
                    <b-col>
                        <div class="input-group mb-3 mr-4">
                        <span><label for="" class="mr-2">ชื่อ</label></span>
                        <b-form-input id="input-small" size="sm" placeholder="Enter your firstname" v-model="data.firstName"></b-form-input>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="input-group mb-3">
                        <span><label for="" class="mr-2">นามสกุล</label></span>
                        <b-form-input id="input-small" size="sm" placeholder="Enter your lastname" v-model="data.lastName"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="input-group mb-3">
                        <span><label for="" class="mr-2">ชื่อเล่น</label></span>
                        <b-form-input id="input-small" size="sm" placeholder="Enter your Nickname" v-model="data.nickName"></b-form-input>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="input-group mb-3">
                        <span><label for="" class="mr-2">รหัสนิสิต</label></span>
                        <b-form-input id="input-small" size="sm" placeholder="Enter your id" v-model="data.id"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <div>
                <b-button variant="outline-success" size="sm" @click="save()">Save</b-button>
            </div>
            <div :hidden="!showData" class="m-3">
                 <b-table striped hover :items="memberInfo" table-variant="info"></b-table>
        </div>
            </div>
    </div>
</template>

<script>
export default{
    name: "Member",
    data() {
        return {
            data : {
                id: null,
                pre: null,
                firstName: null,
                lastName: null,
                nickName: null,
            },
            showData: false,
            pres : ["นาย", "นางสาว"],
            memberInfo : []
        };
    },
    methods : {
        save() {
            this.memberInfo.push(this.data)
            this.showData = true
            this.data = {
                id: null,
                pre: null,
                firstName: null,
                lastName: null,
                nickName: null,
            }
            console.log(this.data.gender)
        } 
    }
}
</script>

<style>
.member {
    background-color: #E5E1D2;
    padding: 80px;
}
</style>