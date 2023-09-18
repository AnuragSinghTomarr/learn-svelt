<script>
  import { afterUpdate } from "svelte";
  import AddTodo from "./AddTodo.svelte";
  import TodoList from "./TodoList.svelte";
  import { v4 as uuid } from "uuid";

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

  let addTodoComponentRef = null;

  let prevTodoLength = todos.length;

  function addTodo(customEvent) {
    if (customEvent.detail.value) {
      todos = [...todos, { id: uuid(), title: customEvent.detail.value, compleated: false}];
    }
    addTodoComponentRef.clearInput();
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

  function onRemove(customEvent) {
    const index = customEvent.detail.index;
    if (customEvent.detail.index) {
      todos = [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
      ];
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