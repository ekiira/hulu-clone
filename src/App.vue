<script setup lang="ts">
import Hero from "./components/Hero.vue";
</script>

<template>
  <main>
    <Hero />
  </main>
</template>

<style>
@import "./assets/base.css";

@font-face {
  font-family: "Graphik";
  src: local("Graphik"), url(./fonts/GraphikRegular.otf) format("opentype");
}

@font-face {
  font-family: "Graphik Bold";
  src: local("Graphik"), url(./fonts/GraphikSemibold.otf) format("opentype");
}
main {
  font-family: "Graphik";
}
</style>
