<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <FirstComponent msg2="first component" />
  <CarouselHome />
</template>

<script>
import CarouselHome from "./components/carouselcomponents/CarouselHome.vue";
import FirstComponent from "./components/FirstComponent.vue";

export default {
  name: "App",
  components: {
    FirstComponent,
    CarouselHome,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
</style>
