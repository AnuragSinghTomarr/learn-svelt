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
    </label>
  {/each}
</div>
<!-- Markup code ends -->

<style>
.listwpr {
  display: flex;
  flex-direction: column;
}

.list {
  display: flex;
}

.list[data-compleated="true"] {
  text-decoration: line-through;
  color: grey;
}

.list + .list {
  margin-top: 20px;
}

.list__text {
  font-size: 15px;
  font-weight: bold;
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