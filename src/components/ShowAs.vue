<script setup>
import { ref } from 'vue';
const props = defineProps({
  answers: [String, Number],
})
const optionClass = ref("mcq-option")
</script>

<template>
  <div id="answer-options">
    <div v-for="(ans, idx) in answers" 
      v-bind:key="idx" 
      v-bind:id="`answer-${idx}`"
      v-on:click="$emit('userAns', ans)"
      v-bind:class="optionClass">
      {{ ans }}
    </div>
  </div>
</template>

<style scoped>
#answer-options {
  font-size: 3rem;
  display: flex;
  justify-content: center;
  width: 90vw;
}
.mcq-option {
  border: 1px solid black;
  margin: 0px 5px;
  padding: 2px;
}
</style>