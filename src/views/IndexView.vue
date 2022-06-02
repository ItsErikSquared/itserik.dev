<script setup lang="ts"></script>

<template>
  <main>
    <img class="logocenter" src="@/assets/logo.svg" />
    <h1><span id="hi"></span></h1>
  </main>
</template>

<style>
.logocenter {
  width: 50%;
  max-width: 350px;
  max-height: 350px;
  display: block;
  margin: 25px auto;
  border-radius: 50%;
  background-color: white;
  animation: fadeIn;
  animation-duration: 10s;
}
</style>

<script>
import Typed from "typed.js";
export default {
  mounted() {
    var typed = new Typed("#hi", {
      strings: [
        "^750Hi!",
        "Hi^750,^750 I'm Erik!",
        "Hi, I'm Erik.^1500 ^750I'm a developier.",
        "Hi, I'm Erik. I'm a developer.",
        "Hi, I'm Erik.^1000",
        "Hi, I^2000 have no ^100c^100l^110u^110e^110 ^120w^120h^120a^120t^130 ^140I^140'^145m^145 ^150d^150o^150i^175n^175g^200.^210.^250.^2000",
        "Hi",
        "Hi^3000, I'm Erik^5000 :)",
        "Hi, I'm Erik",
      ],
      smartBackspace: true,
      typeSpeed: 75,
      backDelay: 1500,
    });
    typed.start();
  },
};
</script>
