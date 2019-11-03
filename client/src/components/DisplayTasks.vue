<template>
  <div>
    <h1>Tasks</h1>
    <button
      @click="home">Back to Tasks Overview</button>
  </div>
</template>

<script>
import Tasks from '@/services/Tasks'
export default {
  methods: {
    async gettasks () {
      const response = await Tasks.get_tasks()
      console.log(response.data)
    },
    home () {
      window.location.href = '/';
    }
  }
}
</script>