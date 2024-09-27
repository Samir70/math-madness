<script setup>
const props = defineProps({
  answers: [String, Number],
})
</script>

<template>
  <div id="answer-options">
    <div v-for="(ans, idx) in answers" 
      v-bind:key="idx" 
      v-bind:id="`answer-${idx}`"
      v-on:click="$emit('userAns', ans)">
      {{ ans }}
    </div>
  </div>
</template>

<style scoped>
#answer-options {
  font-size: 3rem;
}
</style>