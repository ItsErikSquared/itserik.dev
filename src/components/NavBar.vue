<template>
  <div class="icons">
    <NavBarItem
      icon="fa-brands fa-discord"
      href="https://discord.com/users/161253450997301248"
    ></NavBarItem>
    <NavBarItem
      icon="fa-brands fa-github"
      href="https://github.com/ItsErikSquared"
    ></NavBarItem>
    <NavBarItem
      icon="fa-brands fa-keybase"
      href="https://keybase.io/ItsErikSquared"
    ></NavBarItem>
    <NavBarItem
      icon="fa-brands fa-twitter"
      href="https://twitter.com/ItsErikSquared"
    ></NavBarItem>
  </div>
  <LanyardItem></LanyardItem>
</template>

<script lang="ts">
import NavBarItem from "./NavBarItem.vue";
import LanyardItem from "./LanyardItem.vue";
export default { components: { NavBarItem, LanyardItem } };
</script>

<style>
.icons {
  position: fixed;
  bottom: 10px;
  text-align: center;
  width: 100%;
  margin: 0px;
}
</style>
