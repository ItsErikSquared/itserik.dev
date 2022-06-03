<template>
  <router-link class="linkbutton" v-if="rref" :to="rref">{{
    text
  }}</router-link>
  <a class="linkbutton" v-else-if="href" :href="href"></a>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    href: String,
    rref: String,
  },
};
</script>
