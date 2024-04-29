<template>
  <div class="flex justify-between items-center">
    <img src="/images/logo.svg" alt="logo" />

    <div v-if="showUser" class="flex items-center gap-3">
      <UAvatar
        chip-color="primary"
        chip-text=""
        chip-position="top-right"
        size="md"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="avatar"
      />
      <span class="text-sm">Golden Abood</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const showUser = ref(false);
</script>
