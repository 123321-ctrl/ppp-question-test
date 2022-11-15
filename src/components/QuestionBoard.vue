<template>
  <div class="question-board">
    <div class="title">
      {{ currentNum }}、{{ question.name }}
      <span v-if="question.checkType === 'multiple' && question.max"
        >（最多选 {{ question.max }} 项）</span
      >
      <span v-if="question.checkType === 'single'">（单选）</span>
    </div>
    <template v-if="question.checkType === 'single'">
      <van-radio-group v-model="answers[currentNum - 1][0]">
        <van-radio
          v-for="(option, idx) in question.options"
          :key="idx"
          class="margin-bottom-8"
          :name="option.key"
        >
          {{ `${option.key}. ${option.name}` }}
        </van-radio>
      </van-radio-group>
    </template>
    <template v-else>
      <van-checkbox-group v-model="answers[currentNum - 1]" :max="question.max">
        <van-checkbox
          v-for="(option, index) in question.options"
          :key="index"
          class="options"
          :name="option.key"
          shape="square"
        >
          <span class="option">{{ `${option.key}. ${option.name}` }}</span>
        </van-checkbox>
      </van-checkbox-group>
    </template>
    <van-button
      v-if="currentNum >= currentQuestions.length"
      class="margin-bottom-8"
      type="success"
      block
      @click="doSubmit"
    >
      提交
    </van-button>
    <van-button
      v-if="currentNum < currentQuestions.length"
      type="primary"
      class="margin-bottom-8"
      block
      @click="toNextQuestion"
    >
      下一题
    </van-button>
    <van-button
      v-if="currentNum > 1"
      class="margin-bottom-8"
      block
      @click="toPrevQuestion"
    >
      上一题
    </van-button>
    <!-- 进度 -->
    <van-progress
      :percentage="(currentNum * 100) / currentQuestions.length"
      :show-pivot="false"
    />
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import { useQusetionStore } from "../store";
const qusetionStore = useQusetionStore();
const emits = defineEmits(["onSubmit"]);
const props = defineProps(["currentQuestions"]);

// 初始化答案数组
const initAnswers = props.currentQuestions.map(() => {
  return [];
});
const currentNum = ref(1);
// 用户答案
const answers = ref(initAnswers); //[[],[],[],...]
qusetionStore.answers = answers.value;
// 当前题目
const question = computed(() => {
  return props.currentQuestions[currentNum.value - 1];
});

// 当前得分
const currentScore = computed(() => {
  let score = 0;
  props.currentQuestions.forEach((question, index) => {
    const userAnswer = answers.value[index]; //[]
    console.log("test",userAnswer)
    console.log("question",question)
    // 单选
    if (userAnswer.length === 1 && userAnswer[0] === question.answer[0]) {
      console.log("dan")
      score += question.score;
    }
    //多选
    if (userAnswer.length > 1) {
      question.options.forEach((option) => {
        // 选中了改答案
        if (userAnswer.includes(option.key)) {
          score += option.score;
        }
      });
    }
  });
  qusetionStore.currentScore = score
  return score;
});

const toNextQuestion = () => {
  if (currentNum.value < props.currentQuestions.length) {
    currentNum.value++;
  }
};

const toPrevQuestion = () => {
  if (currentNum.value > 1) {
    currentNum.value--;
  }
};

const doSubmit = () => {
  emits("onSubmit", currentScore.value, answers.value);
};
</script>

<style scoped>
.question-board {
  padding: 0 19px 0 20px;
}
.title {
  padding-bottom: 7px;
  margin-bottom: 7px;
  border-bottom: 1px solid gray;
}
.margin-bottom-8 {
  margin-bottom: 8px;
}
.options {
  height: 51px;
  font-size: 16px;
  position: relative;
  margin-bottom: 0;
}
.option {
  position: absolute;
  top: 12px;
}
</style>