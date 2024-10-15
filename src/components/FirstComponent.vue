<template>
  <div>This is your {{ msg2 }}</div>
  <div class="data-bind">
    This is two-way data binding -->
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
  <button @click="dec">-</button>
  <div class="count">
    <span>{{ count }}</span>
  </div>
  <button @click="inc">+</button>
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
  background-color: #41b883;
  .count {
    background-color: blue;
  }
}
.data-bind {
  background-color: white;
  input {
    width: 200px;
  }
}
</style>
