<template>
  <main>
    <h1>Projects</h1>
    <h3>Coming soon... Maybe?</h3>
    <LinkButton rref="/" text="Home"></LinkButton>
  </main>
</template>

<style>
h3 {
  color: white;
  text-align: center;
}

.linkbutton {
  justify-content: center;
  display: flex;
  font-size: 2em;
}
</style>

<script lang="ts">
import LinkButton from "../components/LinkButton.vue";
export default {
  components: {
    LinkButton,
  },
};
</script>
