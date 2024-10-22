<template>
  <div class="carousel-container">
    <div class="title">second Component</div>
    <div class="component second">
      <div class="add">
        <input type="text" placeholder="add expense" v-model="expenseInput" />
        <input
          type="text"
          placeholder="$ cost"
          v-model="costInput"
          @keydown.enter="addToList"
        />
        <button @click="addToList">add</button>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in expenseList" :key="index">
            <div v-if="!item.isEditing">
              {{ item.expense }}: ${{ item.cost }}
              <button @click="editExpense(index)">edit</button>
              <button @click="removeFromList(index)">-</button>
            </div>
            <div v-else>
              <input v-model="tempExpense" />
              <input v-model="tempCost" />
              <button @click="saveExpense(index)">save</button>
              <button @click="cancelEdit(index)">cancel</button>
            </div>
          </li>
        </ul>
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

    const tempExpense = ref("");
    const tempCost = ref(0);

    const addToList = () => {
      expenseList.value.push({
        expense: expenseInput.value,
        cost: costInput.value,
        isEditing: false,
      });

      expenseInput.value = "";
      costInput.value = 0;
    };

    const removeFromList = (index) => {
      expenseList.value.splice(index, 1);
    };

    const editExpense = (index) => {
      tempExpense.value = expenseList.value[index].expense;
      tempCost.value = expenseList.value[index].cost;
      expenseList.value[index].isEditing = true;
    };

    const saveExpense = (index) => {
      expenseList.value[index].expense = tempExpense.value;
      expenseList.value[index].cost = tempCost.value;
      expenseList.value[index].isEditing = false;
    };

    const cancelEdit = (index) => {
      expenseList.value[index].isEditing = false;
    };

    return {
      expenseInput,
      costInput,
      expenseList,
      tempExpense,
      tempCost,
      addToList,
      removeFromList,
      editExpense,
      saveExpense,
      cancelEdit,
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
