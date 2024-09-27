<script setup>
import ShowQ from "./ShowQ.vue"
import ShowAs from "./ShowAs.vue"

const props = defineProps({
  qList: [Object],
})
const shuffle = (list) => {
  let len = Math.min(list.length, 6)
  const permutations = [1, 1, 2, 6, 24, 120, 720][len]
  const rndPerm = Math.floor(Math.random() * permutations)
  const possNumbers = len ** len
  let nums = [...Array(possNumbers)].map((x, i) => i.toString(len))
    .map(n => {
      while (n.length < len) { n = "0" + n }
      return n
    }).filter(n => {
      let seen = new Set()
      for (let digit of n) {
        if (seen.has(digit)) { return false }
        seen.add(digit)
      }
      return true
    })
  return nums
}
let qNumber = 0
const getQDetails = (qNum) => {
  let ansList = [...props.qList[qNum].wrongOptions, props.qList[qNum].a]
  return {
    curQ: props.qList[qNum].q,
    options: shuffle(ansList)
  }
}
let { curQ, options } = getQDetails(qNumber)
</script>

<template>
  <ShowQ v-bind:question="curQ" />
  <ShowAs v-bind:answers="options" />
  <p>{{ options.length }} = {{ options.join(",") }}</p>
</template>

<style>
p {
  font-size: 3rem;
}
</style>