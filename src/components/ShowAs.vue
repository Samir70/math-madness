<script setup>
import { ref } from 'vue';
const props = defineProps({
  answers: [String, Number],
})
const emit = defineEmits(['userAns'])
let optionClass = ref(Array(props.answers.length).fill("mcq-option"))
let userAns = ref("")
const handleClick = (ans, idx) => {
  optionClass.value = Array(props.answers.length).fill("mcq-option")
  optionClass.value[idx] = "mcq-option mcq-selected"
  userAns.value = ans
}
</script>

<template>
  <div id="answer-options">
    <div v-for="(ans, idx) in answers" 
      v-bind:key="idx" v-bind:id="`answer-${idx}`" 
      v-on:click="handleClick(ans, idx)"
      v-bind:class="optionClass[idx]">
      {{ ans }}
    </div>
  </div>
  <button id="submit-answer" 
    v-on:click="$emit('userAns', userAns)" 
    v-bind:disabled="userAns === ''">Submit Answer</button>
</template>

<style scoped>
#answer-options {
  display: flex;
  justify-content: center;
  width: 90vw;
  margin: auto;
}

.mcq-option {
  font-size: 3rem;
  border: 1px solid black;
  margin: 0px 5px;
  padding: 2px;
}

.mcq-selected {
  box-shadow: 5px 5px 1px 1px darkblue;
}

#submit-answer {
  font-size: 2rem;
  display: block;
  margin: 7px auto;
}
</style>