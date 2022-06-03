<template>
  <a class="icon" :href="href"><i :class="icon ? `${icon}` : null"></i></a>
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
