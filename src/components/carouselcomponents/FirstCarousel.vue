<template>
  <div class="carousel-container">
    <div class="title">Weather Component</div>
    <div class="component" v-if="data">
      <div class="input">
        <input
          type="text"
          placeholder="Search a new city"
          v-model="inputCity"
        />
        <button class="submit-button" @click="handleSubmit">submit</button>
      </div>
      <div class="city">Current City: {{ data.address }}</div>
      <div class="temp">Current Temp: {{ data.currentConditions.temp }}</div>
      <div class="time">
        Current Time: {{ data.currentConditions.datetime }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "FirstCarousel",
  setup() {
    const data = ref(null);
    const inputCity = ref("Orem,UT");

    const fetchData = async () => {
      const response = await fetch(
        // ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Orem%2CUT?unitGroup=us&key=XPUF7PB4S4B6P9AD5GWFTGPSH&contentType=json `
        ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputCity.value}?key=XPUF7PB4S4B6P9AD5GWFTGPSH&contentType=json `
      );

      data.value = await response.json();
    };

    const handleSubmit = () => {
      fetchData();
      // inputCity.value = "";
    };

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      inputCity,
      fetchData,
      handleSubmit,
      onMounted,
    };
  },
};
</script>

<style>
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
  }

  .component {
    .city {
    }
    .temp {
    }
    .time {
    }
  }
}
</style>
