<template>
  <div class="header">
    <div class="header__name">
      <img src="../assets/img/header/logo.svg" class="header__logo" />
      <h1 class="header__title">гиперкорпортал</h1>
    </div>
    <div class="header__searchBlock">
      <input type="text" class="header__search-input" />
      <button class="header__search-button"></button>
    </div>
    <button class="header__menu"></button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
