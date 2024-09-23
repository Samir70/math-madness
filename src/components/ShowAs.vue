<script setup>
const props = defineProps({
  answers: [String, Number],
})
</script>

<template>
  <div id="answer-options">
    <div v-for="(ans, idx) in answers" v-bind:key="idx" v-bind:id="`answer-${idx}`">
      {{ ans }}
    </div>
  </div>
</template>

<style scoped></style>