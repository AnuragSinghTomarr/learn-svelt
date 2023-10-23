<script>
  import Timer from "./Timer.svelte";


</script>

<!-- Html snippet @starts -->
<div class="container">
  <span>
    <label for="passcode">Enter Passcode</label>
    <input type="password" name="passcode" />
  </span>
  <span>
    <span class="button button--hover" type="button">
      <span>Unlock</span>
    </span>
    <span class="timer ">
      <Timer />
    </span>
  </span>
</div>
<!-- Html snippet @ends -->

<style>
  .container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 15px 30px;
    align-items: center;
  }
  .container > *:first-child {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .container > *:last-child {
    display: flex;
    align-self: flex-start;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  label {
    font-size: 18px;
    font-weight: 500;
  }
  input[type="password"] {
    background-color: #fffaf3;
    padding: 5px;
    border-radius: 5px;
    flex-grow: 1;
    flex-shrink: 0;
    border: 0;
    height: 30px;
    margin-right: 5px;
    font-size: 14px;
  }
  .timer {
    position: relative;
    display: inline-flex;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    background-color: #fff;
    /* border: 1px solid black; */
  }
  .timer--fill {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: darkgoldenrod;
  }
  .timer--mask {
    z-index: -1;
    -webkit-animation: timer--mask 6s linear;
    animation: timer--mask 6s linear;
  }

  @keyframes timer--mask {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes timer--mask {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .button {
    position: relative;
    display: flex;
    font-weight: 400;
    z-index: 1;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    background-color: hsl(240 62% 62% / 1);
  }
  .button > * {
    z-index: 1;
    color: #fff;
  }
  .button--hover:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #7777e9;
    /* clip-path: inset(0 0 100% 0);
    -webkit-clip-path: inset(0 0 100% 0); */
    -webkit-clip-path: circle(0px at center);
    clip-path: circle(0px at center);
    transition: all 0.4s linear;
  }
  .button--hover:hover::before {
    /* clip-path: inset(0 0 0 0);
    -webkit-clip-path: inset(0 0 0 0); */
    -webkit-clip-path: circle(300px at center);
    clip-path: circle(300px at center);
  }
</style>

<!-- @keyframes circle-in-center {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(125%);
  }
}

[transition-style="in:circle:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-center both;
} -->