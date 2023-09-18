<script>
  import Button from "./lib/Button.svelte";
  import Counter from "./lib/Counter.svelte";
  import Notification from "./lib/Notification.svelte";
  import Todo from "./lib/todos/Todo.svelte";
  import "./app.css";

  const courseName = "Svelt";
  const courseDescription = "Svelt is a <strong>light weight</strong> compiled framework";
</script>

<!-- Markup -->
<section class="wrapper">
  <Todo />
  <!-- <Notification /> -->
  <!-- <h1>Welcome to {courseName} Class</h1>
  <p>{@html courseDescription}</p>
  <Counter initialCount={5} />
  <Button>Click</Button> -->
</section>

<style>
  .wrapper {
    /* color: cadetblue; */
    /* font-weight: bold; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 100vh;
    width: 100vw;
  }
</style>