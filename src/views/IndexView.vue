<template>
  <main>
    <img alt="Erik Cursive Logo" class="logocenter" src="/logo.svg" />
    <h1><span ref="hi" id="hi"></span></h1>
    <div class="links">
      <!-- <LinkButton rref="/projects" text="Projects" /> -->
    </div>
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

.logocenter.nofade {
  animation-duration: 0s;
}

h1 {
  color: white;
  text-align: center;
  font-size: 2em;
  transition: 0.5s;
}

@media only screen and (min-width: 750px) {
  h1 {
    font-size: 3em;
  }
}
</style>

<script lang="ts">
import Typed from "typed.js";
import type { Ref } from "vue";
import { ref } from "vue";
let hi: Ref<HTMLHeadingElement> = ref(null as unknown as HTMLHeadingElement);
let typed: Typed;

let stopTyping = () => {
  if (typed) typed.destroy();
  if (hi.value) hi.value.innerHTML = "Hi, I'm Erik";
  document.getElementsByClassName("logocenter")[0].className += " nofade";
};

export default {
  setup() {
    return {
      hi,
    };
  },
  mounted() {
    document.title = "Hi, I'm Erik";

    if (sessionStorage.getItem("ied.typed")) {
      //angry lint
      stopTyping();
    } else {
      typed = new Typed("#hi", {
        strings: [
          "Hi!",
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
          sessionStorage.setItem("ied.typed", "a");
        },
        smartBackspace: true,
        typeSpeed: 75,
        backDelay: 1500,
        startDelay: 1000,
      });
      typed.start();
    }
  },
  unmounted() {
    document.title = "ItsErik";
    if (typed) typed.destroy();
  },
  methods: {
    stopTyping,
  },
  // components: { LinkButton },
};
</script>
