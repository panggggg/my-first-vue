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
            this.studentInfo =  info.filter((info) => info.id === this.$route.params.id,
                                                    info.Fname === this.$route.params.name,
                                                    info.Lname === this.$route.params.last,
                                                    info.gender === this.$route.params.gender,
                                                    info.Lv === this.$route.params.lv
                                                    )
        })
        .catch(err => console.log(err.message));

    }
}
</script>

<style>

</style>