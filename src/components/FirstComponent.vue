<template>
  <div class="header">This is your {{ msg2 }}</div>
  <div class="data-bind">
    This is two-way data binding -->
    <input v-model="message" />
    <p v-if="message">{{ message }}</p>
    <div v-else>this is where the input will appear</div>
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
  .header {
    background-color: #41b883;
  }

  .data-bind {
  }

  .count {
    background-color: rgb(109, 109, 253);
  }
}
.data-bind {
  background-color: white;
  input {
    width: 200px;
  }
}
</style>
