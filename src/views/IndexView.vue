<template>
  <main>
    <img alt="Erik Cursive Logo" class="logocenter nosel" src="/logo.svg" />
    <h1 class="nosel"><span id="hi"></span></h1>
  </main>
</template>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

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

h1 {
  color: white;
  text-align: center;
  font-size: 2em;
}

@media only screen and (min-width: 750px) {
  h1 {
    font-size: 3em;
  }
}
</style>

<script lang="ts">
import Typed from "typed.js";
let typed: Typed;
export default {
  mounted() {
    document.title = "Hi, I'm Erik";
    typed = new Typed("#hi", {
      strings: [
        "^750Hi!",
        "Hi^750,^750 I'm Erik!",
        "Hi, I'm Erik.^1500 ^750I'm a developier.^1000",
        "Hi, I'm Erik. I'm a developer.^1500",
        "Hi, I'm Erik.^3000",
        "Hi, I^2000 have n^100o^100 c^100l^100u^100e ^110w^110h^120a^120t^120 ^140t^140o ^150t^160y^170p^180e^185 ^190h^190e^195r^195e^200.^200.^200.^3000",
        "Hi",
        "Hi^3000, I'm Erik^5000 :)",
        "Hi, I'm Erik^1000",
      ],
      onComplete() {
        typed.stop();
        document
          .querySelectorAll(".typed-cursor")[0]
          .setAttribute("style", "display: none");
      },
      smartBackspace: true,
      typeSpeed: 75,
      backDelay: 1500,
    });
    typed.start();
  },
  unmounted() {
    document.title = "ItsErik";
    typed.destroy();
  },
};
</script>
