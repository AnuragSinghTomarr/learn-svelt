<script>
  export let isOpen = false;

  function log() {
    console.log("hi");
  }
</script>

<!-- Markup code -->

<div
  class="modal-wpr"
  style:display={isOpen ? "flex" : "none"}
  on:click|self
  on:keydown
  role="button"
  tabindex="0"
>
  <div class="modal-wpr__body">
    <slot name="modal-view" />
  </div>
</div>

<style>
  .modal-wpr {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #00000021;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .modal-wpr__body {
    display: flex;
    background-color: #fff;
    padding: 25px 10px;
    user-select: none;
  }
</style>