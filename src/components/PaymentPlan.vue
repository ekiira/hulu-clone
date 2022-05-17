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
  <div class="pt-10 md:pt-20 pb-10 dark">
    <div class="md:px-0 lg:w-4/5 md:container mx-auto">
      <div class="text-center pb-8 md:pb-10">
        <h2 class="big_title">Select Your Plan</h2>
        <div class="text-sm md:text-lg mt-3">
          No hidden fees, equipment rentals, or installation appointments.
          <br />
          <span class="customSemiBold">
            Switch plans or cancel anytime.^^
          </span>
        </div>
      </div>

      <div>
        <!-- Header Mobile -->
        <div class="block lg:hidden">
          <div
            class="border-t border-gray-6 flex justify-between items-center px-5 md:px-8 py-5"
          >
            <div>
              <p class="text-sm font-customMedium tracking-wide">
                Bundle / Save
                <span class="cursor-pointer ml-1">
                  <Info />
                </span>
              </p>
              <div>
                <img src="../assets/partners-dark.svg" width="166" />
              </div>
              <div>
                <p class="font-customLight text-sm pt-2 w-4/5 md:w-full">
                  Includes Hulu (plan of your choice), Disney+, and ESPN+.
                </p>
              </div>
            </div>
            <div>
              <Switch
                v-model="enabledSave"
                :class="enabledSave ? 'bg-green-1' : 'bg-gray-9'"
                class="relative pl-2 inline-flex h-6 md:h-8 w-12 md:w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span class="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  :class="
                    enabledSave
                      ? 'translate-x-3 md:translate-x-5'
                      : 'translate-x-[-9px]'
                  "
                  class="pointer-events-none inline-block h-7 md:h-9 w-7 md:w-9 translate-y-[-4px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </div>
          </div>
          <div
            class="bg-black sticky top-0 z-10 border-y border-gray-6 grid grid-cols-3 gap-2 divide-x divide-gray-6"
          >
            <div class="px-2 py-8">
              <div class="text-center md:px-2">
                <div class="payment__green_banner centered">MOST POPULAR</div>
                <div class="payment__offer">30 DAY FREE TRIAL</div>
                <div class="payment__product">Hulu</div>
                <div>
                  <button class="button" v-if="enabledSave">
                    $13.99 / MONTH
                  </button>
                  <button class="button" v-else>$6.99 / MONTH</button>
                </div>
              </div>
            </div>
            <div class="px-2 py-8">
              <div class="text-center md:px-2">
                <div
                  class="payment__green_banner centered bg-transparent"
                ></div>
                <div class="payment__offer">30 DAY FREE TRIAL</div>
                <div class="payment__product">Hulu (No Ads)</div>
                <div>
                  <button class="button" v-if="enabledSave">
                    $19.99 / MONTH
                  </button>
                  <button class="button" v-else>$12.99 / MONTH</button>
                </div>
              </div>
            </div>
            <div class="px-2 py-8">
              <div class="text-center md:px-2">
                <div
                  class="payment__green_banner centered bg-transparent"
                ></div>
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
        </div>
        <!-- Header Desktop -->
        <div class="hidden lg:block bg-black sticky top-0 z-10">
          <div class="grid grid-cols-5 border-y border-gray-6">
            <!--  -->
            <div class="col-span-2 pt-8">
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
              <div class="payment__green_banner centered">MOST POPULAR</div>
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
              <div class="payment__green_banner centered bg-transparent"></div>
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
              <div class="payment__green_banner centered bg-transparent"></div>
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

        <!-- Content Mobile -->
        <div class="block lg:hidden">
          <div
            v-for="(el, index) in data"
            :key="index"
            class="text-center py-5 payment__border"
          >
            <div class="mb-3">
              <p>
                <span class="payment__item">
                  {{ el.text }}
                </span>
                <span class="ml-1 cursor-pointer" v-if="el.hasInfo">
                  <Info />
                </span>
              </p>
            </div>
            <div class="grid grid-cols-3 gap-2 divide-gray-6 divide-x-2">
              <div>
                <div class="centered" v-if="el.firstColumn">
                  <Tick />
                </div>
                <div v-else>
                  <span class="text-gray-4"> — </span>
                </div>
              </div>
              <div>
                <div class="centered" v-if="el.secondColumn">
                  <Tick />
                </div>
                <div v-else>
                  <span class="text-gray-4"> — </span>
                </div>
              </div>
              <div>
                <div class="centered" v-if="el.thirdColumn">
                  <Tick />
                </div>
                <div v-else>
                  <span class="text-gray-4"> — </span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-x text-center text-gray-5 opacity-80 mt-3 pb-10">
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
        <!-- Content Desktop-->
        <div class="hidden lg:block">
          <div
            v-for="(el, index) in data"
            :key="index"
            class="grid grid-cols-5 text-white payment__border last:border-gray-7 items-center"
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
        <div class="text-center lg:text-left pt-16" v-if="showAddons">
          <div class="payment__border pb-5">
            <span
              class="mr-3 text-lg md:text-2xl lg:text-[32px] tracking-wide font-customSemiBold"
              >Available Add-ons</span
            >
            <div class="lg:w-3/4 mt-1">
              <p class="font-customLight text-xs md:text-sm pt-1 md:pt-3">
                Add-ons available at an additional cost.<br />Add them up after
                you sign up for Hulu.
              </p>
            </div>
          </div>
          <!-- Add-ons Mobile -->
          <div class="block lg:hidden">
            <div
              v-for="(el, index) in addOns"
              :key="index"
              class="text-center py-5 payment__border last:border-none"
            >
              <div class="mb-3">
                <p>
                  <span class="payment__item">
                    {{ el.text }}
                  </span>
                  <span class="ml-1 cursor-pointer" v-if="el.hasInfo">
                    <Info />
                  </span>
                </p>
              </div>
              <div class="grid grid-cols-3 gap-2 divide-gray-6 divide-x-2">
                <div>
                  <div class="centered" v-if="el.firstColumn">
                    <Tick />
                  </div>
                  <div v-else>
                    <span class="text-gray-4"> — </span>
                  </div>
                </div>
                <div>
                  <div class="centered" v-if="el.secondColumn">
                    <Tick />
                  </div>
                  <div v-else>
                    <span class="text-gray-4"> — </span>
                  </div>
                </div>
                <div>
                  <div class="centered" v-if="el.thirdColumn">
                    <Tick />
                  </div>
                  <div v-else>
                    <span class="text-gray-4"> — </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Add-ons Desktop -->
          <div
            v-for="(el, index) in addOns"
            :key="index"
            class="hidden lg:grid grid-cols-5 payment__border last:border-none items-center"
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
          <div class="text-sm md:text-base">
            <span v-if="showAddons" class="flex">
              <span> Hide Add-ons </span>
              <span class="centered ml-2">
                <svg width="26" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.07 3.83l-1.768-1.768h3.535L13.07 3.829zm0 0l-8.74 8.74H.793L13.07.294 25.345 12.57H21.81l-8.74-8.74zm0 0l-1.768-1.768h3.535L13.07 3.829zm0 0l-8.74 8.74H.793L13.07.294 25.345 12.57H21.81l-8.74-8.74z"
                    fill-rule="nonzero"
                    fill="#B8BECC"
                  />
                </svg>
              </span>
            </span>
            <span v-else class="flex">
              <span> Show Add-ons </span>

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
  </div>
</template>

<style>
.payment__green_banner {
  @apply bg-green-1 text-xx md:text-x lg:text-xs text-[#16181d] tracking-wider lg:tracking-wide md:w-4/6 lg:w-5/6 h-8 font-customMedium rounded-2xl mb-5 mx-auto;
}

.button {
  @apply bg-white text-xx md:text-sm uppercase text-dark h-9 lg:h-12 md:px-3 w-full rounded font-customSemiBold tracking-wide;
}

.payment__offer {
  @apply mb-2 text-[#BEC0C2] font-customMedium tracking-wider text-xx md:text-x lg:text-sm;
}

.payment__item {
  @apply text-xs md:text-base tracking-wide font-customLight;
}

.payment__product {
  @apply text-xs md:text-sm lg:text-xl font-customSemiBold mb-3 text-white;
}

.payment__border {
  @apply border-b border-gray-6;
}
</style>
