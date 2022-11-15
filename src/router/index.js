import IndexPage from "../pages/IndexPage.vue";
import ResultPage from "../pages/ResultPage.vue";
import RankPage from "../pages/RankPage.vue";
import showQuestion from '../components/showQuestion.vue'

const routes = [
  { path: "/", component: IndexPage },
  {
    path: "/result/:username",
    component: ResultPage,
    props: true,
  },
  {
    path: "/rank",
    component: RankPage,
  },
  {
    path: '/detail',
    component: showQuestion
  }
];

export default routes;
