// [주석 설명]
document.write("<p style='font-size:17px;'>[ 주석 설명 ]</p>");
document.write("// : 한 줄 주석 처리", "<br />");
document.write("/* */ : 여러 줄 주석 처리");
document.write("<br /><br />");

// [자바스크립트를 통한 브라우저에서 제공되는 팝업창 형태]
document.write(
  "<p style='font-size:17px; margin-top:30px'>[ 자바스크립트를 통한 브라우저에서 제공되는 팝업창 형태 ]</p>"
);
// #1. 경고창
document.write(
  " <p style='font-size:16px'>#1. 경고창 : 경고 메시지를 제공</p>"
);
document.write("- 디자인이 다 달라서 잘 쓰지는 않는다.<br />");
document.write(
  "- 개발자가 설정해놓은 기준범위를 벗어났을 경우, 경고창을 띄운다.<br />"
);
document.write('- 코드 : alert("이것은 경고창입니다.");<br /><br />');
// alert("이것은 경고창입니다.");
var $img_01 = "<img src='./img/alert.png' alt='경고창 화면' width='400'>";
document.write($img_01);

// #2. 입력창
document.write(
  " <p style='font-size:16px'>#2. 입력창 : 무언가를 질문(요청)에 대한 답변을 사용자가 직접 입력하도록 할 때 사용</p>"
);
document.write(
  "- prompt 창의 입력 후, 전송되는 값은 변수의 데이터(문자형 데이터)로 존재한다.<br />"
);
document.write(
  '- 코드 : prompt("당신은 하루에 얼마나 걸으시나요?", "10000");<br /><br />'
);
// prompt("당신은 하루에 얼마나 걸으시나요?", "10000");
var $img_02 = "<img src='./img/prompt.png' alt='입력창 화면' width='400'>";
document.write($img_02);

// #3. 확인창
document.write(
  " <p style='font-size:16px'>#3. 확인창 : 확인 및 취소라는 버튼 존재</p>"
);
document.write(
  "- 확인 버튼을 눌렀을 때는 true, 취소 버튼을 눌렀을 때는 false<br />"
);
document.write(
  '- 코드 : confirm("정말 회원탈퇴를 하시겠습니까?");<br /><br />'
);
// confirm("정말 회원탈퇴를 하시겠습니까?");
var $img_03 = "<img src='./img/confirm.png' alt='확인창 화면' width='400'>";
document.write($img_03);

// 변수, 데이터 등 설명
document.write(
  "<p style='font-size:17px; margin-top:30px'>[ 변수, 데이터 등 설명 ]</p>"
);

// #4. console.log(데이터)
document.write(" <p style='font-size:16px'>#4. console.log(데이터)</p>");
document.write(
  "- 최종적으로 표현하거나 확인하고자 하는 데이터를 console 이라는 창에서 봐야할 경우 사용<br />"
);
document.write(
  "- 하나의 메모리 공간에 정확한 데이터값이 담기는지를 확인이 가능<br />"
);

var myFavoriteFruit = "키위";
console.log(myFavoriteFruit);
console.log("가장 맛있는 음식 : 집밥");

document.write(
  "- console 창 확인해보면 '키위'와 '가장 맛있는 음식 : 집밥'이 적혀있는 것을 확인할 수 있다.<br /><br />"
);
var $img_04 = "<img src='./img/console.png' alt='console 화면' width='900'>";
document.write($img_04);

// #5. 변수
document.write(" <p style='font-size:16px'>#5. 변수</p>");
document.write("- 변수는 그릇을 의미한다.<br />");
document.write(
  "- 그릇의 내용물은 언제든지 바꿀 수 있다.(메모리가 존재한다는 의미)<br />"
);
document.write("- 변수의 구성 : <br />");
document.write("var 변수명 = 변수값; (various)<br />");
document.write("let 변수명 = 변수값; (let => 허용하다)<br />");
document.write("const 변수명 = 변수값; (const => 건물)<br /><br />");

document.write("< 결과 ><br />");
var order = "자장면";
document.write(order, "<br />");
order = "송어덮밥";
document.write(order, "<br />");

document.write("< 코드 ><br />");
var $img_04 = "<img src='./img/var.png' alt='변수 코드' width='350'>";
document.write($img_04, "<br /><br />");

document.write("- 아래의 이미지 설명<br />");
document.write(
  "order1이라는 변수명은 코드상 상위에서 선언한 적이 없기 때문에 에러처리 된다.<br />"
);
document.write("< 결과 ><br />");
//document.write(order1, "<br />");
var $img_05 =
  "<img src='./img/order1_error.png' alt='없는 변수 에러' width='900'>";
document.write($img_05, "<br />");
var $img_06 = "<img src='./img/order1.png' alt='없는 변수 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_06, "<br /><br />");

document.write(
  "- 변수의 내용을 출력한다는 의미는 최종적으로 선언된 값을 출력한다와 동일한 개념이다.<br />"
);
document.write("- 출력시점마다 다른 결과물을 가져올 수 있다.<br />");
document.write("< 결과 ><br />");
// 게임 캐릭터 만들기(이름)
var myHeroName = "불꽃 나이트";
myHeroName = "토마토 제배자";
document.write("이름 : " + myHeroName, "<br />");
var $img_06 =
  "<img src='./img/game_char.png' alt='게임 캐릭터 변수 코드' width='500'>";
document.write("< 코드 ><br />");
document.write($img_06, "<br /><br />");

document.write("< 결과 ><br />");
// 기록 채팅장 구성하여 이후 문장을 구성하기
var myNickName = "이성민";
var msg; // 채팅장을 오픈했을 때, 작성되지 않은 빈 공간을 구성 => 그릇만 구성한다.
document.write(myNickName + " : " + msg, "<br />");
msg = "오늘은 뭐 먹지?";
document.write("-------<br />");
document.write("- 이처럼 결과가 나오는 이유<br />");
document.write("undefined : 그릇은 있지만, 값이 정해져 있지 않다<br />");
document.write(
  "즉, msg 변수를 출력한 후에 값을 넣어주었기 때문에 undefined라고 뜨게 된다.<br />"
);
var $img_07 =
  "<img src='./img/chat.png' alt='게임 채팅장 변수 코드' width='500'>";
document.write("< 코드 ><br />");
document.write($img_07, "<br /><br />");

// #6. 변수명 선언시 주의사항(반드시 기억을 할 것 ~~!!)
document.write(
  " <p style='font-size:16px'>#6. 변수명 선언시 주의사항(반드시 기억을 할 것 ~~!!)</p>"
);
document.write("#6-1 대소문자를 구분하여 작성한다.<br />");
document.write("< 결과 ><br />");
var age = 10;
document.write(age, "<br />");
var $img_08 = "<img src='./img/age.png' alt='대소문자 구별 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_08, "<br /><br />");

document.write(
  "#6-2 변수명 첫 글자는 '$', '_', 영문(한글)만 작성할 수 있음. (숫자 불가)<br />"
);
document.write("- 되도록 한글 변수명은 지양하기<br />");

// var 12num = 12;
// document.write(12num, "<br />");
document.write("< 결과 ><br />");
var $img_09 =
  "<img src='./img/no_num_first_error.png' alt='변수 첫 글자 숫자 에러 결과' width='900'>";
document.write($img_09, "<br />");
var $img_010 =
  "<img src='./img/no_num_first.png' alt='변수 첫 글자 숫자 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_010, "<br /><br />");

document.write("< 결과 ><br />");
var $12num = 12;
document.write($12num, "<br />");
var _favCoffee = "아이스 아메리카노";
document.write(_favCoffee, "<br />");
var $img_011 =
  "<img src='./img/var_first.png' alt='게임 채팅장 변수 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_011, "<br /><br />");

document.write(
  "#6-3 변수명 내부(첫 글자 제외)에는 '$', '_', '영문', '숫자'까지만 작성할 수 있음<br />"
);
document.write("- 사칙연산(+ - * / %) 불가, 절대 띄어쓰기 하지 말 것<br />");
var num32 = 32;
document.write(num32, "<br />");
var apple_1 = "사과 한 개";
document.write(apple_1, "<br />");
