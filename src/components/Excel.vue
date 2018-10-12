<template>
  <div class="Excel">
    <h1>{{ msg }}</h1>
    <button id="toggle-excel" class="btn" v-on:click="greet">SHOW</button>
    <br>
    <br>
    <transition name="excel-anim">
      <div>
        <iframe id="excel" class="excel-hide" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=33FAB9C877749D66%21513&authkey=%21AGwWC0Hh9KjSj04&em=2&AllowTyping=True&ActiveCell='Ark1'!A1&wdInConfigurator=True"></iframe>
      </div>
    </transition>
    </div>
</template>

<script>
// import {Spinner} from 'spin.js'
/*
var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
} */

// var target = document.getElementById('excel')
// var spinner = new Spinner(opts)

export default {
  name: 'Excel',
  data () {
    // spinner.spin(target)
    return {
      msg: 'Edit your data here'
    }
  },
  methods: {
    greet: function (event) {
      var excel = document.getElementById('excel')
      var hideButton = document.getElementById('toggle-excel')
      excel.classList.toggle('excel-show')
      excel.classList.toggle('excel-hide')

      hideButton.innerText = hideButton.innerText === 'SHOW' ? 'HIDE' : 'SHOW'
    }
  }
}
</script>

<style>
.excel-hide {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    background: #d5d5d5;
}

.excel-show {
    max-height: 800px;
    max-width: 1200px;
    height: 800px;
    width: 1200px;

    transition: max-height 0.25s ease-in;
}

.btn {
  margin-bottom: 20px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

</style>
