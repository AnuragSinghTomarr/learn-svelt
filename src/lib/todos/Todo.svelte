<script>
  import { afterUpdate, onMount } from "svelte";
  import AddTodo from "./AddTodo.svelte";
  import TodoList from "./TodoList.svelte";
  import { produce } from "immer";
  import api from "../../utils/api";

  let todos = [];

  let addTodoComponentRef = null;

  let prevTodoLength = todos.length;

  async function addTodo(customEvent) {
    if (customEvent.detail.value) {
      const response = await api("http://localhost:8080/todos", {
        method: "POST",
        body: JSON.stringify({ title: customEvent.detail.value, action: 'add' }),
      });
      todos = produce(todos, (draftState) => {
        draftState.push(response.data[response.data.length - 1]);
        // draftState.push({ id: uuid(), title: customEvent.detail.value, compleated: false});
      });
    }
    addTodoComponentRef.clearInput();
  }

  function onComplete(customEvent) {
    const index = customEvent.detail.index;

    if (index) {
      todos = produce(todos, (draftState) => {
        draftState[index].compleated = !draftState[index].compleated;
      });
    }
  }

  async function onRemove(customEvent) {
    const index = customEvent.detail.index;
    if (customEvent.detail.index) {
      const response = await api("http://localhost:8080/todos", {
        method: "DELETE",
        body: JSON.stringify({ id: customEvent.detail.id, action: 'delete' }),
      });
      if (response.status === 1) {
        todos = [
          ...todos.slice(0, index),
          ...todos.slice(index + 1)
        ];
      }
    }
  }

  function scrollToAddedTodo(canScroll = false) {
    const ele = document.querySelector('.listwpr');
    const scrollHeight = ele.scrollHeight;

    if (canScroll) {
      ele.scrollTo(0, scrollHeight);
    }
  }

  afterUpdate(() => {
    if (todos.length > prevTodoLength) {
      scrollToAddedTodo(true);
      prevTodoLength = todos.length;
    }
  });

  onMount(async () => {
    const response = await api("http://localhost:8080/todos");

    todos = response.data && response.data.length > 0 ? response.data : [];
    console.log('todos', response);
  });
</script>

<!-- Markup starts  -->
<div class="container">
  <TodoList
    {todos}
    on:todo-toggle={onComplete}
    on:remove-todo={onRemove}
  />
  <AddTodo bind:this={addTodoComponentRef} on:button-click={addTodo} />
</div>
<!-- Markup ends  -->

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 16px;
    background-color: #9EB384;
    box-shadow: 5px 4px 5px #435334, 0px 0px 0px #435334;
    padding: 20px;
    color: #ffffff;
    min-width: 50%;
  }
</style>
