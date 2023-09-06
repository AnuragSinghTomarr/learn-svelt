<script>
  // Props declaration
  export let initialCount = 0;
  
  let count = initialCount;

  function increment() {
    count += 1;
  }
  
  function decrement() {
    count -= 1;
  }
</script>

<!-- Markup -->
<div class="counter">
  <button class="increment" on:click={increment}>+</button>
  <span class="count">{count}</span>
  <button class="decrement" on:click={decrement}>-</button>
</div>

<style>
  .counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    padding: 4px 8px;
    width: 300px;
  }
  .increment, .decrement {
    display: flex;
    padding: 4px 2px;
    flex-grow: 1;
    justify-content: center;
    font-weight: bold;
    background-color: bisque;
    border: 0;
  }
  .count {
    display: inline-flex;
    justify-content: center;
    padding: 2px 4px;
    border: 1px solid red;
    color: brown;
    flex-grow: 4;
    margin: 0 5px 0 5px;
  }
</style>
