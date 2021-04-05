<template>
  <div class="app-main-layout">
    <main class="app-content">
      <Header />
      <div class="app-page">
        <router-view />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainLayout",
  components: { Header, Footer },
};
</script>
