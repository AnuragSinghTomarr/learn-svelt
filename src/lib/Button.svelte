<script></script>

<!-- Markup-->
<button>
  <slot>Fallback</slot> 
</button>

<style lang="scss">
  @import "../styles/variable.scss";
  button {
    border: none;
    background-color: cadetblue;
    padding: 15px 20px;
    font-weight: bold;
    color: aliceblue;
    cursor: pointer;
    &:hover {
      background-color: $hovercolor;
      color: #fff;
    }
  }
</style>