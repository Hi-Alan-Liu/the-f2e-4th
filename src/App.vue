<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "SourceHanSansTC";
  src: local("SourceHanSansTC"),
    url(../src/assets/fonts/week01/SourceHanSansTC-VF.otf) format("truetype");
}

@font-face {
  font-family: "ethnocentric";
  src: local("ethnocentric"),
    url(../src/assets/fonts/week01/ethnocentric\ rg.otf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
