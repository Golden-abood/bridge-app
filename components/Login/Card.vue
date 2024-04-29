<template>
  <UCard class="!divide-y-0 border-2 border-[#5e5e5e] !bg-transparent" as="div">
    <template #header>
      <p class="uppercase text-xs">
        {{
          route.path === "/register" ? "lets get you started" : "Welcome Back"
        }}
      </p>
      <h3 class="text-2xl font-semibold mt-3">
        {{
          route.path === "/register"
            ? "Create An Account"
            : "Login To Your Account"
        }}
      </h3>
    </template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <LoginInput type="text" placeholder="Your Name" />
      <LoginInput
        v-if="route.path === '/register'"
        type="email"
        placeholder="Email"
        class="mt-5"
      />
      <LoginInput type="password" placeholder="Password" class="mt-5" />
      <div
        v-if="route.path === '/login'"
        class="flex justify-between items-center text-sm mt-5"
      >
        <div>
          <UCheckbox
            label="Remember Me"
            color="primary-500"
            :model-value="false"
          />
        </div>
        <span>Forgot Password?</span>
      </div>
      <TheButton
        :label="route.path === '/register' ? 'Get Started' : 'Continue'"
        :isDark="false"
        class="w-full !bg-[#ec912b] flex justify-center p-3 mt-5"
      />
    </UForm>
    <template #footer>
      <div class="flex justify-center text-[#aaaaa8]">
        Already have an account?
        <nuxt-link to="/login" class="uppercase font-semibold ml-1 underline">
          Login Here</nuxt-link
        >
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { string, objectAsync, email, minLength, type Input } from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  email: string([email("Invalid email")]),
  password: string([minLength(8, "Must be at least 8 characters")]),
});

type Schema = Input<typeof schema>;

const state = reactive({
  email: "",
  password: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
const route = useRoute();

const handleSubmit = () => {};
</script>

<style scoped></style>
