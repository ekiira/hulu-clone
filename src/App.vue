<script setup lang="ts"></script>

<template>
  <main>
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="./assets/hulu-logo.svg" />
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.logo {
  display: block;
  margin: auto;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (max-width: 1023px) {
  .logo {
    width: 300px;
    height: 300px;
  }
}
</style>
