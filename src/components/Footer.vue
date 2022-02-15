<script setup lang="ts">
import Instagram from "./icons/Instagram.vue";
import Twitter from "./icons/Twitter.vue";
import Youtube from "./icons/Youtube.vue";
import Facebook from "./icons/Facebook.vue";
</script>

<template>
  <div class="bg-gray-1 pt-14">
    <div class="w-4/5 mx-auto">
      <div>
        <div class="grid grid-cols-6 gap-6 border-b-2 border-gray-3 py-10">
          <div class="col-span-4">
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

          <div class="pl-5">
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
          <div class="pl-5">
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

        <div class="flex items-center py-12">
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
          <div class="flex w-full flex-wrap justify-between">
            <div>
              <span class="footer__links text-xs">© 2022 Hulu, LLC</span>
            </div>
            <div class="flex mr-3 items-center">
              <img src="../assets/ad-icon.png" alt="ad-icon" class="mr-2" />
              <span class="footer__links text-xs whitespace-nowrap"
                >About Ads</span
              >
            </div>
            <div>
              <a href="#" class="footer__links text-xs">Terms of Use</a>
            </div>
            <div>
              <a href="#" class="footer__links text-xs">Privacy Policy</a>
            </div>
            <div>
              <a href="#" class="footer__links text-xs"
                >Do Not Sell My Personal Information</a
              >
            </div>
            <div>
              <a href="#" class="footer__links text-xs"
                >Your California Privacy Rights</a
              >
            </div>
          </div>
          <div class="flex pt-3">
            <div class="mr-5">
              <a href="#" class="footer__links text-xs"
                >TV Parental Guidelines</a
              >
            </div>
            <div>
              <a href="#" class="footer__links text-xs">sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-center bg-gray w-full text-white tracking-wide">
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
