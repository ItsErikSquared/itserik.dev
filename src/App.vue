<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

console.log("%cHey!", "font-size:100px; color:red");
console.log("%cWhy are you inspecting my elements?", "font-size:20px");
console.log(
  "%cIt's a horrible example! Try stackoverflow, or a better developer's site.",
  "font-size:20px"
);
console.log(
  "%cHere's a cookie for your troubles... \uD83C\uDF6A",
  "font-size:20px"
);
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition :name="'fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <NavBar></NavBar>
</template>

<style>
@import "@/assets/base.css";
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
