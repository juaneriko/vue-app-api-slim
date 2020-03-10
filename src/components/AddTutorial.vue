<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="tutorial.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="tutorial.email"
          name="email"
        />
      </div>

	<div class="form-group">
	<label for="password">Password</label>
	<input
		class="form-control"
		id="password"
		required
		v-model="tutorial.password"
		name="password"
	/>
	</div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

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
