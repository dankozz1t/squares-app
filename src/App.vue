<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isGamePage = computed(() => route.name === 'game');
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <RouterLink class="header__link router-link" to="/">Home</RouterLink>
      <RouterLink v-if="isGamePage" class="header__link router-link" to="/game"> Game </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.header {
  padding: 32px;

  font-size: 24px;
  font-weight: 600;

  color: var(--secondary-text-cl);
  background-color: var(--secondary-bg-cl);
}

.header__navigation {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.header__link {
  height: 100%;
}
</style>
