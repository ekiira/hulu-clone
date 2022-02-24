<script setup lang="ts"></script>

<template>
  <div class="hero__wrapper py-32">
    <div class="lg:w-2/4 mx-auto text-center">
      <div class="text-xs head">
        Bundle with any hulu plan and save
      </div>
      <div>
        <img
          class="mx-auto"
          src="../assets/partners.png"
          alt="partner-logos"
          width="600"
        />
      </div>
      <div>
        <p class="customSemibold text-white text-xl mt-4">
          Get endless entertainment, live sports, and the shows and movies you
          love.
        </p>
      </div>
      <div class="pt-8">
        <button
          class="uppercase font-arial font-black bg-white text-dark text-sm h-14 w-72 py-2.5 px-5 rounded tracking-wider mb-5 hover:opacity-80"
        >
          get the disney bundle
        </button>
      </div>
      <div>
        <div class="text-white opacity-60 text-xs">
          <span class="customSemibold underline"> What's included?</span>
          <span> See <span class="underline"> Bundle Terms</span> </span>
        </div>
        <div class="mt-4 text-white underline">Sign up for hulu only</div>
      </div>
    </div>
  </div>
</template>

<style>
.hero__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background: url("../assets/hulu-bg.jpeg"),
    linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%);
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
}
</style>
