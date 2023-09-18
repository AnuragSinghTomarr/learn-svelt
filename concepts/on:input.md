```js:
<input
  class="list__icon"
  type="checkbox"
  on:input={
    (event) => {
      console.log(event.currentTarget);
      event.currentTarget.checked = checked;
      dispatch("toggleTodo", { value: todo.id })
    }
  }
/>
```

+ **on:input** :: directive can be used to programatically toggle checkbox on the data point being provided.
+ Browser default checked and unchecked state will be disabled and state can be only changed via data being provided.