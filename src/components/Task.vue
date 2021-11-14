<template>
  <div class="container-fluid basic">
    <div class="col">
      <h2 class="text-dark">Todo App</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          v-model="task"
          v-on:keyup.13="handleClick"
          placeholder="Add Your New Todo"
          class="form-control"
        />
        <div class="input-group-append">
          <button @click.prevent="handleClick" class="btn btn-info">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <ul class="list-group">
        <li
          v-for="(demo, index) in myData"
          :key="index"
          class="list-group-item list-group-item-info mb-1"
        >
          <div class="row">
            <div class="col-10">
              {{ demo }}
            </div>
            <div class="col-2">
              <button class="btn btn-danger" @click="deleteTask(demo)">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item list-group-item-info mb-1">
          <div class="row">
            <div class="col-8">
              You have {{ this.$store.state.tasks.length }} Tasks
            </div>
            <div class="col">
              <button class="btn-sm btn-info" @click="clearAll">
                Clear All
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
  name: "Task",
  components: {},
  data() {
    return {
      task: "",
    };
  },
  methods: {
    editTask(demo) {
      this.task = demo;
    },
    handleClick() {
      if (this.task.length < 3) {
        alert("Please Write Task Name");
        return;
      }

      this.$store.dispatch("addTask", this.task);
      this.task = "";
    },
    deleteTask(demo) {
      this.$store.dispatch("deleteTask", demo);
    },
    clearAll() {
      this.$store.dispatch("clearAll");
    },
  },
  computed: {
    ...mapState({
      myData: (state) => state.tasks,
    }),
  },
};
</script> 

<style lang="stylus" scoped>
.basic {
  background-color: #fff;
  margin-top: 50px;
  border-radius: 5px;
  padding: 20px 10px;
}
</style>