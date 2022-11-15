const questions = [
    {
      id: "1",
      name: "下列四城市中,太阳能最丰富的是",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "西宁",
        },
        {
          key: "B",
          name: "包头",
        },
        {
          key: "C",
          name: "西安",
        },
        {
          key: "D",
          name: "拉萨",
        },
      ],
      answer: ["A"],
      score: 5,
    },
    {
      id: "2",
      name: "世界上华人、华侨最集中的地区是",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "东南亚 ",
        },
        {
          key: "B",
          name: "美国",
        },
        {
          key: "C",
          name: "英国",
        },
        {
          key: "D",
          name: "法国",
        },
      ],
      answer: ["A"],
      score: 5,
    },
    {
      id: "3",
      name: "中国第一个共产主义小组的领导人是",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "毛泽东",
        },
        {
          key: "B",
          name: "王明",
        },
        {
          key: "C",
          name: "李大钊",
        },
        {
          key: "D",
          name: "陈独秀",
        },
      ],
      answer: ["D"],
      score: 5,
    },
    {
      id: "4",
      name: "太阳在那一天离地球最远 ",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "秋分",
        },
        {
          key: "B",
          name: "夏至",
        },
        {
          key: "C",
          name: "冬至",
        },
        {
          key: "D",
          name: "春风",
        },
      ],
      answer: ["B"],
      score: 5,
    },
    {
      id: "5",
      name: "人类最早使用的工具是什么材料的",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "铁",
        },
        {
          key: "B",
          name: "木",
        },
        {
          key: "C",
          name: "青铜",
        },
        {
          key: "D",
          name: "石",
        },
      ],
      answer: ["D"],
      score: 5,
    },
    {
      id: "6",
      name: "被誉为“风车之国”是哪个国家",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "澳大利亚",
        },
        {
          key: "B",
          name: "荷兰",
        },
        {
          key: "C",
          name: "瑞士",
        },
        {
          key: "D",
          name: "芬兰",
        },
      ],
      answer: ["B"],
      score: 5,
    },
    {
      id: "7",
      name: "被称为“万物之园”的是",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "颐和园",
        },
        {
          key: "B",
          name: "圆明园",
        },
        {
          key: "C",
          name: "熙春园",
        },
        {
          key: "D",
          name: "畅春园",
        },
      ],
      answer: ["B"],
      score: 5,
    },
    {
      id: "8",
      name: "哪一季节最不宜发哮喘",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "春",
        },
        {
          key: "B",
          name: "夏",
        },
        {
          key: "C",
          name: "秋",
        },
        {
          key: "D",
          name: "冬",
        },
      ],
      answer: ["B"],
      score: 5,
    },
    {
      id: "9",
      name: "世界上人口第二的国家是哪个",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "印度",
        },
        {
          key: "B",
          name: "中国",
        },
        {
          key: "C",
          name: "美国 ",
        },
        {
          key: "D",
          name: "俄罗斯",
        },
      ],
      answer: ["A"],
      score: 5,
    },
    {
      id: "10",
      name: "以下哪一位曾被称为“药王”",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "华佗",
        },
        {
          key: "B",
          name: "孙思邈",
        },
        {
          key: "C",
          name: "扁鹊",
  
        },
        {
          key: "D",
          name: "李时珍",
        },
      ],
      answer: ["B"],
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
  