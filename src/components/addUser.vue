<template src="@/templates/userAdd.html"> </template>

<script>
import UserDataService from "../services/userDataService";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        name: "",
        email: "",
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        name: this.user.name,
		email: this.user.email,
		password: this.user.password
      };

      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.message.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
