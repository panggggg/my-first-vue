<template>
    <div>
        <h1>Search Page</h1>
        <div>
            <b-table :items="studentInfo"></b-table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name : "Page1",
    data() {
        return{
            studentInfo : []
        }
    },
    mounted() {
        axios
        .get('https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8')
        .then(res => {
            const info = res.data
            this.studentInfo = info.filter(id => id.Fname.includes(this.$route.params.id))
            this.studentInfo = info.filter(name => name.Fname.includes(this.$route.params.name))
            this.studentInfo = info.filter(last => last.Lname.includes(this.$route.params.last))
            this.studentInfo = info.filter(lv => lv.Lv.includes(this.$route.params.lv))
            this.studentInfo = info.filter(gender => gender.gender.includes(this.$route.params.gender))
        })
        .catch(err => console.log(err.message));

    }
}
</script>

<style>

</style>