<template>
  <div>
    <h6>Tasks for {{ this.$route.params.user }}</h6>
    <div>
      <b-table
        small
        striped
        hover
        :items="items"
        :fields="fields"
        responsive="sm"
      >
        <template v-slot:cell(_id)="data">
          <b-button size="sm" @click="delete_record(data.item._id)">
            Delete
          </b-button>
        </template>
        <template v-slot:cell(tasks_name)="data">
          <a :href="`/tasks/edit/${data.item.tasks_owners}/${data.item._id}`">{{
            data.item.tasks_name
          }}</a>
        </template>
      </b-table>
    </div>
    <button @click="home">Back to Task Overview</button>
  </div>
</template>

<script>
import Tasks from "@/services/Tasks";
export default {
  methods: {
    home() {
      window.location.href = "/";
    },
    edit_task(key, value) {
      console.log(key);
      return `${value._id} ${value.tasks_name}`;
    },
    date_formater(value) {
      let current_datetime = new Date(value);
      let formatted_date =
        current_datetime.getDate() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getFullYear();
      return formatted_date;
    },
    async delete_record(value){
      await Tasks.del_tasks(value);
      this.$router.go(0);
    }
  },
  async created() {
    const response = await Tasks.get_tasks(this.$route.params.user);
    this.items = response;
  },
  data: function() {
      return {
        fields: [
            { key: "_id", label: ""},
            { key: "tasks_name", label: "Edit"},
            { key: "tasks_project", label: "Project"},
            { key: "task_status", label: "Status", sortable: true },
            { key: "tasks_time", label: "Est. Hours", sortable: true },
            {
              key: "tasks_duedate",
              label: "Due Date",
              sortable: true,
              formatter: "date_formater"
            }
        ],
        items: []
      };
  }
};
</script>

<style>
.table-responsive-sm {
  width: 1024px;
  margin-right: auto;
  margin-left: auto;
}
</style>
