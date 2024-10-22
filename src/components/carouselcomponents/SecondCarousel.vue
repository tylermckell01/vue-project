<template>
  <div class="carousel-container">
    <div class="title">second Component</div>
    <div class="component second">
      <div class="add">
        <input type="text" placeholder="add expense" v-model="expenseInput" />
        <input
          type="text"
          placeholder="cost"
          v-model="costInput"
          @keydown.enter="addToList"
        />
        <button @click="addToList">click</button>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in expenseList" :key="index">
            {{ item.expense }}: ${{ item.cost }}
            <button @click="editExpense(index)">edit</button>
            <button @click="removeFromList(index)">-</button>
          </li>
        </ul>
      </div>
      <div v-if="isEditing">
        <input type="text" />
        <input type="text" />
        <button>save</button>
        <button>cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SecondCarousel",
  setup() {
    const expenseList = ref([]);
    const expenseInput = ref();
    const costInput = ref(0);

    const isEditing = ref(false);

    const addToList = () => {
      expenseList.value.push({
        expense: expenseInput.value,
        cost: costInput.value,
      });

      expenseInput.value = "";
      costInput.value = 0;
    };

    const removeFromList = (index) => {
      expenseList.value.splice(index, 1);
    };

    const editExpense = () => {
      if (isEditing.value == true) {
        isEditing.value = false;
      } else {
        isEditing.value = true;
        console.log(isEditing.value);
      }
    };

    return {
      expenseInput,
      costInput,
      expenseList,
      addToList,
      removeFromList,
      editExpense,
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
    input {
    }

    button {
    }
  }

  .second {
    background-color: teal;
  }
}
</style>
