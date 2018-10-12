<template>
  <div class="Home">
        <div id="app">
          <br>
      <vue-particles
        class="particles-js"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Credocom A/S'
    }
  }
}
</script>

<style>
.particles-js {
  background-image: url("../assets/credocomaa.png") !important;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }

html, body {
  overflow: hidden;
}
</style>
