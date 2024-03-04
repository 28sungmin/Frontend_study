// 제어문
document.write("<h2>제어문</h2>");
document.write(
  "조건문(if ~ else if ~ else)<br /> 선택문(switch ~ case ~ break) <br /> 반복문(while, do while, for)"
);
document.write("<br /><br />");

// #1. 조건문
document.write("<h3>#1. 조건문 </h3>");
document.write(
  "<p>- true 또는 false에 의해 지정된 화면을 보여줄 것인가 또는 감출 것인가를 진행시키는 제어를 담당</p>"
);
document.write(
  "<p>- 조건문은 데이터를 필터링하여 필요한 데이터만 추출하도록 도와주는 제어문</p>"
);

document.write("<br />< 결과 > <br/>");

var age = 12;
if (age > 13) {
  document.write("가입을 환영합니다.", "<br />");
} else {
  document.write("가입연령이 아닙니다.", "<br />");
}
document.write("<br />");

document.write("< 코드 > <br/>");
var $img_01 = "<img src='./img/if01.png' alt='if문 코드' width='400'>";
document.write($img_01, "<br /><br />");

// 월별에 따른 계절 보여주기
document.write("<br /> < 결과 > <br/>");

var curMonth = parseInt(11.5); // 유효한 값이 아닐 경우를 대비하여 중첩조건문을 사용한다.
console.log(curMonth);
// 그러나 이렇게 해도 11.5와 같은 값을 넣어도 답이 나온다. 따라서 parseInt()를 넣어서 소수점을 모두 없앤다.
// 1월 ~ 12월
if (curMonth >= 1 && curMonth <= 12) {
  if (curMonth >= 3 && curMonth <= 5) {
    document.write("따뜻한 봄입니다.", "<br />");
  } else if (curMonth >= 6 && curMonth <= 8) {
    document.write("뜨거운 여름입니다.", "<br />");
  } else if (curMonth >= 9 && curMonth <= 11) {
    document.write("시원한 가을입니다.", "<br />");
  } else {
    document.write("눈내리는 겨울입니다.", "<br />");
  }
} else {
  alert("유효한 값이 아닙니다.");
}

document.write("<br />< 코드 > <br/>");
var $img_02 = "<img src='./img/if02.png' alt='if문 코드' width='600'>";
document.write($img_02, "<br /><br />");

// 조건문은 데이터를 필터링하여 필요한 데이터만 추출하도록 도와주는 제어문

document.write("----------------------------------<br />");
document.write("<p>구매자의 등급에 따른 할인쿠폰 발송</p>");
document.write(
  "VIP(100,000원 이상 구매고객) ==> 30% 할인쿠폰 제공 <br />\
Gold(60,000원 이상 구매고객) ==> 20% 할인쿠폰 제공<br />\
Silver(10,000원 이상 구매고객) ==> 10% 할인쿠폰 제공<br />\
Bronze(10,000원 미만 구매고객 또는 구매이력 없는 고객) ==> 5% 할인쿠폰 제공<br />"
);
document.write("----------------------------------<br />");

// prompt를 통해서 입력된 값은 문자열로 저장이 된다.
document.write("<br /> < 결과 > <br/>");

// var buyPrice = prompt("지난달에 구매한 금액을 작성해주세요", "10000");
// document.write(`지난달에 구매한 금액 : ${buyPrice}원<br />`);
// if (buyPrice >= 100000) {
//   document.write(
//     "당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 60000) {
//   document.write(
//     "당신은 Gold 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 10000) {
//   document.write(
//     "당신은 Silver 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인바랍니다."
//   );
// } else {
//   document.write(
//     "당신은 Bronze 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인바랍니다."
//   );
// }

document.write("<br />< 코드 > <br/>");
var $img_03 = "<img src='./img/if03.png' alt='if문 코드' width='550'>";
document.write($img_03, "<br /><br />");

document.write("----------------------------------<br />");
document.write("<p>구매자의 등급에 따른 할인쿠폰 발송</p>");
document.write(
  "VIP(100,000원 이상 구매고객) ==> 30% 할인쿠폰 제공 <br />\
Gold(60,000원 이상 ~ 100,000원 미만 구매고객) ==> 20% 할인쿠폰 제공<br />\
Silver(10,000원 이상 ~ 60,000원 미만 구매고객) ==> 10% 할인쿠폰 제공<br />\
Bronze(10,000원 미만 구매고객 또는 구매이력 없는 고객) ==> 5% 할인쿠폰 제공<br />"
);
document.write("----------------------------------<br />");

document.write("<br /> < 결과 > <br/>");

// 이렇게 하면 순서가 썪여도 상관없다.
// var buyPrice = prompt("지난달에 구매한 금액을 작성해주세요", "10000");
// document.write(`지난달에 구매한 금액 : ${buyPrice}원<br />`);
// if (buyPrice >= 100000) {
//   document.write(
//     "당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 60000 && buyPrice < 100000) {
//   document.write(
//     "당신은 Gold 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 10000 && buyPrice < 60000) {
//   document.write(
//     "당신은 Silver 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice < 10000) {
//   document.write(
//     "당신은 Bronze 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인바랍니다."
//   );
// }

document.write("<br />< 코드 > <br/>");
var $img_04 = "<img src='./img/if04.png' alt='if문 코드' width='550'>";
document.write($img_04, "<br /><br />");

document.write("<br /> < 결과 > <br/>");
var $img_05 = "<img src='./img/if05_console.png' alt='if문 코드' width='900'>";
document.write($img_05, "<br />");

// 게임 캐릭터 특수 아이템(level 10+) 착용 가능여부를 확인
var myHeroLevel = 8;
var specialCloth = "화염갑옷";
if (myHeroLevel >= 10) {
  console.log(`당신은 ${specialCloth}을(를) 착용 가능합니다.`);
} else {
  console.log(`당신은 ${specialCloth}을(를) 착용 불가능합니다.`);
}

document.write("< 코드 >  <br/>");
var $img_06 = "<img src='./img/if05.png' alt='if문 코드' width='500'>";
document.write($img_06, "<br /><br />");

document.write("----------------------------------------------<br />");
document.write(
  "<p>디바이스의 사이즈를 기준으로 어떤 디바이스인지를 확인(PC, tablet, mobile)</p>"
);
document.write(
  "1920(1200px 이상) - pc<br /> 1200px 미만 - tablet(H/V)<br />\
        768px 미만 - mobile(H/V) => Horizon이냐 Vertical이냐<br/>"
);
document.write("----------------------------------------------<br />");

// 디바이스의 사이즈를 기준으로 어떤 디바이스인지를 확인(PC, tablet, mobile)
document.write("<br /> < 결과 > <br/>");
var $img_07 = "<img src='./img/if06_console.png' alt='if문 코드' width='900'>";
document.write($img_07, "<br />");

var deviceWidth = 375; // 375px
if (deviceWidth >= 1200) {
  console.log(`당신의 디바이스는 PC`);
  // PC 메뉴로 보여줘~
} else if (deviceWidth >= 768 && deviceWidth < 1200) {
  console.log(`당신의 디바이스는 Tablet`);
  // 반응형 메뉴로 보여줘~
} else {
  console.log(`당신의 디바이스는 Mobile`);
}

document.write("< 코드 > <br/>");
var $img_08 = "<img src='./img/if06.png' alt='if문 코드' width='500'>";
document.write($img_08, "<br /><br />");
