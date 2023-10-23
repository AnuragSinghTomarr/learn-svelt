<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>
<script>
  import Button from "./lib/Button.svelte";
  import Counter from "./lib/Counter.svelte";
  import Notification from "./lib/Notification.svelte";
  import Todo from "./lib/todos/Todo.svelte";
  import "./app.css";
  import DelayCounter from "./lib/delayCounter/DelayCounter.svelte";
  import Passcode from "./lib/passcode/Passcode.svelte";

  const courseName = "Svelt";
  const courseDescription = "Svelt is a <strong>light weight</strong> compiled framework";
</script>

<!-- Markup -->
<section class="wrapper">
  <Passcode />
  <!-- <DelayCounter /> -->
  <!-- <Todo /> -->
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