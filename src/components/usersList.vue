<template src="@/templates/userList.html"> </template>

<script>
import {mapState,mapActions} from "vuex";
import UserDataService from "../services/userDataService";

export default {
  name: "users-list",
  data() {
    return {
      // users: [],
      currentUser: null,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    ...mapActions(['loadUsers']),

    retrieveUsers() {
      // UserDataService.getAll()
      //   .then(response => {
      //     this.users = response.data.message;
      //     console.log(response.data.message);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
      //this.users = this.$store.dispatch('loadUsers');

        this.$store.dispatch('loadUsers')
        // .then((response) => {
        //     this.users  = response.data
        // })

      //this.users = this.loadUsers();
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(tutorial, index) {
      this.currentUser = tutorial;
      this.currentIndex = index;
    },

    removeAllUsers() {
      UserDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchName() {
      UserDataService.findByName(this.name)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed:{
    ...mapState(['users']),
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
