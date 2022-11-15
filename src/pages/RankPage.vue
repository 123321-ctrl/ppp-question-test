<template>
    <div class="result-page">
    <div class="card margin-bottom-16">
      <h2 class="text-align-center margin-bottom-16 margin-top-0">
         排行
      </h2>
      <van-list class="margin-bottom-8 rank-list">
        <van-cell
          v-for="(userScoreInfo, index) in userScoreRankList"
          :key="index"
          :title="`${index + 1}. ${userScoreInfo.username}`"
          :value="userScoreInfo.score"
        />
      </van-list>
      <van-button type="primary" block @click="goBack">返回</van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import myAxios from "../request";
import { Toast } from "vant";
const router = useRouter();

// 排行列表
const userScoreRankList = ref([]);

onMounted(async () => {
  // 请求排行榜
  const res = await myAxios.get("/api/user_score/list/rank");
  if (res.state === 200) {
    userScoreRankList.value = res.data;
  } else {
    Toast("获取失败，请刷新重试");
  }
});
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.rank-list {
  max-height: 440px;
  overflow: scroll;
}
</style>