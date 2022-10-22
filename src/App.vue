<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: () => ({
    message: 'Hello World',
  }),
});
</script>

<style lang="scss">
body {
  background-color: #1e1e1e;
  color: #eaffff;
  font-size: 20px;
}
</style>
