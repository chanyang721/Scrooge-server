'use strict';

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('money', [{
    ////////////////// user 1 Start /////////////////  
        cost: "50000",
        memo: "잃어버린 돈",
        date: "2021-07-12",
        userId: "1",
        categoryId: "1",
        createdAt,
        updatedAt,
     },{
        cost: "100000",
        memo: "조카 용돈",
        date: "2021-07-15",
        userId: "1",
        categoryId: "1",
        createdAt,
        updatedAt,
     },{
        cost: "79000",
        memo: "랍스타",
        date: "2021-07-11",
        userId: "1",
        categoryId: "2",
        createdAt,
        updatedAt,
    },{
        cost: "200",
        memo: "츄파츕스",
        date: "2021-07-24",
        userId: "1",
        categoryId: "2",
        createdAt,
        updatedAt,
    },{
        cost: "70000",
        memo: "헬스장",
        date: "2021-07-02",
        userId: "1",
        categoryId: "3",
        createdAt,
        updatedAt,
    },{
        cost: "20000",
        memo: "퍼즐",
        date: "2021-07-18",
        userId: "1",
        categoryId: "3",
        createdAt,
        updatedAt,
    },{
        cost: "38000",
        memo: "장보기",
        date: "2021-07-05",
        userId: "1",
        categoryId: "4",
        createdAt,
        updatedAt,
      },{
        cost: "20000",
        memo: "졸리 간식",
        date: "2021-07-12",
        userId: "1",
        categoryId: "4",
        createdAt,
        updatedAt,
      },{
        cost: "200000",
        memo: "월세",
        date: "2021-07-01",
        userId: "1",
        categoryId: "5",
        createdAt,
        updatedAt,
      },{
        cost: "9500",
        memo: "유튜브 프리미엄",
        date: "2021-07-01",
        userId: "1",
        categoryId: "5",
        createdAt,
        updatedAt,
      },{
        cost: "100000",
        memo: "책상",
        date: "2021-07-15",
        userId: "1",
        categoryId: "6",
        createdAt,
        updatedAt,
      },{
        cost: "720000",
        memo: "옷",
        date: "2021-07-28",
        userId: "1",
        categoryId: "6",
        createdAt,
        updatedAt,
      },{
        cost: "500000",
        memo: "적금",
        date: "2021-07-01",
        userId: "1",
        categoryId: "7",
        createdAt,
        updatedAt,
      },{
        cost: "100000",
        memo: "주식",
        date: "2021-07-07",
        userId: "1",
        categoryId: "7",
        createdAt,
        updatedAt,
      },{
        cost: "41900",
        memo: "택시비",
        date: "2021-07-11",
        userId: "1",
        categoryId: "8",
        createdAt,
        updatedAt,
      },{
        cost: "217200",
        memo: "기름값",
        date: "2021-07-29",
        userId: "1",
        categoryId: "8",
        createdAt,
        updatedAt,
      },{
        cost: "119000",
        memo: "뮤지컬",
        date: "2021-07-12",
        userId: "1",
        categoryId: "9",
        createdAt,
        updatedAt,
      },{
        cost: "28000",
        memo: "영화",
        date: "2021-07-30",
        userId: "1",
        categoryId: "9",
        createdAt,
        updatedAt,
      },{
        cost: "50000",
        memo: "친구 결혼",
        date: "2021-07-22",
        userId: "1",
        categoryId: "10",
        createdAt,
        updatedAt,
      },{
        cost: "100000",
        memo: "민규 생일",
        date: "2021-07-11",
        userId: "1",
        categoryId: "10",
        createdAt,
        updatedAt,
    ////////////////// user 1 End ///////////////////
      },{
    ////////////////// user 2 Start /////////////////
        cost: "230000",
        memo: "지갑 잃어버렸다..",
        date: "2021-07-19",
        userId: "2",
        categoryId: "11",
        createdAt,
        updatedAt,
     },{
        cost: "1000000",
        memo: "부모님 용돈",
        date: "2021-07-01",
        userId: "2",
        categoryId: "11",
        createdAt,
        updatedAt,
     },{
        cost: "58000",
        memo: "소고기",
        date: "2021-07-02",
        userId: "2",
        categoryId: "12",
        createdAt,
        updatedAt,
    },{
        cost: "22000",
        memo: "아이스크림",
        date: "2021-07-24",
        userId: "2",
        categoryId: "12",
        createdAt,
        updatedAt,
    },{
        cost: "700000",
        memo: "제주도",
        date: "2021-07-28",
        userId: "2",
        categoryId: "13",
        createdAt,
        updatedAt,
    },{
        cost: "20000",
        memo: "친구약속",
        date: "2021-07-15",
        userId: "2",
        categoryId: "13",
        createdAt,
        updatedAt,
    },{
        cost: "50000",
        memo: "민규 생일",
        date: "2021-07-11",
        userId: "2",
        categoryId: "14",
        createdAt,
        updatedAt,
      },{
        cost: "10000",
        memo: "친구 결혼",
        date: "2021-07-03",
        userId: "2",
        categoryId: "14",
        createdAt,
        updatedAt,
      },{
        cost: "234120",
        memo: "세금 1",
        date: "2021-07-01",
        userId: "2",
        categoryId: "15",
        createdAt,
        updatedAt,
      },{
        cost: "157210",
        memo: "세금 2",
        date: "2021-07-10",
        userId: "2",
        categoryId: "15",
        createdAt,
        updatedAt,
      },{
        cost: "500000",
        memo: "초코 건강검진",
        date: "2021-07-19",
        userId: "2",
        categoryId: "16",
        createdAt,
        updatedAt,
      },{
        cost: "12000",
        memo: "초코 간식",
        date: "2021-07-03",
        userId: "2",
        categoryId: "16",
        createdAt,
        updatedAt,
      },{
        cost: "70590",
        memo: "삼성",
        date: "2021-07-05",
        userId: "2",
        categoryId: "17",
        createdAt,
        updatedAt,
      },{
        cost: "40380",
        memo: "메리츠",
        date: "2021-07-15",
        userId: "2",
        categoryId: "17",
        createdAt,
        updatedAt,
      },{
        cost: "1000000",
        memo: "실리콘밸리",
        date: "2021-07-30",
        userId: "2",
        categoryId: "18",
        createdAt,
        updatedAt,
      },{
        cost: "300000",
        memo: "렌트값",
        date: "2021-07-30",
        userId: "2",
        categoryId: "18",
        createdAt,
        updatedAt,
      },{
        cost: "18590",
        memo: "컴퓨터활용능력 1급",
        date: "2021-07-06",
        userId: "2",
        categoryId: "19",
        createdAt,
        updatedAt,
      },{
        cost: "25670",
        memo: "정보처리기사",
        date: "2021-07-06",
        userId: "2",
        categoryId: "19",
        createdAt,
        updatedAt,
      },{
        cost: "55000",
        memo: "모두의마블",
        date: "2021-07-22",
        userId: "2",
        categoryId: "20",
        createdAt,
        updatedAt,
      },{
        cost: "220000",
        memo: "모두의마블",
        date: "2021-07-31",
        userId: "2",
        categoryId: "20",
        createdAt,
        updatedAt,
    ////////////////// user 2 End ///////////////////    
      },{
    ////////////////// user 3 Start /////////////////    
        cost: "10000",
        memo: "찢어진 돈",
        date: "2021-07-15",
        userId: "3",
        categoryId: "21",
        createdAt,
        updatedAt,
     },{
        cost: "10000",
        memo: "부모님 용돈",
        date: "2021-07-01",
        userId: "3",
        categoryId: "21",
        createdAt,
        updatedAt,
     },{
        cost: "25000",
        memo: "햄버거",
        date: "2021-07-09",
        userId: "3",
        categoryId: "22",
        createdAt,
        updatedAt,
    },{
        cost: "22000",
        memo: "아이스크림",
        date: "2021-07-03",
        userId: "3",
        categoryId: "22",
        createdAt,
        updatedAt,
    },{
        cost: "40000",
        memo: "태블릿",
        date: "2021-07-15",
        userId: "3",
        categoryId: "23",
        createdAt,
        updatedAt,
    },{
        cost: "36000",
        memo: "아이폰",
        date: "2021-07-15",
        userId: "3",
        categoryId: "23",
        createdAt,
        updatedAt,
    },{
        cost: "28900",
        memo: "택시비",
        date: "2021-07-24",
        userId: "3",
        categoryId: "24",
        createdAt,
        updatedAt,
      },{
        cost: "5800",
        memo: "버스비",
        date: "2021-07-19",
        userId: "3",
        categoryId: "24",
        createdAt,
        updatedAt,
      },{
        cost: "240000",
        memo: "엑셀학원",
        date: "2021-07-10",
        userId: "3",
        categoryId: "25",
        createdAt,
        updatedAt,
      },{
        cost: "200000",
        memo: "요리학원",
        date: "2021-07-20",
        userId: "3",
        categoryId: "25",
        createdAt,
        updatedAt,
      },{
        cost: "51800",
        memo: "애슐리 퀸즈",
        date: "2021-07-22",
        userId: "3",
        categoryId: "26",
        createdAt,
        updatedAt,
      },{
        cost: "12000",
        memo: "본죽",
        date: "2021-07-31",
        userId: "3",
        categoryId: "26",
        createdAt,
        updatedAt,
      },{
        cost: "1500",
        memo: "천안 -> 서울",
        date: "2021-07-26",
        userId: "3",
        categoryId: "27",
        createdAt,
        updatedAt,
      },{
        cost: "1500",
        memo: "천안 -> 경주",
        date: "2021-07-20",
        userId: "3",
        categoryId: "27",
        createdAt,
        updatedAt,
      },{
        cost: "300000",
        memo: "삼성",
        date: "2021-07-01",
        userId: "3",
        categoryId: "28",
        createdAt,
        updatedAt,
      },{
        cost: "230000",
        memo: "국민",
        date: "2021-07-01",
        userId: "3",
        categoryId: "28",
        createdAt,
        updatedAt,
      },{
        cost: "900000",
        memo: "제주 항공",
        date: "2021-07-09",
        userId: "3",
        categoryId: "29",
        createdAt,
        updatedAt,
      },{
        cost: "50000",
        memo: "제주 렌트비",
        date: "2021-07-17",
        userId: "3",
        categoryId: "29",
        createdAt,
        updatedAt,
      },{
        cost: "23000",
        memo: "관리비 1",
        date: "2021-07-10",
        userId: "3",
        categoryId: "30",
        createdAt,
        updatedAt,
      },{
        cost: "20845",
        memo: "관리비 2",
        date: "2021-07-31",
        userId: "3",
        categoryId: "30",
        createdAt,
        updatedAt,
    ////////////////// user 3 End ///////////////////    
      },{
    ////////////////// user 4 Start /////////////////    
        cost: "50000",
        memo: "길가다 준 돈",
        date: "2021-07-07",
        userId: "4",
        categoryId: "31",
        createdAt,
        updatedAt,
     }, {
        cost: "100000",
        memo: "큰아빠 용돈",
        date: "2021-07-18",
        userId: "4",
        categoryId: "31",
        createdAt,
        updatedAt,
     },{
        cost: "79000",
        memo: "빠스타 with 여친",
        date: "2021-07-13",
        userId: "4",
        categoryId: "32",
        createdAt,
        updatedAt,
    },{
        cost: "4800",
        memo: "편의점 커피",
        date: "2021-07-24",
        userId: "4",
        categoryId: "32",
        createdAt,
        updatedAt,
    },{
        cost: "150000",
        memo: "빌어먹을 핸드폰 약정",
        date: "2021-07-02",
        userId: "4",
        categoryId: "33",
        createdAt,
        updatedAt,
    },{
      cost: "20000",
        memo: "태블릿 데이터 비용",
        date: "2021-07-18",
        userId: "4",
        categoryId: "33",
        createdAt,
        updatedAt,
    },{
        cost: "15000",
        memo: "버스비",
        date: "2021-07-19",
        userId: "4",
        categoryId: "34",
        createdAt,
        updatedAt,
      },{
        cost: "60000",
        memo: "택시비",
        date: "2021-07-04",
        userId: "4",
        categoryId: "34",
        createdAt,
        updatedAt,
      },{
        cost: "40000",
        memo: "조카 유치원 픽업",
        date: "2021-07-01",
        userId: "4",
        categoryId: "35",
        createdAt,
        updatedAt,
      },{
        cost: "9500",
        memo: "유튜브 프리미엄",
        date: "2021-07-01",
        userId: "4",
        categoryId: "35",
        createdAt,
        updatedAt,
      },{
        cost: "165000",
        memo: "토익학원 접수",
        date: "2021-07-01",
        userId: "4",
        categoryId: "36",
        createdAt,
        updatedAt,
      },{
        cost: "168000",
        memo: "제빵 학원",
        date: "2021-07-15",
        userId: "4",
        categoryId: "36",
        createdAt,
        updatedAt,
      },{
        cost: "48000",
        memo: "쿠우쿠우 먹방",
        date: "2021-07-12",
        userId: "4",
        categoryId: "37",
        createdAt,
        updatedAt,
      },{
        cost: "91200",
        memo: "스떼이크를 썰어봤습니다",
        date: "2021-07-07",
        userId: "4",
        categoryId: "37",
        createdAt,
        updatedAt,
      },{
        cost: "165000",
        memo: "미슐랭 한식집 탐방!!!",
        date: "2021-07-11",
        userId: "4",
        categoryId: "37",
        createdAt,
        updatedAt,
      },{
        cost: "36900",
        memo: "요번달 하이패스비 !",
        date: "2021-07-29",
        userId: "4",
        categoryId: "38",
        createdAt,
        updatedAt,
      },{
        cost: "119000",
        memo: "캣츠가 왜 유명한지 알겠더라구요",
        date: "2021-07-12",
        userId: "4",
        categoryId: "39",
        createdAt,
        updatedAt,
      },{
        cost: "4500000",
        memo: "가죽 쪼가리가 왜 가격이 왜이래 !",
        date: "2021-07-23",
        userId: "4",
        categoryId: "39",
        createdAt,
        updatedAt,
      },{
        cost: "50000",
        memo: "친구 결혼",
        date: "2021-07-19",
        userId: "4",
        categoryId: "40",
        createdAt,
        updatedAt,
      },{
        cost: "100000",
        memo: "민규 생일",
        date: "2021-07-11",
        userId: "4",
        categoryId: "40",
        createdAt,
        updatedAt,
      },{    
        cost: "760000",
        memo: "지갑 잃어버렸다..",
        date: "2021-07-21",
        userId: "4",
        categoryId: "41",
        createdAt,
        updatedAt,
     },{
        cost: "100000",
        memo: "조카 용돈",
        date: "2021-07-15",
        userId: "4",
        categoryId: "41",
        createdAt,
        updatedAt,
    ////////////////// user 4 End ///////////////////    
     },{
    ////////////////// user 5 Start /////////////////    
        cost: "5000",
        memo: "길가다 흘린 돈",
        date: "2021-07-13",
        userId: "5",
        categoryId: "42",
        createdAt,
        updatedAt,
      }, {
        cost: "20000",
        memo: "세탁기 돌린 돈",
        date: "2021-07-18",
        userId: "5",
        categoryId: "42",
        createdAt,
        updatedAt,
      },{
        cost: "35000",
        memo: "복숭아",
        date: "2021-07-19",
        userId: "5",
        categoryId: "43",
        createdAt,
        updatedAt,
    },{
        cost: "4500",
        memo: "메가커피 카페모카",
        date: "2021-07-24",
        userId: "5",
        categoryId: "43",
        createdAt,
        updatedAt,
    },{
        cost: "15000",
        memo: "빌어먹을 핸드폰 약정",
        date: "2021-07-15",
        userId: "5",
        categoryId: "44",
        createdAt,
        updatedAt,
    },{
      cost: "8270",
        memo: "인터넷",
        date: "2021-07-20",
        userId: "5",
        categoryId: "44",
        createdAt,
        updatedAt,
    },{
        cost: "12500",
        memo: "버스비",
        date: "2021-07-23",
        userId: "5",
        categoryId: "45",
        createdAt,
        updatedAt,
      },{
        cost: "62000",
        memo: "기름값",
        date: "2021-07-04",
        userId: "5",
        categoryId: "45",
        createdAt,
        updatedAt,
      },{
        cost: "120000",
        memo: "유치원",
        date: "2021-07-01",
        userId: "5",
        categoryId: "46",
        createdAt,
        updatedAt,
      },{
        cost: "52580",
        memo: "기저귀",
        date: "2021-07-21",
        userId: "5",
        categoryId: "46",
        createdAt,
        updatedAt,
      },{
        cost: "250000",
        memo: "토익학원",
        date: "2021-07-01",
        userId: "5",
        categoryId: "47",
        createdAt,
        updatedAt,
      },{
        cost: "200000",
        memo: "컴퓨터학원",
        date: "2021-07-22",
        userId: "5",
        categoryId: "47",
        createdAt,
        updatedAt,
      },{
        cost: "135000",
        memo: "한우",
        date: "2021-07-11",
        userId: "5",
        categoryId: "48",
        createdAt,
        updatedAt,
      },{
        cost: "28000",
        memo: "회전초밥",
        date: "2021-07-24",
        userId: "5",
        categoryId: "48",
        createdAt,
        updatedAt,
      },{
        cost: "179900",
        memo: "오마카세",
        date: "2021-07-27",
        userId: "5",
        categoryId: "48",
        createdAt,
        updatedAt,
      },{
        cost: "36900",
        memo: "요번달 하이패스비 !",
        date: "2021-07-29",
        userId: "5",
        categoryId: "49",
        createdAt,
        updatedAt,
      },{
        cost: "119000",
        memo: "기업",
        date: "2021-07-15",
        userId: "5",
        categoryId: "50",
        createdAt,
        updatedAt,
      },{
        cost: "500000",
        memo: "카카오",
        date: "2021-07-25",
        userId: "5",
        categoryId: "50",
        createdAt,
        updatedAt,
      },{
        cost: "1000000",
        memo: "보라카이",
        date: "2021-07-24",
        userId: "5",
        categoryId: "51",
        createdAt,
        updatedAt,
      },{
        cost: "600000",
        memo: "비행기",
        date: "2021-07-25",
        userId: "5",
        categoryId: "51",
        createdAt,
        updatedAt,
      },{
        cost: "45270",
        memo: "관리비",
        date: "2021-07-10",
        userId: "5",
        categoryId: "52",
        createdAt,
        updatedAt,
    ////////////////// user 5 End ///////////////////    
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('money', null, {});
  }
};
