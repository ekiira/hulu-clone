<script setup lang="ts">
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

import { paymentData as data, addOns } from "../utils/constant";
import Tick from "./icons/Tick.vue";
import Info from "./icons/Info.vue";

// state
const enabledSave = ref(false);
const showAddons = ref(false);
</script>

<template>
  <div class="pt-20 pb-10 bg-black">
    <div class="w-4/5 mx-auto">
      <div class="text-center pb-10">
        <h2 class="big_title text-white">Select Your Plan</h2>
        <div class="text-white text-lg">
          No hidden fees, equipment rentals, or installation appointments.
          <br />
          <span class="customSemiBold">
            Switch plans or cancel anytime.^^
          </span>
        </div>
      </div>

      <div>
        <!-- Header -->
        <div class="sticky top-0 bg-black z-10">
          <div class="grid grid-cols-5 border-y border-gray-6">
            <!--  -->
            <div class="col-span-2 text-white pt-8">
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
              <div class="pt-5 pb-3">
                <Switch
                  v-model="enabledSave"
                  :class="enabledSave ? 'bg-green-1' : 'bg-gray-9'"
                  class="relative pl-2 inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <span class="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    :class="
                      enabledSave ? 'translate-x-5' : 'translate-x-[-9px]'
                    "
                    class="pointer-events-none inline-block h-9 w-9 translate-y-[-4px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                  />
                </Switch>
              </div>
            </div>
            <!--  -->
            <div class="text-center pt-8 px-2">
              <div class="payment__green_banner">MOST POPULAR</div>
              <div class="payment__offer">30 DAY FREE TRIAL</div>
              <div class="payment__product">Hulu</div>
              <div>
                <button class="button" v-if="enabledSave">
                  $13.99 / MONTH
                </button>
                <button class="button" v-else>$6.99 / MONTH</button>
              </div>
            </div>
            <!--  -->
            <div class="text-center bg-gray-8 pt-8 px-2">
              <div class="payment__green_banner bg-transparent"></div>
              <div class="payment__offer">30 DAY FREE TRIAL</div>
              <div class="payment__product">Hulu (No Ads)</div>
              <div>
                <button class="button" v-if="enabledSave">
                  $19.99 / MONTH
                </button>
                <button class="button" v-else>$12.99 / MONTH</button>
              </div>
            </div>
            <!--  -->
            <div class="text-center pt-8 px-2">
              <div class="payment__green_banner bg-transparent"></div>
              <div class="payment__offer">30 DAY FREE TRIAL</div>
              <div class="payment__product">Hulu + Live Tv</div>
              <div>
                <button class="button" v-if="enabledSave">
                  $75.99 / MONTH
                </button>
                <button class="button" v-else>$69.99 / MONTH</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div
            v-for="(el, index) in data"
            :key="index"
            class="grid grid-cols-5 text-white border-b border-gray-6 last:border-gray-7 items-center"
          >
            <div class="col-span-2 py-5 px-2">
              <span class="payment__item">
                {{ el.text }}
              </span>

              <span class="ml-1 cursor-pointer" v-if="el.hasInfo">
                <Info />
              </span>
            </div>

            <div class="centered justify-center py-5 px-2">
              <div v-if="el.firstColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
            <div class="centered h-full bg-gray-8 py-5 px-2">
              <div v-if="el.secondColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
            <div class="centered py-5 px-2">
              <div v-if="el.thirdColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
          </div>
          <div class="text-x text-gray-5 opacity-80 mt-3 pb-10">
            <p>^For current-season shows in the streaming library only</p>
            <p>
              ^^Switches from Live TV to Hulu take effect as of the next billing
              cycle
            </p>
            <p v-if="enabledSave">
              *Savings of up to $7.98/month compared to regular price of each
              service. 18+ only. Access content from each service separately,
              and access ESPN+ content via Hulu. Offer valid for eligible
              subscribers only. Subject to Bundle Terms.
            </p>
          </div>
        </div>

        <!-- Add-ons -->
        <div class="text-white pt-16" v-if="showAddons">
          <div class="border-gray-6 border-b pb-5">
            <span class="mr-3 text-[32px] tracking-wide font-customSemiBold"
              >Available Add-ons</span
            >
            <div class="w-3/4 mt-1">
              <p class="font-customLight text-sm pt-3">
                Add-ons available at an additional cost.<br />Add them up after
                you sign up for Hulu.
              </p>
            </div>
          </div>

          <div
            v-for="(el, index) in addOns"
            :key="index"
            class="grid grid-cols-5 border-b border-gray-6 last:border-none items-center"
          >
            <div class="col-span-2 py-5 px-2">
              <span class="payment__item">
                {{ el.text }}
              </span>
              <span class="ml-1 cursor-pointer" v-if="el.hasInfo">
                <Info />
              </span>
            </div>
            <div class="centered py-5 px-2">
              <div v-if="el.firstColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
            <div class="centered h-full bg-gray-8 py-5 px-2">
              <div v-if="el.secondColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
            <div class="centered py-5 px-2">
              <div v-if="el.thirdColumn">
                <Tick />
              </div>
              <div v-else>
                <span class="text-gray-4"> — </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div
          class="border-y border-gray-6 py-5 centered text-white"
          role="button"
          @click="showAddons = !showAddons"
        >
          <span class="flex">
            <span v-if="showAddons"> Hide Add-ons </span>
            <span v-else> Show Add-ons </span>

            <span class="centered ml-2">
              <svg width="26" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.93 9.17l1.768 1.768h-3.535l1.767-1.767zm0 0L21.67.43h3.536L12.93 12.706.655.43H4.19l8.74 8.74zm0 0l1.768 1.768h-3.535l1.767-1.767zm0 0L21.67.43h3.536L12.93 12.706.655.43H4.19l8.74 8.74z"
                  fill-rule="nonzero"
                  fill="#B8BECC"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.payment__green_banner {
  @apply bg-green-1 rounded-2xl text-xs text-[#16181d] tracking-wide w-5/6 mx-auto h-8 flex items-center justify-center font-customMedium mb-5;
}

.payment__offer {
  @apply mb-2 text-[#BEC0C2] font-customMedium tracking-wider text-sm;
}

.payment__item {
  @apply tracking-wide font-customLight;
}

.payment__product {
  @apply text-xl font-customSemiBold mb-3 text-white;
}
</style>
