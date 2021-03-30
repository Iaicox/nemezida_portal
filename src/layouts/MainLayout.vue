<template>
  <div class="app-main-layout">
    <main class="app-content">
      <Header />
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "MainLayout",
  components: { Header },
};
</script>
