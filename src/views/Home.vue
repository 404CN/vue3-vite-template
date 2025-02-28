<template>
  <h1>Home</h1>
  <p>{{ app }}</p>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "../stores/index";
import { storeToRefs } from "pinia";

const { app } = storeToRefs(useAppStore());
const { setTheme } = useAppStore();
</script>