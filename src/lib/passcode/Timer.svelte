<script>

</script>

<!-- Html snippet @starts -->
<div class="timer-wpr">
  <svg width="200" height="200">
    <circle class="circle" cx="100" cy="100" r="80"  />
  </svg>
  <span class="timer">30</span>
</div>
<!-- Html snippet @ends -->

<style>
  @keyframes circletimer {
    0% {
      stroke-dashoffset: 500;
      stroke-dasharray: 500;
    }
    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 500;
    }
  }
  svg {
    background-color: transparent;
    position: absolute;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(-90deg);
  }
  svg .circle {
    stroke: #bc0054;
    stroke-width: 16;
    fill: transparent;
    stroke-dashoffset: 500;
    stroke-dasharray: 0;
    animation: 30s circletimer linear;
  }

  .timer {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #bc0054;
    font-size: 42px;
    font-weight: 700;
  }
</style>