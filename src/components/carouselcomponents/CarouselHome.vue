<template>
  <div class="carousel-container">
    <div class="title">Carousel</div>
    <!-- <component :is="renderComp[currentIndex]"></component> -->
    <keep-alive>
      <component :is="renderComp[currentIndex]"></component>
    </keep-alive>

    <div class="selector">
      <button @click="lastComp">{{ "<" }}</button>
      <div class="selector-circle" :class="{ active: currentIndex == 0 }"></div>
      <div class="selector-circle" :class="{ active: currentIndex == 1 }"></div>
      <div class="selector-circle" :class="{ active: currentIndex == 2 }"></div>
      <button @click="nextComp">{{ ">" }}</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FirstCarousel from "./FirstCarousel.vue";
import SecondCarousel from "./SecondCarousel.vue";
import ThirdCarousel from "./ThirdCarousel.vue";

export default {
  name: "CarouselHome",
  setup() {
    const renderComp = ref([FirstCarousel, SecondCarousel, ThirdCarousel]);
    const currentIndex = ref(1);

    const lastComp = () => {
      if (currentIndex.value === 0) {
        currentIndex.value = renderComp.value.length - 1;
      } else {
        currentIndex.value--;
      }
    };

    const nextComp = () => {
      if (currentIndex.value === renderComp.value.length - 1) {
        currentIndex.value = 0;
      } else {
        currentIndex.value++;
      }
    };

    return {
      renderComp,
      currentIndex,
      nextComp,
      lastComp,
    };
  },

  components: {
    FirstCarousel,
    SecondCarousel,
    ThirdCarousel,
  },
};
</script>

<style lang="scss">
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
  }

  .component {
  }

  .selector {
    display: flex;
    margin-top: 20px;
    margin-bottom: 100px;

    button {
    }

    .selector-circle {
      padding: 5px;
      margin: 6px;
      border-radius: 5px;
      background-color: gray;
    }

    .active {
      background-color: #3fb883;
    }
  }
}
</style>
