<template>
  <div class="carousel-container">
    <div class="title">Weather Component</div>
    <div class="component">
      <div class="input">
        <input
          type="text"
          placeholder="Search a new city"
          v-model="inputCity"
          @keydown.enter="handleSubmit"
        />
        <button class="submit-button" @click="handleSubmit">search</button>
        <div class="error-toast">{{ cityError ? cityError : null }}</div>
      </div>
      <div class="city">
        Current City: {{ data != null ? data.address : "n/a" }}
      </div>
      <div class="temp">
        Current Temp:
        {{ data != null ? data.currentConditions.temp : "n/a" }}
      </div>
      <div class="time">
        Current Time:
        {{ data != null ? data.currentConditions.datetime : "n/a" }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const data = ref(null);
const inputCity = ref("");
const cityError = ref(null);

export default {
  name: "FirstCarousel",
  setup() {
    const fetchData = async () => {
      if (!inputCity.value.trim()) {
        cityError.value = "Please enter a city name.";
        data.value = null;
        return;
      }

      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputCity.value}?key=XPUF7PB4S4B6P9AD5GWFTGPSH&contentType=json `
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        data.value = await response.json();
        cityError.value = null;
      } catch (error) {
        cityError.value = error.message;
        data.value = null;
      }
    };

    const handleSubmit = () => {
      fetchData();
      inputCity.value = "";
      console.log(inputCity.value);
    };

    return {
      data,
      inputCity,
      cityError,
      fetchData,
      handleSubmit,
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
    .input {
      display: flex;

      input {
      }
      button {
      }
      .error-toast {
        margin-left: 10px;
      }
    }

    .city {
    }
    .temp {
    }
    .time {
    }
  }
}
</style>
