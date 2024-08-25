# Math Madness

## useful commands
manual testing
- npm run dev

auto-testing
- npx cypress open
- npm run test

[adding bootstrap](https://dev.to/alex1the1great/vue3-vite-boostrap-5-sass-setup-2fcn)

## Components

### Quiz
- This component recieves 3..30 questions. 
- It displays each question in turn using the MultiChoice component.
- It keeps track of the number of lives left
- If it registers three incorrect answers, it returns the number of questions answered correctly
- If the user gets through all the questions, it returns that number.

### MultiChoice
- This component receives a question, its answer and also two or three alternatives (where possible: these should be chosen in the manner of Diagnostic Questions - include common wrong answers). 
- The question is displayed with the ShowQ component
- The answers are displayed with the ShowAns component
- The component returns whether the question was answered correctly

### ShowQ
- This component recieves a question (Might manage various tyes, but will start with text)
- Text questions should use MathJax to display maths correctly

### ShowAns
- This component recieves the correct ans and a list of alternatives
- It shuffles the ans and althernatives and displays them all
- It waits for the user to select an answer
- It returns whether the answer is correct or not
- If a user picks the wrong answer, the chosen wrong answer should go red. 
- Whatever the user choses, the correct answer should go green

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
