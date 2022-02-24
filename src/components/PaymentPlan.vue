<script setup lang="ts">
// import data from '../utils/constant'
</script>

<template>
  <div class="py-16">
    <div class="w-4/5 mx-auto">
      <div class="text-center pb-10">
        <h2 class="big_title text-gray-5">Select Your Plan</h2>
        <div class="text-gray-5 text-2xl">
          No hidden fees, equipment rentals, or installation appointments.
          <br />
          <span class="customSemiBold">
            Switch plans or cancel anytime.^^
          </span>
        </div>
      </div>

      <div class="border-t border-[#EDEFF2]">
        <!-- Header -->
        <div class="grid grid-cols-5 gap-4 py-8">
          <div class="col-span-2 text-gray-5">
            <div>
              <img src="../assets/partners-dark.svg" width="166" />
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-3 text-[32px] tracking-wide font-customSemiBold"
                >Bundle & Save</span
              >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  fill-rule="evenodd"
                  opacity=".4"
                >
                  <g stroke="#292c33">
                    <circle stroke-width="1.5" cx="7" cy="7" r="6" />
                    <path d="M6.75 6.75h1V9.5h-1z" fill="#292c33" />
                  </g>
                  <circle fill="#292c33" cx="7" cy="4.75" r="1" />
                </svg>
              </span>
            </div>
            <div class="w-3/4 mt-1">
              <p class="font-customLight">
                Includes Hulu (plan of your choice), Disney+, and ESPN+.
              </p>
            </div>
          </div>

          <div class="text-center">
            <div class="payment__green_banner">MOST POPULAR</div>
            <div class="payment__offer">30 DAY FREE TRIAL</div>
            <div class="payment__product">Hulu</div>
            <div>
              <button class="button">$6.99 / MONTH</button>
            </div>
          </div>

          <div class="text-center">
            <div class="payment__green_banner bg-transparent"></div>
            <div class="payment__offer">30 DAY FREE TRIAL</div>
            <div class="payment__product">Hulu (No Ads)</div>
            <div>
              <button class="button">$12.99 / MONTH</button>
            </div>
          </div>

          <div class="text-center">
            <div class="payment__green_banner bg-transparent"></div>
            <div class="payment__offer">30 DAY FREE TRIAL</div>
            <div class="payment__product">Hulu + Live Tv</div>
            <div>
              <button class="button">$69.99 / MONTH</button>
            </div>
          </div>
        </div>

        <!-- Content -->

        <!-- <div class="grid grid-cols-5 gap-4 py-8">
          <div class="col-span-2">
            <span>
              Streaming Library with thousands of TV episodes and
              moviesStreaming Library with thousands of TV episodes and movies
            </span>
            <span class="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                fill-rule="evenodd"
                opacity=".4"
              >
                <g stroke="#292c33">
                  <circle stroke-width="1.5" cx="7" cy="7" r="6" />
                  <path d="M6.75 6.75h1V9.5h-1z" fill="#292c33" />
                </g>
                <circle fill="#292c33" cx="7" cy="4.75" r="1" />
              </svg>
            </span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
