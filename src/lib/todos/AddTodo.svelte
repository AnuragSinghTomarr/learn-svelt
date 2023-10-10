<script>
  import { createEventDispatcher } from "svelte";
  
  let inputRef;
  let inputText = '';
  let isButtonDisabled = false;
  const dispatch = createEventDispatcher();

  $: {
    isButtonDisabled = inputText.trim().length === 0;
    console.log('isButtonDisabled', isButtonDisabled);
  }

  export function clearInput() {
    inputRef.value = '';
    inputText = '';
    isButtonDisabled = true;
  }
</script>

<!-- Markup code -->
<div class="inputwpr">
  <input
    type="text"
    bind:this={inputRef}
    bind:value={inputText}
  />
  <button
    type="button"
    disabled={isButtonDisabled}
    on:click={
      dispatch('button-click', { value: inputRef.value || '' })
    }
  >
    Add
  </button>
</div>

<style>
  .inputwpr {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }
  input {
    background-color: #FAF1E4;
    padding: 5px;
    border-radius: 5px;
    flex-grow: 1;
    flex-shrink: 0;
    border: 0;
    height: 30px;
    margin-right: 5px;
    font-size: 14px;
  }
  input:focus {
    border: 0;
    border-color: transparent;
    outline: none;
  }
  button {
    border: 0;
    background-color: #435334;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-top: 0;
  }
  button:focus {
    outline: none;
  }

  button:disabled {
    opacity: 0.6;
  }
</style>