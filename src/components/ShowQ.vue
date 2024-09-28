<script setup>
const props = defineProps({
  question: String,
})
</script>

<template>
  <div id="current-q">
    <h2 id="q-text">{{ props.question || "No question passed as props" }}</h2>
  </div>
</template>

<style scoped>
#current-q {
  width: 80vw;
  margin: 0px auto 9px;
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  box-shadow: 5px 5px 1px 1px darkblue;
}
</style>