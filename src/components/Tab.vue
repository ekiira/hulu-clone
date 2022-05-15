<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, watchEffect } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import type { ITabs, ITabsBackground } from "../types/tabs";

// state
const tabs = ref<ITabs[]>([
  {
    title: " Live sports",
    content: {
      paragraph:
        "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
      images: [
        "/src/assets/cbs-sports.png",
        "/src/assets/espn.png",
        "/src/assets/nbc.png",
        "/src/assets/golf.png",
      ],
    },
    backgroundImage: "url(" + "/src/assets/sports-bg.jpeg" + ")",
  },
  {
    title: " Breaking News",
    content: {
      paragraph:
        "  Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
      images: [
        "/src/assets/abc.png",
        "/src/assets/cnn.svg",
        "/src/assets/msn.png",
        "/src/assets/fox.svg",
      ],
    },
    backgroundImage: "url(" + "/src/assets/news-bg.jpeg" + ")",
  },
  {
    title: "Biggest Events",
    content: {
      paragraph:
        "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
      images: [
        "/src/assets/film.png",
        "/src/assets/golden-globe.png",
        "/src/assets/grammy.png",
        "/src/assets/oscars.png",
      ],
    },
    backgroundImage: "url(" + "/src/assets/events-bg.jpeg" + ")",
  },
]);
const selectedTab = ref(0);
const isShowing = ref(true);

const tabsBackground = ref<ITabsBackground>({
  backgroundImage: tabs.value[0].backgroundImage,
});

function changeTab(index: number) {
  isShowing.value = true;

  selectedTab.value = index;
  tabsBackground.value.backgroundImage = tabs.value[index].backgroundImage;
}
</script>

<template>
  <div class="tab-bg" :style="tabsBackground">
    <div class="tab-bg-overlay"></div>

    <div class="h-full relative z-30 py-10 w-4/5 container mx-auto">
      <div>
        <div class="mt-40">
          <div class="xl:w-3/5 text-center lg:text-left">
            <TabGroup :selectedIndex="selectedTab" @change="changeTab">
              <TabList>
                <Tab
                  v-slot="{ selected }"
                  as="template"
                  v-for="(el, index) in tabs"
                  :key="index"
                >
                  <button
                    :class="[
                      'uppercase text-red font-customMedium text-xs hover:text-[#c8c8c8] mb-5 mr-8',
                      selected ? 'text-white' : 'text-[#ffffff66]',
                    ]"
                  >
                    {{ el.title }}
                  </button>
                </Tab>
              </TabList>
              <TabPanels v-for="(el, index) in tabs" :key="index">
                <div class="grid lg:grid-cols-2">
                  <TabPanel
                    ><div>
                      <h3
                        class="my-8 text-3xl lg:text-5xl font-customSemiBold text-white"
                      >
                        {{ el.title }}
                      </h3>

                      <p class="text-white">
                        {{ el.content.paragraph }}
                      </p>

                      <div class="flex my-5 md:justify-center lg:justify-start">
                        <div
                          v-for="(image, index) in el.content.images"
                          :key="index"
                          class="mr-5 bg-white rounded-full w-12 h-12 flex items-center"
                        >
                          <img :src="image" alt="logo" class="w-4/5 mx-auto" />
                        </div>
                      </div>
                      <p class="text-x info mt-7">
                        Live TV plan required. Regional restrictions, blackouts
                        and additional terms apply.
                        <span class="underline cursor-pointer">
                          See details
                        </span>
                      </p>
                    </div></TabPanel
                  >
                </div>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tab-bg {
  @apply xl:h-[900px] max-h-screen relative bg-no-repeat bg-cover;
}
.tab-bg-overlay {
  @apply xl:h-[900px] max-h-screen  absolute w-full;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) -57.5%,
    rgba(0, 0, 0, 0) 98.72%
  );
}
.info {
  color: #ffffff99;
}
</style>
