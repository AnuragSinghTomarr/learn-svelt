<script>
  import throttle from "../../utils/throtle";

  let counter = 0;

  function increment(type) {
    counter = counter + 1;
    console.log('Increment Action type ', type, counter);
  }

  function decrement(type) {
    counter = counter > 0 ? counter - 1 : 0;
    console.log('Decrement Action type ', type, counter);
  }

  const asyncIncrement = throttle(increment, 2000);

</script>

<!--Markup Starts-->
<div class="delayCounterWpr">
  <div class="output">{counter}</div>
  <div class="action-bar">
    <button on:click={() => increment('sync')}>Sync +</button>
    <button on:click={() => decrement('sync')}>Sync - </button>
    <button on:click={asyncIncrement}>Async +</button>
  </div>
</div>
<!-- Markup Ends -->

<style>
  .delayCounterWpr {
    display: flex;
    flex-direction: column;
    outline: 2px solid black;
    padding: 15px 10px;
  }

  .output {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    
  }

  .action-bar > * {
    background-color: grey;
    color: beige;
  }
  .action-bar > * + * {
    margin-left: 5px;
  }

  button:focus {
    outline: none;
    /* border: 0; */
  }
</style>