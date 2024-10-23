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
        <div class="error-toast" v-if="addErrorToast">
          {{ addErrorToast }}
        </div>
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
              <div class="error-toast" v-if="item.isEditing && editErrorToast">
                {{ editErrorToast }}
              </div>
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
    const expenseInput = ref("");
    const costInput = ref("");

    const tempExpense = ref("");
    const tempCost = ref(null);

    const addErrorToast = ref("");
    const editErrorToast = ref("");

    const addToList = () => {
      addErrorToast.value = "";

      if (!expenseInput.value && !costInput.value) {
        addErrorToast.value = "must fill both fields";
      } else if (!costInput.value) {
        addErrorToast.value = "must add expense cost";
      } else if (!expenseInput.value) {
        addErrorToast.value = "must add expense name";
      } else if (isNaN(costInput.value)) {
        addErrorToast.value = "cost must be a number";
      } else {
        expenseList.value.push({
          expense: expenseInput.value,
          cost: parseFloat(costInput.value),
          isEditing: false,
        });

        expenseInput.value = "";
        costInput.value = "";
      }
      console.log(addErrorToast.value);
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
      editErrorToast.value = "";

      if (!tempExpense.value && !tempCost.value) {
        editErrorToast.value = "must fill both fields";
      } else if (!tempCost.value) {
        editErrorToast.value = "must add expense cost";
      } else if (!tempExpense.value) {
        editErrorToast.value = "must add expense name";
      } else if (isNaN(tempCost.value)) {
        editErrorToast.value = "cost must be a number";
      } else {
        expenseList.value[index].expense = tempExpense.value;
        expenseList.value[index].cost = parseFloat(tempCost.value);
        expenseList.value[index].isEditing = false;
        editErrorToast.value = "";
      }
      console.log(editErrorToast.value);
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
      addErrorToast,
      editErrorToast,
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
