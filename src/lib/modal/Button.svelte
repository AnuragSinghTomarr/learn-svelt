<script></script>

<!-- Markup code -->

<div class="button" on:click on:keydown tabindex="0" role="button">
  <slot name="btn-image" />
  <slot name="btn-text">
    <em>No text provided</em>
  </slot>
</div>

<style>
  .button {
    display: flex;
    align-self: center;
    width: 40%;
    padding: 20px 40px;
    border-radius: 5px;
    background-color: #545479;
    margin-bottom: 10px;
  }
</style>