<template>
  <div>
    <TestComponent :message="message" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TestComponent from '@/components/TestComponent';

const message = ref('Hello world');
</script>

<style lang="scss">
html {
  font-size: 100PX;
}

body {
  background-color: #1e1e1e;
  color: #eaffff;
  font-size: 20px;
}
</style>
