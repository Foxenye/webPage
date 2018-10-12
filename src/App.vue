<template>
  <div id="app">
    <header>
    <div class="container">
      <h1 class="logo"></h1>
      <nav>
        <ul>
        <div>
        </div>
          <Slide>
            <li><router-link to="/Home">Home</router-link></li>
            <br>
            <br>
            <li><router-link to="/Info">Info</router-link></li>
            <br>
            <br>
            <li><router-link to="/Excel">Excel</router-link></li>
            <br>
            <br>
            <li><router-link to="/Data">Data</router-link></li>
          </Slide>
          <back-to-top text="Back to top" visibleoffset="800"></back-to-top>
        </ul>
      </nav>
    </div>
  </header>
    <transition name="router-anim">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  components: {
    Slide // Register your component
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,600');
  body {
    margin: 0;
    background: #24313C;
    font-family: Raleway,Arial,sans-serif;
    font-weight: 800;
  }

  .container {
    width: 80%;
    margin: 0 auto;
  }

  header::after {
    content: '';
    display: table;
    clear: both;
  }

  .logo {
    float: left;
    padding: 10px 0;
  }

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;
  position: relative;
}

nav a {
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
}

nav a:hover {
  color: #FFFFFF;
}

nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #1AB188;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
      z-index: 1;
    }
    .bm-burger-bars {
      background-color: rgb(255, 255, 255);
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #ffffff;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #435159; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>
