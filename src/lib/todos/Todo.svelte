<script>
  import AddTodo from "./AddTodo.svelte";
  import TodoList from "./TodoList.svelte";
  import { v4 as uuid } from "uuid"

  let todos = [
    {
      id: uuid(),
      title: 'Todo 1',
      compleated: true,
    },
    {
      id: uuid(),
      title: 'Todo 2',
      compleated: false,
    },
    {
      id: uuid(),
      title: 'Todo 3',
      compleated: false,
    }
  ];

  function addTodo(customEvent) {
    if (customEvent.detail.value) {
      todos = [...todos, { id: uuid(), title: customEvent.detail.value, compleated: false}];
    }
  }

  function onComplete(customEvent) {
    const index = customEvent.detail.index;
    const target = {
      ...todos[index],
      compleated: !todos[index].compleated,
    };
    if (customEvent.detail.index) {
      todos = [
        ...todos.slice(0, index),
        target,
        ...todos.slice(index + 1)
      ];
    }
  }
</script>

<!-- Markup starts  -->
<div class="container">
  <TodoList {todos} on:todo-toggle={onComplete} />
  <AddTodo on:button-click={addTodo} />
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