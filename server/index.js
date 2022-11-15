const express = require('express')
// const bodyParser = require("body-parser");
const { listQuestionsApi, addUserScoreApi, getUserScoreApi,getUserScoreRankApi } = require('./utils')

const localPort = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all("*", (req, res, next) => {
    // 开启跨域
    res.setHeader("Access-Control-Allow-Credentials", "true");
    const origin = req.get("Origin");
    // 允许的地址 http://127.0.0.1:9000 这样的格式
    if (origin) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    // 允许跨域请求的方法
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, DELETE, PUT"
    );
    // 允许跨域请求 header 携带哪些东西
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
    );
    next();
});

//得到随机的题目√
app.get('/api/question/list', (req, res) => {
    console.log('/api/question/list')
    let result = listQuestionsApi()
    res.send({
        state: 200,
        data: result
    })
})
//上传用户分数等数据
app.post('/api/user_score/add', async (req, res) => {
    console.log('/api/user_score/add')
    const postScore = await addUserScoreApi(req.body)
    if (postScore.affectedRows === 1) {
        res.send({
            state: 200,
            message: "上传成功"
        })
    }else{
        res.send({
            state: 0,
            message: "上传失败"
        })
    }

})
// //得到用户的历史分数
// app.get('/api/user_score/get', async (req, res) => {
//     console.log('/api/user_score/get')
//     const getScore = await getUserScoreApi(req.query)
//     res.send({
//         state: 200,
//         data: getScore
//     })
// })

//得到排行榜
app.get('/api/user_score/list/rank', async (req, res) => {
    console.log('/api/user_score/list/rank')
    const getScore = await getUserScoreRankApi()
    res.send({
        state: 200,
        data: getScore
    })
})

app.listen(localPort, () => {
    console.log("http://127.0.0.1:3000")
})