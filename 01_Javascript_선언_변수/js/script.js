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

// #6-1.
document.write("#6-1 대소문자를 구분하여 작성한다.<br />");
document.write("< 결과 ><br />");
var age = 10;
document.write(age, "<br />");
var $img_08 = "<img src='./img/age.png' alt='대소문자 구별 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_08, "<br /><br />");

// #6-2.
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

//#6-3.
document.write(
  "#6-3 변수명 내부(첫 글자 제외)에는 '$', '_', '영문', '숫자'까지만 작성할 수 있음<br />"
);
document.write("- 사칙연산(+ - * / %) 불가, 절대 띄어쓰기 하지 말 것<br />");

document.write("< 결과 ><br />");
var num32 = 32;
document.write(num32, "<br />");
var apple_1 = "사과 한 개";
document.write(apple_1, "<br />");
var $img_012 =
  "<img src='./img/num_.png' alt='사용가능 변수 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_012, "<br /><br />");

document.write("< 결과 ><br />");
// var orange-1 =  "오렌지 박스";
// document.write(orange-1);
var $img_013 =
  "<img src='./img/token-.png' alt='사용 불가능 변수 결과1' width='900'>";
document.write($img_013, "<br />");
var $img_014 =
  "<img src='./img/token-code.png' alt='사용 불가능 변수 코드1' width='300'>";
document.write("< 코드 ><br />");
document.write($img_014, "<br /><br />");

document.write("< 결과 ><br />");
// var food1 food2 = "갈비탕";
// document.write(food1 food2, "<br />");
var $img_015 =
  "<img src='./img/no_blank.png' alt='사용 불가능 변수 결과2' width='900'>";
document.write($img_015, "<br />");
var $img_016 =
  "<img src='./img/no_blank_code.png' alt='사용 불가능 변수 코드2' width='350'>";
document.write("< 코드 ><br />");
document.write($img_016, "<br /><br />");

document.write("< 결과 ><br />");
var food3,
  food4 = "설렁탕";
document.write(food3, "<br />");
document.write(food4, "<br />");
var $img_017 =
  "<img src='./img/undefined_code.png' alt='사용 불가능 변수 코드3' width='350'>";
document.write("< 코드 ><br />");
document.write($img_017, "<br /><br />");

document.write("< 결과 ><br />");
// var food5, food6 = "미역국", "육개장";
// document.write(food5, "<br />");
// document.write(food6, "<br />");
var $img_018 =
  "<img src='./img/no_two.png' alt='사용 불가능 변수 결과4' width='900'>";
document.write($img_018, "<br />");
var $img_019 =
  "<img src='./img/no_two_code.png' alt='사용 불가능 변수 코드4' width='350'>";
document.write("< 코드 ><br />");
document.write($img_019, "<br /><br />");

// 복수의 변수명을 선언할 때
document.write("주의 !!<br />");
document.write(
  "복수의 변수명을 한번에 선언할 때는 초기 변수명만 선언하고 나중에 데이터를 담는다.<br />"
);
document.write(
  "아래 코드처럼 변수명을 만들어놓고 따로 따로 값을 입력하는 거다.<br />"
);
document.write("< 결과 ><br />");
var food7, food8;
food7 = "볶음밥";
food8 = "해장국";
document.write(food7, "<br />");
document.write(food8, "<br />");
var $img_020 =
  "<img src='./img/multi_var.png' alt='복수 변수 선언 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_020, "<br /><br />");

// #6-4 변수명에는 자바스크립트 예약어를 사용할 수 없다.
document.write("#6-4 변수명에는 자바스크립트 예약어를 사용할 수 없다.<br />");
document.write("< 결과 ><br />");
var document = "문서공간입니다.";
document.write(document, "<br />");
document.write('결과 의미 : "document는 예약어야"라는 의미이다.<br />');
var $img_021 =
  "<img src='./img/no_document.png' alt='예약어 변수 사용 불가 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_021, "<br /><br />");

document.write("주의 !!<br />");
document.write(
  "예약어를 사용하려면 앞에 $를 붙이는 등의 작업을 해야 한다.<br />"
);
document.write("< 결과 ><br />");
var $document = "문서공간입니다.";
document.write($document, "<br />");
var $img_022 =
  "<img src='./img/use_$_document.png' alt='예약어 사용하는 방법 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_022, "<br /><br />");

//#6-5. 카멜기법 또는 파스칼기법으로 변수명 선언
document.write(
  "#6-5. 카멜기법(userName) 또는 파스칼기법(UserName)으로 변수명 선언<br />"
);
document.write("< 결과 ><br />");
var userName = "홍길동";
document.write(userName, "<br />");
var UserName = "홍길순";
document.write(UserName, "<br />");
var $img_023 =
  "<img src='./img/camel_pascal.png' alt='카멜기법과 파스칼기법 선언 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_023, "<br /><br />");

// #7. 문자형 데이터(string)
document.write(
  " <p style='font-size:16px'>#7. 문자형 데이터(string) : 변수의 값이 '데이터'(작은 따옴표) 또는 \"데이터\"(큰 따옴표)로 감싸진 형태</p>"
);
document.write("< 결과 ><br />");
var korSoccer = "손흥민";
var korSoccerShootingNum = "12";
document.write(`${korSoccer}의 득점 수 : ${korSoccerShootingNum}골`, "<br />");
var $img_024 = "<img src='./img/son.png' alt='손흥민 득점 코드' width='600'>";
document.write("< 코드 ><br />");
document.write($img_024, "<br /><br />");

//주의!!
document.write("주의 !!<br /><br />");
document.write("문자형 + 숫자형 이라서 13이 아니라 121이 나온다.<br />");
document.write("< 결과 ><br />");
document.write(korSoccerShootingNum + 1, "<br />");
var $img_025 =
  "<img src='./img/num_plus_str.png' alt='문자형 더하기 숫자형 코드' width='500'>";
document.write("< 코드 ><br />");
document.write($img_025, "<br /><br />");

// 콘솔창 색깔 구분!!
document.write("console 창 색깔 구분 !!<br />");
var thisYear = "2024";
console.log(thisYear);
document.write("< 결과 ><br />");
var $img_026 =
  "<img src='./img/console_str_black.png' alt='문자형 콘솔 창 색깔' width='900'>";
document.write($img_026, "<br />");
document.write("결과 해석 : 문자형은 console 창에서 검은색으로 나온다.<br />");
var $img_027 =
  "<img src='./img/str_black_code.png' alt='문자형 콘솔 창 색깔 코드' width='250'>";
document.write("< 코드 ><br />");
document.write($img_027, "<br /><br />");

var nextYear = thisYear + 1;
console.log(nextYear);
document.write("< 결과 ><br />");
var $img_028 =
  "<img src='./img/console_str_black2.png' alt='문자형 콘솔 창 색깔2' width='900'>";
document.write($img_028, "<br />");
document.write(
  "결과 해석 : 문자형 + 숫자형 이므로 문자형이 답으로 나오게 되어 console 창에서 검은색으로 표현이 된다.<br />"
);
var $img_029 =
  "<img src='./img/str_black_code2.png' alt='문자형 콘솔 창 색깔 코드2' width='250'>";
document.write("< 코드 ><br />");
document.write($img_029, "<br /><br />");

var nextYearNum = Number(thisYear) + 1;
console.log(nextYearNum);
document.write("< 결과 ><br />");
var $img_030 =
  "<img src='./img/console_num_blue.png' alt='숫자형 콘솔 창 색깔' width='900'>";
document.write($img_030, "<br />");
document.write(
  "결과 해석 : 숫자형 + 숫자형 이므로 숫자형이 답으로 나오게 되어 console 창에서 파란색으로 표현이 된다.<br />"
);
var $img_031 =
  "<img src='./img/num_blue_code.png' alt='숫자형 콘솔 창 색깔 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_031, "<br /><br />");

// 이런 걸 어디에 쓸까??
document.write("< 언제 문자형과 숫자형을 구분하여 사용할까?? ><br /><br />");
document.write(
  "쇼핑몰 가격정보 '10,000'처럼 ,가 들어가면 문자형이 된다.<br />"
);
document.write(",가 들어가면 숫자형으로 표현을 못 한다.<br />");
document.write(
  "40% 할인이라면 10000 * 0.6(숫자형 계산) => '6,000'(문자형으로 변환)이 되어야 한다.<br /><br />"
);

// 태그를 포함한 문자형 데이터를 브라우저에 표현하기
document.write(
  "< 태그를 포함한 문자형 데이터를 브라우저에 표현하기 ><br /><br />"
);
document.write("< 결과 >");
var $str_title = "<h4 class='title'>카카오 프렌즈</h4>";
document.write($str_title);
var $str_img = "<img src='./img/kakao.gif'/><br />";
document.write($str_img);
var $img_032 =
  "<img src='./img/title_kakao.png' alt='태그를 포함한 이미지 코드' width='450'>";
document.write("< 코드 ><br />");
document.write("코드 해석<br />");
document.write("../가 아닌 ./으로 하는 이유<br />");
document.write("index.html에서 img로 가는 경우인 것이기 때문이다.<br />");
document.write(
  "자바스크립트에서 선언된 미디어 소스 정보는 그냥 문자 선언에 불과하다.<br />최종적으로 문자가 도달하는 공간을 기준으로 경로 설정을 해주어야 한다.<br />"
);
document.write($img_032, "<br /><br />");
document.write("아래는 style.css 코드<br />");
var $img_033 =
  "<img src='./img/title_css.png' alt='태그를 포함한 이미지 코드2' width='200'>";
document.write($img_033, "<br /><br />");

// 실습문제
var $str_title2 =
  "<h4>실습 문제(문자형 데이터) img_1.jpg 파일을 브라우저에 출력해보기.<br /> \
  (단, 300*200 공간에 구성(클래스명을 연동하여)한 후, 배경이미지로 미디어 파일을 연동</h4>";
document.write($str_title2);
document.write("< 결과 >");
var $str_bg =
  "<div class='str_bg' style='background-image:url(./img/img_1.jpg)'></div>";
document.write($str_bg, "<br />");
var $img_034 = "<img src='./img/p1.png' alt='실습 문제 코드1' width='600'>";
document.write("< 코드 ><br />");
document.write("코드 해석<br />");
document.write("url 안에 큰 따옴표를 넣으면 안됨!!<br />");
document.write(
  "bgi를 style.css에 넣으려면 경로를 ../img/img_1.jpg로 해야 함!!<br />"
);
document.write($img_034, "<br /><br />");
document.write("아래는 style.css 코드<br />");
var $img_035 = "<img src='./img/p1_2.png' alt='실습 문제 코드2' width='250'>";
document.write($img_035, "<br /><br />");

// 숫자형을 문자형으로 변경시 사용되는 메서드(명령)
document.write("< 숫자형을 문자형으로 변경시 사용되는 메서드(명령) ><br />");
document.write("String(변수명), 변수명.toString()<br /><br />");

// #8. 숫자형 데이터
document.write(" <p style='font-size:16px'>#8. 숫자형 데이터</p>");
document.write("형변환<br />");
document.write("Number(변수명) : 문자형 -> 숫자형<br />");
document.write(
  "parseInt(변수명) : 문자형 -> 정수 숫자형(소수점 이하는 버린다.)<br />"
);
document.write("parseFloat(변수명) : 문자형 -> 실수 숫자형<br />");
document.write("수 > 실수 > 정수<br /><br />");

// #8-1. Number("3.14");
document.write("< 결과 ><br />");
var $img_036 =
  "<img src='./img/Number_rst.png' alt='Number() 결과' width='900'>";
document.write($img_036, "<br />");
var $no_01 = Number("3.14");
console.log($no_01);
var $img_037 = "<img src='./img/Number.png' alt='Number() 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_037, "<br /><br />");

// #8-2. paresInt("3.14");
document.write("< 결과 ><br />");
document.write(
  "결과 해석 : 소수점 아래는 반올림을 하지 않고 그냥 버린다.<br />"
);
var $img_038 =
  "<img src='./img/parseInt_rst.png' alt='parseInt() 결과' width='900'>";
document.write($img_038, "<br />");
var $no_02 = parseInt("3.14");
console.log($no_02);
var $img_039 =
  "<img src='./img/parseInt.png' alt='parseInt() 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_039, "<br /><br />");

// #8-3. parseFloat("3.14");
document.write("< 결과 ><br />");
var $img_040 =
  "<img src='./img/parseFloat_rst.png' alt='parseFloat() 결과' width='900'>";
document.write($img_040, "<br />");
var $no_03 = parseFloat("3.14");
console.log($no_03);
console.log(typeof $no_03);
console.log(typeof "3.14");
var $img_041 =
  "<img src='./img/parseFloat.png' alt='parseFloat() 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_041, "<br /><br />");

// #9. 논리형 데이터
document.write(
  " <p style='font-size:16px'>#9. 논리형 데이터(boolean) : true 또는 false</p>"
);
document.write(
  'true, false는 ""로 감싸면 안된다. -> 숫자형이 아님에도 console 창을 보면 파란색으로 나온다.<br /><br /> '
);
// 언제 사용??
document.write("언제 논리형 데이터를 사용할까??<br /><br />");
// 1. 페이지 넘길 때 사용
document.write("<1> 페이지를 넘길 때 사용(두 수에 대한 비교)<br />");
document.write(
  "<<, < 표시 있을 때, << 누르면 바로 1페이지로 넘어가는 경우 같은 것에서 사용<br />"
);
document.write("< 결과 ><br />");
var $img_042 =
  "<img src='./img/boolean_rst.png' alt='boolean 비교 결과' width='900'>";
document.write($img_042, "<br />");
var thanNum = 24 < 13;
console.log(thanNum);
var boolTxt = true;
console.log(boolTxt);
var $img_043 =
  "<img src='./img/boolean.png' alt='boolean 비교 코드' width='230'>";
document.write("< 코드 ><br />");
document.write($img_043, "<br /><br />");

// 2. 페이스북 가입연령
document.write("<2> 페이스북 가입연령<br />");
document.write("< 결과 ><br />");
var kidAge = 12; // 가입하고자 하는 사용자의 나이 데이터
var facebookRegisterPermit = kidAge > 13;
document.write(`페이스북 가입 가능여부 : ${facebookRegisterPermit}`, "<br />");
var $img_044 =
  "<img src='./img/facebook.png' alt='페이스북 가입 가능여부 코드' width='600'>";
document.write("< 코드 ><br />");
document.write($img_044, "<br /><br />");

// 3. 카톡 전송버튼
document.write(
  "<3> 카톡에서 어떠한 값도 입력하지 않은 상태에서 전송버튼을 클릭했다면??<br />"
);
document.write("< 결과 ><br />");
var bool_01 = Boolean("");
document.write(bool_01, "<br />");
var bool_02 = Boolean("솜사탕");
document.write(bool_02, "<br />");
document.write("결과 해석<br />");
document.write("입력한 값이 하나도 없으면 -> false<br />");
document.write("입력한 값이 하나라도 있으면 -> true<br />");
var $img_045 =
  "<img src='./img/katalk.png' alt='카톡 전송버튼 누르기 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_045, "<br /><br />");

// #10. undefined
document.write(
  " <p style='font-size:16px'>#10. undefined : 변수명만 존재하고 어떠한 값도 대입하지 않은 경우</p>"
);
document.write("초기 데이터가 없거나 또는 전달받은 데이터가 없는 경우<br />");
document.write("< 결과 ><br />");
var boul;
document.write(boul, "<br />");
console.log(boul);
var $img_046 =
  "<img src='./img/undefined_rst.png' alt='undefined 결과' width='900'>";
document.write($img_046, "<br />");
var $img_047 =
  "<img src='./img/undefined.png' alt='undefined 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_047, "<br /><br />");

// #11. null
document.write(
  " <p style='font-size:16px'>#11. null : 처음부터 유효한 값이 아니라고 정의하거나, 값이 없음이라고 선언한 상태</p>"
);
document.write("< 결과 ><br />");
var noValue = null;
document.write(noValue, "<br />");
console.log(noValue);
var $img_048 = "<img src='./img/null_rst.png' alt='null 결과' width='900'>";
document.write($img_048, "<br />");
var $img_049 = "<img src='./img/null.png' alt='null 코드' width='350'>";
document.write("< 코드 ><br />");
document.write($img_049, "<br /><br />");
