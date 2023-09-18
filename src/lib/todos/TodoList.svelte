<svelte:options immutable={true} />
<script>
  import { createEventDispatcher } from "svelte";

  export let todos = [];

  const dispatch = createEventDispatcher();
</script>

<!-- Markup code starts -->
<div class="listwpr">
  {#each todos as todo, index (todo.id)}
    <label class="list" data-compleated={todo.compleated}>
      <input
        class="list__icon"
        for={`todo-${index}`}
        type="checkbox"
        checked={todo.compleated}
        on:change={dispatch('todo-toggle',{ index })}
      />
      <span class="list__text" for={`todo-${index}`}>{todo.title}</span>
      <span
        class="list__remove-icon"
        role="button"
        tabindex="0"
        on:keydown
        on:click={dispatch('remove-todo', { index })}
      />
    </label>
  {/each}
</div>
<!-- Markup code ends -->

<style>
.listwpr {
  display: flex;
  flex-direction: column;
  max-height: 220px;
  overflow-y: scroll;
  width: 100%;
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 2px;
}
.listwpr::-webkit-scrollbar {
  display: none;
}

.list {
  display: flex;
  padding: 5px 0 5px 0;
  background-color: #66834b;
  border-radius: 5px;;
}

.list[data-compleated="true"] {
  text-decoration: line-through;
  color: #FAF1E4;
}

.list + .list {
  margin-top: 10px;
}

.list__text {
  font-size: 15px;
  font-weight: bold;
  flex-grow: 1;
}

.list__remove-icon {
  background-image: url("../../assets/remove.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  margin: 0 5px 0 5px;
}

.list__icon {
  /* background-image: url("../../assets/square.png"); */
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
  width: 24px;
  margin-right: 10px;
  accent-color: #FAF1E4;
}
.list__icon:checked {
  accent-color: #435334;
}
</style>