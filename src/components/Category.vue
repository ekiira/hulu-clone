<script setup lang="ts"></script>

<template>
  <div class="bg-black h-full border-b m-0 border-b-black">
    <div class="category__wrapper">
      <div class="md:w-5/6 lg:w-3/5 container mx-auto pb-16">
        <div class="head text-center">Included in all plans</div>
        <div>
          <h2 class="big_title">All the TV you love</h2>
        </div>
        <div>
          <p class="text-white text-center lg:text-lg">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="relative">
          <div class="category_image_overlay"></div>
          <div>
            <img
              src="../assets/poster-one.jpeg"
              alt="tv-shows"
              class="w-full h-full"
            />
          </div>
          <div class="text-white category__image_details">
            <h3 class="text-xs">Past &amp; Current Seasons</h3>
            <h4 class="text-xl customSemiBold font-black">TV Shows</h4>
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
          <div class="text-white category__image_details">
            <h3 class="text-xs">New &amp; Classic</h3>
            <h4 class="text-xl customSemiBold font-black">Movies</h4>
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
          <div class="text-white category__image_details">
            <h3 class="text-xs">Groundbreaking</h3>
            <h4 class="text-xl customSemiBold font-black">Hulu Originals</h4>
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
          <div class="text-white category__image_details">
            <h3 class="text-xs">Add-on</h3>
            <h4 class="text-xl customSemiBold font-black">Premiums</h4>
          </div>
        </div>
      </div>
      <div>
        <p class="text-x text-gray-5 pt-3 float-right">
          Premium network add-ons available for an additional cost
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.category__wrapper {
  @apply h-full py-12 px-5 container mx-auto;
}
.category_image_overlay {
  background: #000000b3;
  position: absolute;
  height: 100%;
  max-width: auto;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0.7;
  right: 0;
  z-index: 1;
}

.category__image_details {
  position: absolute;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 10%;
  left: 50%;
  opacity: 1;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
</style>
