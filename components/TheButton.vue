<template>
  <UButton
    color="primary"
    variant="solid"
    :label="label"
    class="!bg-primary"
    :class="isDark ? '!text-black' : '!text-white'"
  ></UButton>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped></style>
