<template>
  <UInput
    class="border-2 border-solid border-[#303030] p-2 rounded-lg duration-200 hover:!border-[#676767] font-medium !text-lg"
    variant="none"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
