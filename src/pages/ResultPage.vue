<template>
  <div class="result-page">
    <div class="card">
      <h1>{{ username }}</h1>
      <div>得分：{{ qusetionStore.currentScore }}</div>
      <div>鉴定你是：</div>
      <h2 class="desc">
        {{ scorddesc }}
      </h2>
      <van-button class="margin-bottom-8" block type="primary" @click="toDetail"
        >查看答题情况
      </van-button>
      <van-button
        class="margin-bottom-8"
        block
        type="primary"
        @click="toRankPage"
        >查看排行
      </van-button>
      <van-button block type="warning" @click="doRestart">重新测试</van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import myAxios from "../request";
import { get } from "vant/lib/utils";
import { useQusetionStore } from "../store";
const qusetionStore = useQusetionStore();
const router = useRouter();
const route = useRoute();

const username = computed(() => {
  return route.params.username;
});
const getData = ref({});
const desc = ["青铜", "白银", "黄金", "铂金", "钻石", "最强王者"];
const scorddesc = computed(() => {
  const score = qusetionStore.currentScore;
  console.log('scres',score)
  if (score < 5) {
    return desc[0];
  } else if (score < 10) {
    return desc[1];
  } else if (score < 20) {
    return desc[2];
  } else if (score < 30) {
    return desc[3];
  } else if (score < 40) {
    return desc[4];
  } else {
    return desc[5];
  }
});

const toDetail = () => {
  router.push({
    path: "/detail",
  });
};

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
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 20px;
}
.desc{
  color: rgba(231, 7, 7, 0.708);
  text-align: center;
}
.margin-bottom-8 {
  margin-bottom: 8px;
}
</style>