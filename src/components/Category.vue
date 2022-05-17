<script setup lang="ts"></script>

<template>
  <div class="bg-black h-full border-b m-0 border-b-black">
    <div class="category__wrapper">
      <div class="md:w-5/6 lg:w-3/5 font-customLight container mx-auto pb-16">
        <div class="head text-center">Included in all plans</div>
        <div>
          <h2 class="big_title">All the TV you love</h2>
        </div>
        <div>
          <p class="text-white text-center text-sm lg:text-base">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div class="relative">
          <div class="category_image_overlay"></div>
          <div>
            <img
              src="../assets/poster-one.jpeg"
              alt="tv-shows"
              class="w-full h-full"
            />
          </div>
          <div class="category__image_details">
            <h3 class="category__title">Past &amp; Current Seasons</h3>
            <h4 class="category__text">TV Shows</h4>
          </div>
        </div>
        <div class="relative">
          <div class="category_image_overlay"></div>
          <div>
            <img
              src="../assets/poster-two.jpeg"
              alt="movies"
              class="w-full h-full"
            />
          </div>
          <div class="category__image_details">
            <h3 class="category__title">New &amp; Classic</h3>
            <h4 class="category__text">Movies</h4>
          </div>
        </div>
        <div class="relative">
          <div class="category_image_overlay"></div>
          <div>
            <img
              src="../assets/poster-three.jpeg"
              alt="hulu-originals"
              class="w-full h-full"
            />
          </div>
          <div class="category__image_details">
            <h3 class="category__title">Groundbreaking</h3>
            <h4 class="category__text">Hulu Originals</h4>
          </div>
        </div>
        <div class="relative">
          <div class="category_image_overlay"></div>
          <div>
            <img
              src="../assets/poster-four.jpeg"
              alt="premiums"
              class="w-full h-full"
            />
          </div>
          <div class="category__image_details">
            <h3 class="category__title">Add-on</h3>
            <h4 class="category__text">Premiums</h4>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div></div>
          <div></div>
          <div></div>

          <p class="text-xx md:text-x text-gray-5 pt-3">
            Premium network add-ons available for an additional cost
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.category__wrapper {
  @apply h-full py-12 px-5 container mx-auto;
}
.category_image_overlay {
  @apply absolute h-full inset-0 opacity-60 bg-[#000000b3];
  max-width: auto;
  z-index: 1;
}

.category__image_details {
  @apply absolute px-2 w-full opacity-100 top-2/5 md:top-1/5 left-2/4 text-white;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.category__title {
  @apply text-x md:text-xs;
}
.category__text {
  @apply text-sm md:text-base lg:text-xl  font-customMedium md:font-customSemiBold font-black;
}
</style>
