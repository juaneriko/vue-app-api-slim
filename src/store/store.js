import Vuex from 'vuex'
import Vue from 'vue'
import UserDataService from "../services/userDataService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [] 
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    LOAD_USERS(state,users) {
        state.users = users
       
      }
      
    // LOAD_USERS: (state, { list }) => {
    //     state.users = list
    //   }
  },
  
  actions: {
    loadUsers(context) {
        UserDataService.getAll()
        .then(response => {
           context.commit('LOAD_USERS', response.data.message)
       
          console.log(response.data.message);
        })
        .catch(e => {
          console.log(e);
        });
      }

    // loadUsers: function ({ commit }) {
    //     UserDataService.getAll()
    //     .then(response => {
    //        commit('LOAD_USERS', { list: response.data.message })
    //        console.log(response.data.message);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    //   }


  }
});