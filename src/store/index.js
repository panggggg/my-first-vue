import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const headers = { Accecpt : "application/json" }

export default new Vuex.Store({
  state: {
    currentUser : [],
    allUsers : [],
    student: [],
    allStudents: []
  },
  mutations: {
    setCurrentUser(state, payload) {
      if(state.currentUser.length > 0){
        state.currentUser.pop()
      }
      state.currentUser.push(payload)
      state.allUsers.push(payload)
    },
    setStudent(state, data){
      state.student.push(data)
      state.allStudents.push(data)
    }
  },
  actions: {
    async setCurrentUser(state, payload){
      const user = await fetch(url + payload, { headers })
      const data = await user.json()
      state.commit('setCurrentUser', data)
    },
    setStudent(state, data){
      state.commit('setStudent', data)
    }
  },
  getters: {
    getUser : state => state.currentUser,
    getAllUsers : state => state.allUsers,
    getStudent: state => state.student,
    getAllStudents: state => state.allStudents
  },

})
