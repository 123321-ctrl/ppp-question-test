const questions = [
  {
    id: "1",
    name: "感冒忌用下列哪一种食物？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "海鱼",
      },
      {
        key: "B",
        name: "豆浆",
      },
      {
        key: "C",
        name: "青菜",
      },
      {
        key: "D",
        name: "生姜",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "2",
    name: "柠檬汁有哪些营养含量",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "维生素A和维生素C ",
      },
      {
        key: "B",
        name: "维生素B1和维生素C",
      },
      {
        key: "C",
        name: "维生素C",
      },
      {
        key: "D",
        name: "维生素B",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "3",
    name: "酒中含有酒精，饮酒过多或经常饮酒，会造成酒精中毒，使身体受损，那么，饮酒对人体的哪些器官最为有害？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "眼睛",
      },
      {
        key: "B",
        name: "皮肤",
      },
      {
        key: "C",
        name: "心脏",
      },
      {
        key: "D",
        name: "肺",
      },
    ],
    answer: ["C"],
    score: 5,
  },
  {
    id: "4",
    name: "苹果中含有增强记忆力的微量元素是 ",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "铁",
      },
      {
        key: "B",
        name: "锌",
      },
      {
        key: "C",
        name: "钙",
      },
      {
        key: "D",
        name: "碘",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "5",
    name: "吃太多手摇爆米花机爆出的米花会导致",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "锡中毒",
      },
      {
        key: "B",
        name: "铅中毒",
      },
      {
        key: "C",
        name: "铬中毒",
      },
      {
        key: "D",
        name: "碘中毒",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "6",
    name: "方便面里必然有哪种食品添加剂",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "防腐剂",
      },
      {
        key: "B",
        name: "合成抗氧化剂",
      },
      {
        key: "C",
        name: "食用色素",
      },
      {
        key: "D",
        name: "漂白剂",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "7",
    name: "关于合理饮食有利于健康的下列说法正确的是",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "没有水就没有生命",
      },
      {
        key: "B",
        name: "饮用水越纯净越好",
      },
      {
        key: "C",
        name: "养成良好的饮食习惯，多吃蔬菜、水果等碱性食物",
      },
      {
        key: "D",
        name: "调味剂和营养剂加得越多越好",
      },
    ],
    answer: ["C"],
    score: 5,
  },
  {
    id: "8",
    name: "低盐饮食有利于预防什么疾病？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "乙型肝炎",
      },
      {
        key: "B",
        name: "糖尿病",
      },
      {
        key: "C",
        name: "高血压",
      },
      {
        key: "D",
        name: "贫血",
      },
    ],
    answer: ["C"],
    score: 5,
  },
  {
    id: "9",
    name: "碘缺乏会导致儿童、青少年 ________________ ",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "甲亢",
      },
      {
        key: "B",
        name: "无力",
      },
      {
        key: "C",
        name: "心理疾病 ",
      },
      {
        key: "D",
        name: "生长发育和智力受影响",
      },
    ],
    answer: ["D"],
    score: 5,
  },
  {
    id: "10",
    name: "夏季在烈日下工作或运动量过大出汗多时，为预防中暑应多喝_________。",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "糖水",
      },
      {
        key: "B",
        name: "糖醋水",
      },
      {
        key: "C",
        name: "盐开水",

      },
      {
        key: "D",
        name: "白开水",
      },
    ],
    answer: ["C"],
    score: 5,
  },
  {
    id: "11",
    name: "烧菜时最好在何时加碘盐以减少碘的损失？",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "烧菜前用碘盐爆锅",
      },
      {
        key: "B",
        name: "烧菜加水后",
      },
      {
        key: "C",
        name: "烧菜加水前",
      },
      {
        key: "D",
        name: "菜将出锅时",
      },
    ],
    answer: ["D"],
    score: 5,
  },
  {
    id: "12",
    name: "某人由于营养不良，身体浮肿，其食疗补救措施是",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "多吃蔬菜",
      },
      {
        key: "B",
        name: "多喝豆汁",
      },
      {
        key: "C",
        name: "多吃馒头",
      },
      {
        key: "D",
        name: "多喝水",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "13",
    name: "预防肠道疾病要做到 （ ）",
    checkType: "multiple",
    options: [
      {
        key: "A",
        name: "锻炼身体，消灭四害。",
        score: 2,
      },
      {
        key: "B",
        name: "不喝生水，不吃腐败变质食物，生吃瓜果要洗净。",
        score: 2,
      },
      {
        key: "C",
        name: "注意消毒碗筷。",
        score: 1,
      },
      {
        key: "D",
        name: "尽量不去公共厕所",
        score: 0,
      },
    ],
    max: 3,
  },
  {
    id: "14",
    name: "下列不属于营养物质的是",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "食物中的葡萄糖",
      },
      {
        key: "B",
        name: "肝糖元分解形成的葡萄糖",
      },
      {
        key: "C",
        name: "饮水中的碘",
      },
      {
        key: "D",
        name: "食物中的胡萝卜素",
      },
    ],
    answer: ["B"],
    score: 5,
  },
  {
    id: "15",
    name: "据老师反映该学生书写困难，学习能力差。其原因是",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "婴幼儿时期严重营养不良",
      },
      {
        key: "B",
        name: "严重缺钙",
      },
      {
        key: "C",
        name: "儿童时期营养不良",
      },
      {
        key: "D",
        name: "缺锌",
      },
    ],
    answer: ["A"],
    score: 5,
  },
  {
    id: "16",
    name: "在人的一生中，脑发育的最关键时期是",
    checkType: "single",
    options: [
      {
        key: "A",
        name: "胎儿期和婴儿期",
      },
      {
        key: "B",
        name: "婴儿期和儿童期",
      },
      {
        key: "C",
        name: "儿童期和青春期",
      },
      {
        key: "D",
        name: "青春期和婴儿期",
      },
    ],
    answer: ["A"],
    score: 5,
  },
];

const questionMap = {};

questions.forEach((question) => {
  questionMap[question.id] = question;
});

module.exports = {
  questions,
  questionMap,
};
