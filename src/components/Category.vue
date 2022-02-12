<script setup lang="ts"></script>

<template>
  <div class="category__wrapper bg-black py-20 px-10">
    <div class="head text-center">Included in all plans</div>
    <div>
      <h2 class="text-white text-center text-xl font-semibold category-title">All the TV you love</h2>
    </div>
    <div>
      <p class="text-white text-center">
        Stream full seasons of exclusive series, current-season episodes, hit
        movies, Hulu Originals, kids shows, and more.
      </p>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <div class="">
        <img src="../assets/poster-one.jpeg" alt="tv-shows" />
      </div>

      <div class="">
        <img src="../assets/poster-two.jpeg" alt="movies" />
      </div>
      <div class="">
        <img src="../assets/poster-three.jpeg" alt="hulu-originals" />
      </div>
      <div class="">
        <img src="../assets/poster-four.jpeg" alt="premiums" />
      </div>
    </div>
  </div>
</template>

<style>
.category-wrapper {
  background-color: black;
  height: 100%;
  width: 100%;
  padding: 50px 20px;
}
</style>
