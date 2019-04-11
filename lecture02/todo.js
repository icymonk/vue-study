Vue.component("v-button", {
  template: `
    <button :style="{ color: color }" @click="$emit('on-click')">
      {{ text }}
    </button>
  `,
  props: ["text", "color"]
});

Vue.component("v-modal", {
  template: `
    <div class="modal" v-show="modalShow">
      <input type="text" v-model="input" @keypress.enter="saveTodo" />
      <button @click.stop="saveTodo">SAVE</button>
      <button @click.stop="toggleModal">CANCEL</button>
    </div>
  `,
  props: ["modalShow", "editedTodo"],
  data: function() {
    return {
      input: ""
    };
  },
  methods: {
    saveTodo: function() {
      this.$emit("save-todo", this.input);
    },
    toggleModal: function() {
      this.$emit("toggle-modal");
    }
  },
  watch: {
    modalShow: function() {
      console.log(this.editedTodo);
      this.input = this.editedTodo;
    }
  }
});

new Vue({
  el: "#app",
  data: function() {
    return {
      input: "",
      id: 0,
      todoList: [],
      modalShow: false,
      editedTodo: "",
      editedTodoId: -1,
      color: "green"
    };
  },
  methods: {
    toggleModal: function() {
      this.modalShow = !this.modalShow;
    },
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
    },
    openModal: function(todo, index) {
      console.log("open modal", todo, index);
      this.modalShow = true;
      this.editedTodoId = index;
      this.editedTodo = todo.text;
      // this.editedTodo = Object.assign({}, todo);
    },
    saveTodo: function(input) {
      this.todoList[this.editedTodoId].text = input;
      this.modalShow = false;
    }
  },
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  }
});
