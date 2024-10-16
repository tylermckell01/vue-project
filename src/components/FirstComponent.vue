<template>
  <div class="header">This is your {{ msg2 }}</div>
  <div class="data-bind">
    This is two-way data binding -->
    <input v-model="message" />
    <p v-if="message">{{ message }}</p>
    <div v-else>this is where the input will appear</div>
  </div>
  <div class="counter">
    <div class="title">this is the counter</div>
    <div class="count">
      <button @click="dec">-</button>
      <span>{{ count }}</span>
      <button @click="inc">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FirstComponent",
  props: {
    msg2: String,
  },
  setup() {
    const count = ref(0);

    const inc = () => count.value++;
    const dec = () => count.value--;

    return {
      count,
      inc,
      dec,
    };
  },

  data() {
    return {
      message: "",
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  .header {
    background-color: #41b883;
  }

  .data-bind {
    margin: 30px 0;
  }

  .counter {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    padding: 10px;
    background-color: rgb(109, 109, 253);

    .count {
      button {
        margin: 0 20px;
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
    }
  }

  .data-bind {
    background-color: white;

    input {
      width: 200px;
    }
  }
}
</style>
