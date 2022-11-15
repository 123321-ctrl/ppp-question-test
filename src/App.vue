<template>
  <div class="app">
    <div class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
      
    </div>
  </div>
</template>

<script setup ></script>

<style scoped>
.app {
  padding: 20px 20px 50px;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  /* background: url("./assets/0.jpeg");
  background-size: 100% 100%; */
}

.main {
  max-width: 720px;
  margin: 0 auto;
}
</style>
