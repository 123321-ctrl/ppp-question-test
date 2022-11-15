<template>
  <div class="index-page">
    <div class="card">
      <h2 class="text">答题测试</h2>
    </div>
    <div class="card">
      <div>请先输入昵称：</div>
      <br/>
      <van-field
        v-model="username"
        autofocus
        placeholder="好名有机会得到更多的分数"
      />
      <van-button
        block
        type="primary"
        :disabled="username.length < 1"
        @click="doStart"
      >
        开始答题
      </van-button>
    </div>
    <div class="card">
      <template v-if="start && currentQuestions.length > 0">
      <QuestionBoard
        :currentQuestions="currentQuestions"
        @onSubmit="doSubmit"
      />
    </template>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import QuestionBoard from "../components/QuestionBoard.vue";
import myAxios from "../request";
import { useRouter } from "vue-router";
import { Toast } from "vant";
import { useQusetionStore } from "../store";
const qusetionStore = useQusetionStore();

const router = useRouter();

const username = ref("");
const start = ref(false);
const currentQuestions = ref([]);

onMounted(async () => {
  const res = await myAxios.get("/api/question/list");
  if (res.state === 200) {
    qusetionStore.currentQuestions = res.data
    currentQuestions.value = res.data;
  } else {
    Toast("获取题目失败，请刷新重试");
  }
});

const doSubmit = async (score, answers) => {
  const res = await myAxios.post("/api/user_score/add", {
      username: username.value,
      answers:JSON.stringify(answers) ,
      score:JSON.stringify(score) ,
      questionIds: JSON.stringify(currentQuestions.value.map((question) => question.id)) ,
  });
  if (res.state === 200) {
    router.push({
      path: `/result/${username.value}`,
    });
  } else {
    Toast("提交失败");
  }
};

const doStart = () => {
  start.value = true;
};
</script>

<style scoped>
.text {
  text-align: center;
  margin-bottom: 16px;
  margin-top: 0;
}
.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 5px;
}
button{
  margin-top: 10px;
}
</style>