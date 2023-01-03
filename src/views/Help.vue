<template>
  <app-page back title="Help">
    <question-item
    v-for="item in questions"
    :key="item.title"
    :question="item">
    </question-item>
  </app-page>
</template>

<script>

import AppPage from "../components/ui/AppPage.vue";
import QuestionItem from "../components/question/QuestionItem.vue";

export default {
  setup() {
    const questions = [
      {
        title: 'What this system about?',
        text: 'This system contains client records stored in a database'
      },
      {
        title: 'Does this system can be expanded?',
        text: 'The main database of this system is based on Firebase API,' +
            ' which can be easily expanded and maintained'
      }
    ]
    return {
      questions
    }
  },
  components: {QuestionItem, AppPage}
}

</script>