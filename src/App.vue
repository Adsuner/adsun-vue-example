<script setup>
import { ref } from "vue";
import { useAdsun } from "./useAdsun";
const coins = ref(0);
const { show } = useAdsun("YOUR_BLOCK_ID", true);
const watch = () => show().then(() => (coins.value += 100)).catch((r) => console.log(r));
</script>
<template><main><h1>Coins: {{ coins }}</h1><button @click="watch">Watch ad → +100</button></main></template>
