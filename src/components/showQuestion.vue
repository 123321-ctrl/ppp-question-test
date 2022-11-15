<template>
  <div class="showQuestion">
    <div
      v-for="(item, index) in qusetionStore.currentQuestions"
      :key="index"
      class="item"
    >
      <div class="title">
        {{ index + 1 }}、{{ item.name }}
        <span v-if="item.checkType === 'multiple' && item.max"
          >（最多选 {{ item.max }} 项）</span
        >
        <span v-if="item.checkType === 'single'">（单选）</span>
      </div>
      <template v-if="item.checkType === 'single'">
        <van-radio-group
          v-model="qusetionStore.answers[index][0]"
          disabled="true"
        >
          <van-radio
            v-for="(option, idx) in item.options"
            :key="idx"
            class="margin-bottom-8"
            :name="option.key"
          >
            {{ `${option.key}. ${option.name}` }}
          </van-radio>
        </van-radio-group>
      </template>
      <template v-else>
        <van-checkbox-group
          v-model="qusetionStore.answers[index]"
          :max="item.max"
          disabled="true"
        >
          <van-checkbox
            v-for="(option, index) in item.options"
            :key="index"
            class="options"
            :name="option.key"
            shape="square"
          >
            <span class="option">{{ `${option.key}. ${option.name}` }}</span>
          </van-checkbox>
        </van-checkbox-group>
      </template>
    </div>
    <van-button class="margin-bottom-8" block type="primary" @click="toRankPage"
      >查看排行
    </van-button>
    <van-button block type="warning" @click="doRestart">重新测试</van-button>
    <van-button type="primary" block @click="goBack">返回</van-button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useQusetionStore } from "../store";
const qusetionStore = useQusetionStore();
const router = useRouter();
const route = useRoute();

// onMounted(() => {
//   console.log("qqq", qusetionStore.currentQuestions);
//   console.log("aaa", qusetionStore.answers);
// });
const toRankPage = () => {
  router.push({
    path: "/rank",
  });
};

const doRestart = () => {
  router.replace({
    path: "/",
  });
};
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.showQuestion {
  padding: 0 19px 0 20px;
}
.item {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 5px;
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