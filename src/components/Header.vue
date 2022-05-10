<script setup lang="ts"></script>
<template>
  <header class="header__wrapper">
    <nav class="flex justify-between">
      <div>
        <img src="../assets/hulu-logo.svg" alt="hulu-logo" class="w-20" />
      </div>
      <div class="flex items-center">
        <button class="header__btn">Log in</button>
      </div>
    </nav>
  </header>
</template>

<style>
.header__wrapper {
  @apply absolute h-48 inset-0 z-10 py-5 px-10;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.76) 15.54%,
    rgba(0, 0, 0, 0.192) 60.23%,
    rgba(0, 0, 0, 8e-5) 100%
  );
}
.header__btn {
  @apply text-[#a8afbd] w-28 uppercase tracking-wide h-full px-4 rounded-lg text-sm font-customMedium hover:bg-[#323843] hover:text-white;
}
</style>
