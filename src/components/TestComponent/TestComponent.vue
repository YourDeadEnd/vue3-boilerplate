<script lang="ts" setup>
import type { TestComponentProps } from './types';

const props = defineProps<TestComponentProps>();
</script>

<template>
  <div>
    {{ props.message }}
  </div>
</template>
