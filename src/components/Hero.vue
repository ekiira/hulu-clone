<script setup lang="ts"></script>

<template>
  <div class="hero__wrapper pt-20 md:pt-32 pb-16 md:pb-24">
    <div class="my-20">
      <div class="w-5/6 md:w-4/6 lg:w-3/5 mx-auto text-center">
        <div class="text-xs head tracking-wide">
          Bundle with any hulu plan and save
        </div>
        <div>
          <img
            class="mx-auto w-11/12"
            src="../assets/partners.png"
            alt="partner-logos"
          />
        </div>
        <div>
          <p class="customSemibold text-white text-lg md:text-2xl mt-4 tracking-wide">
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </p>
        </div>
        <div class="pt-8">
          <button
            class="uppercase font-arial font-black bg-green-1 text-dark text-sm h-14 w-full py-2.5 px-5 rounded tracking-wider mb-5 hover:opacity-80"
          >
            get the disney bundle
          </button>
        </div>
        <div>
          <div class="text-white opacity-60 text-x md:text-xs">
            <span class="customSemibold underline"> What's included?</span>
            <span> See <span class="underline"> Bundle Terms</span> </span>
          </div>
          <div class="mt-4 text-white underline text-sm md:text-base">Sign up for hulu only</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero__wrapper {
  background: url("../assets/hulu-bg.jpeg"),
    linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%);
  @apply relative flex justify-center items-center w-full h-full max-h-screen bg-cover bg-no-repeat bg-right-bottom;
}
</style>
