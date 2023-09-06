<script>
  import Button from "./modal/Button.svelte";
  import ModalContainer from "./modal/ModalContainer.svelte";

  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<!-- Markup code -->

<section class="notificationWpr">
  <ModalContainer isOpen={open} on:click={toggle}>
    <div slot="modal-view" class="modal-view">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum obcaecati mollitia nesciunt odit voluptates, eaque dolores quasi sit cum consequuntur tenetur quia nihil, officia vitae, repellat non architecto illum!</p>
    </div>
  </ModalContainer>
  <Button on:click={toggle}>
    <span slot="btn-image" class="btn-image" />
    <span class="btn-text" slot="btn-text">Toggle Modal</span>
  </Button>
</section>

<!-- Style Code-->
<style>
  .notificationWpr {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 500px;
    width: 300px;
    background-image: linear-gradient(to right top, #E8F3F1, #7DB0B5);
    border: 1px solid #004d7a;
    position: relative;
  }
  .btn-text {
    color: #fff;
    font-size: 16px;
    display: inline-flex;
    align-items: flex-end;
  }
  .btn-image {
    display: inline-flex;
    width: 25px;
    height: 25px;
    background-image: url("../assets/tap.png");
    background-repeat: no-repeat;
    background-size: 25px 25px;
  }
  .modal-view {
    font-size: 14px;
    text-align: center;
  }
</style>