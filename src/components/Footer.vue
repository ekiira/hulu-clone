<script setup lang="ts">
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/vue";

import Instagram from "./icons/Instagram.vue";
import Twitter from "./icons/Twitter.vue";
import Youtube from "./icons/Youtube.vue";
import Facebook from "./icons/Facebook.vue";
import { footerLinks } from "../utils/constant";
</script>

<template>
  <div class="bg-gray-1 pt-8 lg:pt-14">
    <div class="md:w-5/6 lg:w-4/5 container mx-auto">
      <!-- Mobile -->
      <div className="block md:hidden w-full px-4 pt-16">
        <div className="mx-auto w-full">
          <div v-for="(el, index) in footerLinks" :key="index">
            <Disclosure
              as="div"
              v-slot="{ open }"
              class="border-b border-[#d9dce2] py-4"
            >
              <DisclosureButton
                class="flex w-full justify-between p-2 text-left text-sm font-medium focus:outline-none"
              >
                <span class="footer__headlinks">{{ el.section }}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="#0b0c0f"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="ChevronDownIcon"
                  focusable="false"
                  aria-hidden="true"
                  class="h-5 w-5"
                  :class="open ? 'rotate-180 transform' : ''"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z"
                  />
                </svg>
              </DisclosureButton>
              <DisclosurePanel class="p-2 text-sm text-gray-500">
                <div
                  class="pb-2"
                  v-for="(link, lIndex) in el.links"
                  :key="lIndex"
                >
                  <div>
                    <a href="#" class="footer__links"> {{ link }}</a>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>

      <!-- Desktop -->
      <div class="hidden md:block">
        <div class="grid grid-cols-6 gap-6 py-8 lg:py-10">
          <div class="md:col-span-6 lg:col-span-4 leading-3">
            <h3 class="footer__headlinks">Browse</h3>

            <div class="grid grid-cols-4 gap-1">
              <div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Streaming Library</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Live TV</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Live News</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Live Sports</a>
                </div>
              </div>
              <div>
                <div class="py-1">
                  <a href="#" class="footer__links"> TV shows</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Movies</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Originals</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Networks</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Kids</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> FX</a>
                </div>
              </div>
              <div>
                <div class="py-1">
                  <a href="#" class="footer__links"> HBO Max&#8482;</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Cinemax</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Showtime</a>
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> STARZ</a>
                </div>
              </div>
              <div>
                <div class="py-1">
                  <a href="#" class="footer__links">
                    Hulu, Disney+, and ESPN+</a
                  >
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links">
                    Hulu (No Ads), Disney+, and ESPN+</a
                  >
                </div>
                <div class="py-1">
                  <a href="#" class="footer__links"> Student Discount</a>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="lg:pl-5 md:col-span-2 lg:col-span-1">
            <h3 class="footer__headlinks">Help</h3>
            <div>
              <div class="py-1">
                <a href="#" class="footer__links"> Account & Billing</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Plans & Pricing</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Supported devices</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Accessibility</a>
              </div>
            </div>
          </div>
          <div class="lg:pl-5 md:col-span-2 lg:col-span-1">
            <h3 class="footer__headlinks">About Us</h3>
            <div>
              <div class="py-1">
                <a href="#" class="footer__links"> Shop Hulu</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Press</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Jobs</a>
              </div>
              <div class="py-1">
                <a href="#" class="footer__links"> Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t-2 border-gray-3 px-5 md:px-0">
        <div class="flex items-center py-8 md:py-12">
          <div class="text-gray-2 mr-8">
            <Facebook />
          </div>
          <div class="text-gray-2 mr-8">
            <Twitter />
          </div>
          <div class="text-gray-2 mr-8">
            <Youtube />
          </div>
          <div class="text-gray-2 mr-8">
            <Instagram />
          </div>
        </div>

        <div>
          <div class="md:flex w-full flex-wrap justify-between">
            <div class="hidden md:flex items-center">
              <span class="footer__links text-xs">© 2022 Hulu, LLC</span>
            </div>
            <div class="flex md:hidden">
              <div class="flex mr-5 items-center">
                <img src="../assets/ad-icon.png" alt="ad-icon" class="mr-2" />
                <span class="footer__links text-xs whitespace-nowrap"
                  >About Ads</span
                >
              </div>
              <div>
                <a href="#" class="footer__links text-xs">Terms of Use</a>
              </div>
            </div>
            <div class="hidden md:flex mr-3 items-center">
              <img src="../assets/ad-icon.png" alt="ad-icon" class="mr-2" />
              <span class="footer__links text-xs whitespace-nowrap"
                >About Ads</span
              >
            </div>
            <div class="hidden md:flex items-center">
              <a href="#" class="footer__links text-xs">Terms of Use</a>
            </div>
            <div class="pt-2 md:pt-0">
              <a href="#" class="footer__links text-xs">Privacy Policy</a>
            </div>
            <div class="pt-2 md:pt-0">
              <a href="#" class="footer__links text-xs"
                >Do Not Sell My Personal Information</a
              >
            </div>
            <div class="pt-2 lg:pt-0">
              <a href="#" class="footer__links text-xs"
                >Your California Privacy Rights</a
              >
            </div>
          </div>
          <div class="flex pt-2 md:pt-3">
            <div class="mr-5">
              <a href="#" class="footer__links text-xs"
                >TV Parental Guidelines</a
              >
            </div>
            <div>
              <a href="#" class="footer__links text-xs">sitemap</a>
            </div>
          </div>
          <div class="pt-2 md:pt-3">
            <div class="flex md:hidden">
              <span class="footer__links text-xs">© 2022 Hulu, LLC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-10 text-sm text-center bg-black w-full text-white tracking-wide"
    >
      <p>
        This is just a website clone of
        <a
          class="text-green"
          href="https://www.hulu.com/welcome"
          target="_blank"
          rel="noopener noreferrer"
          >Hulu</a
        >
      </p>
    </div>
  </div>
</template>

<style>
.footer__headlinks {
  @apply text-gray-8 uppercase text-xs font-customMedium pb-2 tracking-wide;
}

.footer__links {
  @apply text-[#586174] capitalize text-xs cursor-pointer tracking-wide hover:text-blue-1;
}
</style>
