<template>
  <a class="icon" :href="href"><i :class="icon ? `${icon}` : null"></i></a>
  <div v-if="icon == 'fa-brands fa-discord'" id="discord-parent">
    <div id="discord"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    icon: String,
    href: String,
  },
};
</script>

<style>
#discord-parent {
  position: absolute;
  display: inline;
}
#discord {
  position: relative;
  bottom: -22px;
  right: 14px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  transition: 0.5s;
}
#discord.online {
  background-color: rgba(59, 165, 93);
}
#discord.idle {
  background-color: rgb(250, 168, 26);
}
#discord.dnd {
  background-color: rgb(237, 66, 69);
}

.icon {
  font-size: 2em;
  color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  transition: 0.5s;
}

.icon:hover,
.icon:active,
.icon:focus {
  color: rgba(0, 0, 0, 0.7);
}
</style>
