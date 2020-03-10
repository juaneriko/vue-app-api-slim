<template src="@/templates/userAdd.html"> </template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        name: "",
        email: "",
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        name: this.tutorial.name,
		email: this.tutorial.email,
		password: this.tutorial.password
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.message.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
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
