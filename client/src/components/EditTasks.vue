<template>
  <div>
    <h6>Edit Task Interface</h6>
    <div id="custom-form">
      <section class="form">
        <div class="field">
          <label for="tasks_name">Task Name</label>
          <input v-model="form.tasks_name" type="text" id="tasks_name" />
        </div>
        <div class="field">
          <label for="tasks_project">Project Name</label>
          <input v-model="form.tasks_project" type="text" id="tasks_project" />
        </div>
        <div class="field">
          <label for="tasks_time">Est. Hours</label>
          <input v-model="form.tasks_time" type="text" id="tasks_time" />
        </div>
        <div class="field">
          <label for="tasks_owners">Owner</label>
          <input v-model="form.tasks_owners" type="text" id="tasks_owners" />
        </div>
        <div class="field">
          <label for="tasks_duedate">Dute Date</label>
          <input v-model="form.tasks_duedate" type="text" id="tasks_duedate" />
        </div>
        <div class="field">
          <label for="task_status">Status</label>
          <select v-model="form.task_status" id="task_status">
              <option>Completed</option>
              <option>In Progress</option>
              <option>Not Started</option>
          </select>
        </div>
      </section>
    </div>
    <button @click="home">Back</button> <button @click="submit">Submit</button>
  </div>
</template>
<script>
import Tasks from "@/services/Tasks";
export default {
  methods: {
    home() {
      this.$router.go(-1);
    },
    async submit() {
      console.log(this.form);
      const response = await Tasks.set_task_byid(this.$route.params.id,this.form);
      console.log(response);
      window.location.href = "/tasks/view/" + this.form.tasks_owners;
    },
    date_formater(value) {
      let current_datetime = new Date(value);
      let formatted_date =
        current_datetime.getMonth() +
        "-" +
        (current_datetime.getDate() + 1) +
        "-" +
        current_datetime.getFullYear();
      return formatted_date;
    },
  },
  async mounted() {
    const response = await Tasks.get_task_byid(this.$route.params.id);
    if(response.length >= 1){
      this.form.tasks_name = response[0].tasks_name;
      this.form.tasks_project = response[0].tasks_project;
      this.form.tasks_time = response[0].tasks_time;
      this.form.tasks_owners = response[0].tasks_owners;
      this.form.tasks_duedate = this.date_formater(response[0].tasks_duedate);
      this.form.task_status = response[0].task_status;
    }
  },
  data: function() {
    return {
      form: {
        tasks_name: "",
        tasks_project: "",
        tasks_time: "",
        tasks_owners: "",
        tasks_duedate: "",
        task_status: ""
      }
    };
  }
};
</script>

<style>
#custom-form {
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  width: 410px;
  align-content: right;
  margin-bottom: 30px;
}
#custom-form input, #custom-form select {
    width: 200px;
    margin-left: 10px;
}
#custom-form label {
    width: 200px;
}
</style>