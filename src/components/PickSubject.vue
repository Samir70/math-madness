<script setup>
import { ref } from 'vue'

// defineProps({
//   title: String,
// })

// const count = ref(0)
</script>

<template>
  <form id="q-picker-form" class="shadow p-3 mb-5 bg-white rounded">
    <div class="form-floating mb-2">
      <select class="form-select" id="pickChapter">
        <option value="Algebra">Algebra</option>
        <option value="Fractions">Fractions</option>
        <option value="Ratio">Ratio</option>
      </select>
      <label for="pickChapter">Pick a Chapter</label>
    </div>
    <div class="form-floating mb-2">
      <select class="form-select" id="pickSection">
        <option value="Section 1">Section 1</option>
        <option value="Section 2">Section 2</option>
        <option value="Section 3">Section 3</option>
      </select>
      <label for="pickSection">Pick a section</label>
    </div>
    <button type="submit" form="q-picker-form" class="btn btn-outline-primary btn-sm myBtn">START GAME</button>
  </form>
</template>

<style scoped>
/* .class-name {
  
} */
</style>