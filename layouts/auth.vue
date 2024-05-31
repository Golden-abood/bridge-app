<template>
  <div class="bg-black mi-h-screen">
    <div class="container pt-10">
      <Nav />
    </div>
    <div
      class="flex md:!flex-row flex-col justify-between md:items-start mt-24 container md:!pr-0"
    >
      <AuthCard class="md:w-[600px] px-6 py-6 rounded-3xl" />
      <div class="sticky hidden md:flex !md:-right-16 md:max-w-[70%]">
        <img src="/images/login.svg" class="mt-10 md:mt-36" />
      </div>
    </div>
    <div class="sticky md:hidden">
      <img src="/images/login.svg" class="mt-10 w-full" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
