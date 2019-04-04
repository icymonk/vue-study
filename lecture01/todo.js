new Vue({
  el: "#app",
  data: function() {
    return {
      input: "",
      id: 0,
      todoList: []
    };
  },
  methods: {
    createTodo: function() {
      if (!this.input) return;

      this.todoList.push({
        id: this.id++,
        text: this.input,
        done: false
      });

      this.input = "";
    },
    clickTodo: function(todo) {
      todo.done = !todo.done;
    },
    deleteTodo: function(index) {
      this.todoList.splice(index, 1);
    },
    todoClass: function(todo) {
      return {
        done: todo.done,
        "list-item": true
      };
    }
  },
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  }
});
