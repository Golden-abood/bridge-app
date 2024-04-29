<template>
  <div class="bg-black mi-h-screen">
    <div class="container pt-10">
      <Nav />
    </div>
    <div class="flex justify-between items-start mt-24 container !pr-0">
      <LoginCard class="w-[600px] px-6 py-6 rounded-3xl" />
      <div class="sticky !-right-16 max-w-[70%]">
        <img src="/images/login.svg" class="mt-36" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
