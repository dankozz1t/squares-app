<script setup>
import { ref } from 'vue';

const sizeX = ref(0);
const sizeY = ref(0);

const toggleCellColor = (event) => {
  const cell = event.target;
  cell.classList.toggle('game__cell--accent');
};
</script>

<template>
  <v-container>
    <v-card class="pa-4" outlined>
      <v-form class="text-center">
        <v-text-field v-model="sizeX" label="Size X" type="number" @input="drawGrid"></v-text-field>
        <v-text-field v-model="sizeY" label="Size Y" type="number" @input="drawGrid"></v-text-field>
      </v-form>

      <div class="game__container">
        <div v-for="rowIndex in parseInt(sizeY)" :key="'row-' + rowIndex" class="game__row">
          <div
            v-for="cellIndex in parseInt(sizeX)"
            :key="'cell-' + rowIndex + '-' + cellIndex"
            class="game__cell"
            @mouseover="toggleCellColor($event)"
          ></div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.game__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  background-color: var(--main-bg-cl);
  padding: 32px;
  border-radius: 6px;
}

.game__row {
  display: flex;
  gap: 2px;
}

.game__cell {
  width: 36px;
  height: 36px;

  background-color: var(--secondary-bg-cl);

  transition: background-color var(--transition-time) var(--transition-cubic);

  &--accent {
    background-color: var(--accent-bg-cl);
  }
}
</style>
