const db = require('../config/config')

function addUserScore(questionIds, answers, score, username) {
    return new Promise((resolve, reject) => {
        const sqlMod = `insert into users set ?`
        db.query(sqlMod, { questionIds, answers, score, username }, function (error, results) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
};

function getUserScore(username) {
    return new Promise((resolve, reject) => {
        const sqlMod = `select * from users where username=?`
        db.query(sqlMod, username, function (error, results) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
};

function UserScoreRank(){
    return new Promise((resolve, reject) => {
        const sqlMod = `select * from users order by score desc`
        db.query(sqlMod, function (error, results) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = { addUserScore, getUserScore,UserScoreRank }