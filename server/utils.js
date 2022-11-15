const { questions } = require('./data/questions')
const { addUserScore, getUserScore,UserScoreRank } = require('./data/handleData')
const _ = require("lodash");

// 随机获取题目
const listQuestionsApi = () => {
    return _.sampleSize(questions, 5);
}

// 添加用户得分
async function addUserScoreApi(event) {
    const { questionIds, answers, score, username } = event;
    return await addUserScore(questionIds, answers, score, username)
}

// 获取用户得分及排名
async function getUserScoreApi(event) {
    const { username } = event;
    if (!username) {
        console.log("出错啦")
        throw new Error("出错啦")
    }
    let body = await getUserScore(username);
    return body
}

async function getUserScoreRankApi() {
    return await UserScoreRank()
}

module.exports = { listQuestionsApi, addUserScoreApi, getUserScoreApi,getUserScoreRankApi }