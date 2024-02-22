document.write("<h2>연산자</h2>");

document.write("- 산술연산자(+, -, *, /, %)<br />");
document.write("- 문자결합 연산자(문자 데이터 + 문자 데이터)<br />");
document.write(
  "- 대입연산자(변수명=변수값)/복합대입연산자(+=, -=, *=, /=, %=)<br />"
);
document.write("- 증감연산자(++, --)<br />");
document.write("- 비교연산자(<, >, <=, >=, ==, !=, ===, !==)<br />");
document.write("- 논리연산자(||, &&, !)<br />");
document.write("- 삼항조건 연산자(변수명 ? 'A' : 'B')<br /><br />");

// #1. 산술연산자
document.write("<h3>#1. 산술연산자</h3>");
document.write("무조건 숫자형 데이터만 가능하다.<br /><br />");

document.write("< 결과 ><br />");

var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write(`더한 값 : ${rst_01}`, "<br />");
var rst_02 = $num_01 - $num_02;
document.write(`뺀 값 : ${rst_02}`, "<br />");
var rst_03 = $num_01 * $num_02;
document.write(`곱한 값 : ${rst_03}`, "<br />");
var rst_04 = $num_01 / $num_02;
document.write(`나눈 값 : ${rst_04}`, "<br />");
var rst_05 = $num_01 % $num_02;
document.write(`나눈 후 나머지값 : ${rst_05}`, "<br />");

document.write("< 코드 > <br/>");
var $img_01 =
  "<img src='./img/calculate.png' alt='산술연산자 코드' width='400'>";
document.write($img_01, "<br /><br />");

document.write("---------------------------------------------<br />");
document.write(
  "12 % 5 => 2;<br /><br />\
0 % 5 => 0;<br /> 1 % 5 => 1;<br />2 % 5 => 2;<br />3 % 5 => 3;<br />\
4 % 5 => 4;<br /> 5 % 5 => 0;<br /><br /> 63 % 5 => 3;<br/>\
n % 5 = 0이 된 경우, n은 5의 배수<br />"
);
document.write("---------------------------------------------<br /><br />");

// 예시 : 남성(1, 3), 여성(2, 4)
document.write("예시 : 남성(1, 3), 여성(2, 4)<br />");
document.write(
  "비슷한 예시 : airbnb에서 호스트(2xxxxxxx), 게스트(1xxxxxxx)<br />"
);
document.write("< 결과 ><br />");
var gender = 4;
document.write(gender % 2, "<br />");
document.write(
  "결과 해석 : gender % 2 == 0인 경우는 여성, 1인 경우는 남성을 가리킨다.<br />"
);
document.write("< 코드 > <br/>");
var $img_02 = "<img src='./img/gender.png' alt='산술연산자 코드2' width='400'>";
document.write($img_02, "<br /><br />");

// #2. 문자결합연산자
document.write("<h3>#2. 문자결합 연산자</h3>");
document.write(
  "문자형 + 문자형 => 문자형 / 문자형 + 숫자형 => 문자형<br /><br />"
);

document.write("< 변수 > <br />");
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;
var $img_03 =
  "<img src='./img/str_num.png' alt='문자결합연산자 예시 변수' width='250'>";
document.write($img_03, "<br />");

document.write("< 결과 ><br />");
var sum_str = string_01 + string_02;
document.write(sum_str, "<br />");
document.write(typeof sum_str, "<br /><br />");

var sum_multi = string_01 + number_01;
document.write(sum_multi, "<br />");
document.write(typeof sum_multi, "<br />");

document.write("< 코드 > <br/>");
var $img_04 =
  "<img src='./img/str_num_rst.png' alt='문자결합연산자 결과' width='400'>";
document.write($img_04, "<br /><br />");

var $str_01 = "빙그레 바나나 우유";
var $num_01 = 1;
var $num_02 = 1;

document.write("< 변수 ><br />");
var $img_05 =
  "<img src='./img/var_str_num.png' alt='문자결합연산자 변수' width='250'>";
document.write($img_05, "<br /><br />");
document.write("< 결과 ><br />");
var $result1 = $str_01 + $num_01 + $num_02;
document.write($result1, "<br />");
var $result2 = $str_01 + ($num_01 + $num_02);
document.write($result2, "<br />");
document.write("-----------<br />");
document.write("결과 해석 : ()는 우선결합!!<br />");
document.write("< 코드 > <br/>");
var $img_06 =
  "<img src='./img/str_num2.png' alt='문자결합연산자 결과' width='400'>";
document.write($img_06, "<br /><br />");

// #3. 대입연산자 / 복합대입연산자
document.write("<h3>#3. 대입연산자 / 복합대입연산자</h3>");

// #3-1. 대입연산자
document.write("<h4>#3-1. 대입연산자</h4>");

document.write("< 결과 ><br />");
var first = "홍길동";
var second = first;
var third = second;
document.write(third, "<br />");
document.write("< 코드 ><br />");
var $img_07 = "<img src='./img/assign.png' alt='대입연산자 결과' width='400'>";
document.write($img_07, "<br /><br />");

//#3-2. 복합대입연산자
document.write("<h4>#3-2. 복합대입연산자</h4>");

var $no_01 = 24;
var $no_02 = 8;

document.write("< 변수 ><br />");
var $img_08 =
  "<img src='./img/var_complex_assign.png' alt='복합대입연산자 변수' width='150'>";
document.write($img_08, "<br />");

document.write("< 결과 ><br />");

// $no_01 = $no_01 + $no_02 => [해석]] 24 + 8 => $no_01 = 32
$no_01 += $no_02;
document.write($no_01, "<br />");

// $no_01 = $no_01 - $no_02 => [해석]] 32 - 8 => $no_01 = 24
$no_01 -= $no_02;
document.write($no_01, "<br />");

// $no_01 = $no_01 * $no_02 => [해석]] 24 * 8 => $no_01 = 192
$no_01 *= $no_02;
document.write($no_01, "<br />");

// $no_01 = $no_01 / $no_02 => [해석]] 192 / 8 => $no_01 = 24
$no_01 /= $no_02;
document.write($no_01, "<br />");

// $no_01 = $no_01 % $no_02 => [해석]] 24 % 8 => $no_01 = 0
$no_01 %= $no_02;
document.write($no_01, "<br />");

document.write("< 코드 ><br />");
var $img_09 =
  "<img src='./img/complex_assign.png' alt='복합대입연산자 코드' width='500'>";
document.write($img_09, "<br /><br />");

// 중요!!
document.write("중요 !!<br /><br />");

// 문자간의 연속성
document.write("복합대입연산자는 문자간의 연속성을 갖고 있는 결합이다.<br />");
var $txt = "a";
console.log($txt);
$txt += "b";
console.log($txt);
$txt += "c";
console.log($txt);

document.write("< 결과 ><br />");
var $img_10 =
  "<img src='./img/console_complex.png' alt='복합대입연산자 결과' width='900'>";
document.write($img_10, "<br />");
document.write("< 코드 ><br />");
var $img_11 =
  "<img src='./img/console_complex_code.png' alt='복합대입연산자 코드' width='200'>";
document.write($img_11, "<br /><br />");
document.write("-------------------------------------------------<br />");

//주소의 결합
document.write("복합대입연산자를 통해 주소의 결합을 나타낼 수 있다.<br />");

var address1 = "서울시 서초구 강남대로123 ";
var address2 = "메가스터디 빌딩 3층 1호 ";
var userName = "홍길동";
address1 += address2;
address1 += userName;
console.log(address1);

document.write("< 결과 ><br />");
var $img_12 =
  "<img src='./img/address_rst.png' alt='복합대입연산자 결과' width='1000'>";
document.write($img_12, "<br />");
document.write("< 코드 ><br />");
var $img_13 =
  "<img src='./img/address.png' alt='복합대입연산자 코드' width='350'>";
document.write($img_13, "<br /><br />");
document.write("-------------------------------------------------<br />");

// 테이블 구성
document.write(
  "복합대입연산자를 통해 테이블을 구성할 수 있다.(&lt;table&gt;~&lt;tr&gt;~&lt;td&gt; : 1행 3열 만들어보기)<br />"
);

var $t = "<table border='1'>";
$t += "<tr>";
$t += "<td>1</td>";
$t += "<td>2</td>";
$t += "<td>3</td>";
$t += "</tr>";
$t += "</table>";

document.write("< 결과 ><br />");
document.write($t);
console.log($t);
var $img_14 =
  "<img src='./img/table_rst.png' alt='복합대입연산자 결과' width='1000'>";
document.write($img_14, "<br />");
document.write("< 코드 ><br />");
var $img_15 =
  "<img src='./img/table.png' alt='복합대입연산자 코드' width='300'>";
document.write($img_15, "<br /><br />");
document.write("-------------------------------------------------<br />");

// 이미지 박스 구성
document.write("복합대입연산자를 활용하여 이미지 박스 구성해보기<br />");

var $pd = "";
$pd += "<div class='frame'>";
$pd += "<div class='box'>1</div>";
$pd += "<div class='box'>2</div>";
$pd += "<div class='box'>3</div>";
$pd += "<div class='box'>4</div>";
$pd += "</div>";

document.write("< 결과 ><br />");
document.write($pd, "<br />");
document.write("< 코드 ><br />");
var $img_16 =
  "<img src='./img/img_code_js.png' alt='복합대입연산자 코드' width='300'>";
document.write($img_16, "<br /><br />");
document.write("< 아래는 css 코드 ><br />");

var $img_17 =
  "<img src='./img/img_code_css.png' alt='복합대입연산자 css 코드' width='400'>";
document.write($img_17, "<br /><br />");
document.write("-------------------------------------------------<br />");

// 실습문제
document.write(
  "복합대입연산자를 활용하여 1~10까지 더한 최종값을 화면에 표현하시오. (최종값은 55)<br />"
);
var $no = 1;
$no += 2;
$no += 4;
$no += 3;
$no += 5;
$no += 6;
$no += 7;
$no += 8;
$no += 9;
$no += 10;
document.write("< 결과 ><br />");
document.write($no, "<br />");
document.write("< 코드 ><br />");
var $img_18 =
  "<img src='./img/num_plus.png' alt='복합대입연산자 코드' width='270'>";
document.write($img_18, "<br /><br />");

//#4. 증감연산자
document.write("<h3>#4. 증감연산자</h3>");
document.write("- 증가 연산자(1씩 더한다) : ++변수명, 변수명++<br />");
document.write("- 감소 연산자(1씩 빼준다) : --변수명, 변수명--<br /><br />");

document.write("< 초기 값 ><br />");
var pd_num = 12;
document.write(`A 상품의 개수 : ${pd_num}개`, "<br />");
document.write("< 코드 ><br />");
var $img_19 = "<img src='./img/plus_1.png' alt='초기값 코드' width='500'>";
document.write($img_19, "<br /><br />");

document.write("< 결과 ><br />");

// pd_num = pd_num + 1
++pd_num;
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />");
pd_num++;
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />");
document.write("< 코드 ><br />");
var $img_20 = "<img src='./img/plus_2.png' alt='증가연산자 코드' width='500'>";
document.write($img_20, "<br /><br />");

// pd_num = pd_num - 1
document.write("< 결과 ><br />");
--pd_num;
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />");
pd_num--;
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />");
document.write("< 코드 ><br />");
var $img_21 = "<img src='./img/minus_1.png' alt='감소연산자 코드' width='500'>";
document.write($img_21, "<br /><br />");

// 선행처리와 후행처리
document.write("<h4>증감연산자 - 선행처리 vs 후행처리</h4>");
document.write("선행처리 : ++변수명 또는 --변수명<br />");
document.write("후행처리 : 변수명++ 또는 변수명--<br />");
document.write(
  "위의 경우처럼 혼자서 단독으로 쓰이는 경우는 선행처리와 후행처리를 신경쓸 필요가 없다.<br /><br />"
);

document.write("< 선행처리 결과 ><br />");
var $a = 10;
var $b;
$b = ++$a;
document.write(`$a의 결과값 : ${$a}`, "<br />");
document.write(`$b의 결과값 : ${$b}`, "<br />");
document.write("< 코드 ><br />");
var $img_22 =
  "<img src='./img/first_plus.png' alt='증가연산자 선행처리 코드' width='400'>";
document.write($img_22, "<br /><br />");

document.write("< 후행처리 결과 ><br />");
var $c = 10;
var $d;
$d = $c++;
document.write(`$c의 결과값 : ${$c}`, "<br />");
document.write(`$d의 결과값 : ${$d}`, "<br />");
document.write("< 코드 ><br />");
var $img_22 =
  "<img src='./img/later_plus.png' alt='증가연산자 후행처리 코드' width='400'>";
document.write($img_22, "<br /><br />");

var a = 1;
var b = a++;
console.log(a);
console.log(b);
document.write("< 결과 ><br />");
var $img_23 =
  "<img src='./img/later_plus_console.png' alt='증가연산자 후행처리 결과' width='900'>";
document.write($img_23, "<br />");
document.write("< 코드 ><br />");
var $img_24 =
  "<img src='./img/later_plus2.png' alt='증가연산자 후행처리 코드' width='150'>";
document.write($img_24, "<br /><br />");

var c = 1;
var c = c++;
console.log(c);
document.write("< 결과 ><br />");
var $img_25 =
  "<img src='./img/later_plus_console2.png' alt='증가연산자 후행처리 결과' width='900'>";
document.write($img_25, "<br />");
document.write(
  "결과 해석 : 좌변의 c, 즉 값이 담기는 그릇이 중요한 거다. 처음에 1이 담긴 것이므로 답은 1이다.<br />"
);
document.write("< 코드 ><br />");
var $img_26 =
  "<img src='./img/later_plus3.png' alt='증가연산자 후행처리 코드' width='150'>";
document.write($img_26, "<br /><br />");

document.write("선행처리와 후행처리를 그림으로 표현하면 아래와 같다.<br />");
var $img_27 =
  "<img src='./img/first_later_explain.jpeg' alt='선행처리 후행처리 설명' width='600'>";
document.write($img_27, "<br /><br />");

// 비교연산자
document.write("<h3>#5. 비교연산자</h3>");
document.write("결과값은 true 또는 false만 나온다.<br />");

var $p = 10;
var $q = 12;
var $r = "10";
var $result_than;

document.write("< 변수 ><br />");
var $img_28 =
  "<img src='./img/var_result_than.png' alt='비교연산자 변수' width='200'>";
document.write($img_28, "<br /><br />");

document.write("< 결과 ><br />");
// 10 <= 12 -> true
$result_than = $p <= $q;
document.write($result_than, "<br />");
document.write("< 코드 ><br />");
var $img_29 =
  "<img src='./img/result_than_okay1.png' alt='비교연산자 올바른 경우 코드' width='350'>";
document.write($img_29, "<br /><br />");

document.write("< 결과 ><br />");
// "10" <= 12
$result_than = $r <= $q;
document.write($result_than, "<br />");
document.write(
  "결과 해석 : 원칙상 안되는 것이지만, js는 중간중간 취약한 부분들이 있는데, 그 부분들 중에 하나이다.<br />"
);
document.write("< 코드 ><br />");
var $img_30 =
  "<img src='./img/result_than_problem.png' alt='비교연산자 올바른 경우 코드' width='350'>";
document.write($img_30, "<br /><br />");

// ==와 === 비교
document.write("<h4>== 와 === 비교 </h4>");
document.write(
  "같다(==) : 데이터의 타입에 관계없이 화면상 출력되는 값이 같다면 동일여부로 판단<br />"
);
document.write(
  "정말~같다(===) : 데이터의 타입과 화면상의 출력되는 값이 모두 같아야 동일여부로 판단<br /><br />"
);
document.write("< 결과 ><br />");
$result_than = $p == $r;
document.write($result_than, "<br />");
document.write("< 코드 ><br />");
var $img_31 = "<img src='./img/same.png' alt='== 연산자 코드' width='350'>";
document.write($img_31, "<br /><br />");

document.write("< 결과 ><br />");
$result_than = $p === $r;
document.write($result_than, "<br />");
document.write("결과 해석 : 정확성을 위해서는 이것을 써주는게 좋다.<br />");
document.write("< 코드 ><br />");
var $img_32 =
  "<img src='./img/all_same.png' alt='=== 연산자 코드' width='350'>";
document.write($img_32, "<br /><br />");

document.write("주의 !!<br />");
document.write("(변수명 >= 변수명) ===> 비교연산자<br />");
document.write("(변수명 => 변수명) ===> 화살표 함수<br />");
