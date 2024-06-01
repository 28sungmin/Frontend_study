// React.createElement(elementName, data, child)
// ==> 태그 안에 쓰는 class, title 이런게 data이다.

// elementName(요소명) : HTML 태그와 같은 'h1'으로 지정하거나 또는 컴포넌트의 이름을 직접 넣을 수도 있음
// data : 속성이나 상위 컴포넌트로부터 받아온 값. null 또는 {name: "홍길동"}와 같은 데이터의 형태 ==> 아무것도 선언 안 할거면 null 쓰면 됨
// child : 요소의 내부 자식위치에 들어올 콘텐츠(텍스트, 이미지, 미디어, 하위 컴포넌트도 포함)

// ReactDOM.render(선언된 공간, 접근할 대상) : 위에서 구성한 구조를 접근할 대상의 공간에 넣겠다.

// hello, react 띄우기
const start_hello = React.createElement(
  "h2",
  { className: "helloCl", title: "안녕 리액트" },
  "Hello, React~!!"
);
ReactDOM.render(start_hello, document.getElementById("root"));

// 메뉴바 만들기 => 아래의 형태로 만들거임

/*
    <header id="header">
      <div id="wrap">
        <div class="logo">
          <a href=""></a>
        </div>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </header>
*/

// 로고 파트
const logo_a = React.createElement(
  "a",
  {
    className: "text-white fs-5 d-block",
    href: "#",
  },
  "LOGO"
);

const logo = React.createElement("div", { className: "logo" }, logo_a);

// 메뉴 파트
// ABOUT 메뉴
const menu_a_1 = React.createElement(
  "a",
  {
    className: "text-secondary d-block",
    href: "#",
  },
  "ABOUT"
);
const menu_li_1 = React.createElement("li", { className: "mx-3" }, menu_a_1);

// PROJECT 메뉴
const menu_a_2 = React.createElement(
  "a",
  {
    className: "text-secondary d-block",
    href: "#",
  },
  "PROJECT"
);
const menu_li_2 = React.createElement("li", { className: "mx-3" }, menu_a_2);

// CONTACT 메뉴
const menu_a_3 = React.createElement(
  "a",
  {
    className: "text-secondary d-block",
    href: "#",
  },
  "CONTACT"
);
const menu_li_3 = React.createElement("li", { className: "mx-3" }, menu_a_3);

// ul 메뉴 파트 통합
const menu_ul = React.createElement(
  "ul",
  { className: "d-flex" },
  menu_li_1,
  menu_li_2,
  menu_li_3
);

// #wrap 구성
const wrap = React.createElement(
  "div",
  {
    id: "wrap",
    className:
      "container d-flex justify-content-between align-items-center h-100",
  },
  logo,
  menu_ul
);

// #header 구성
const header = React.createElement(
  "header",
  {
    id: "header",
    className: "container-fluid bg-dark",
    style: { height: "60px" },
  },
  wrap
);

ReactDOM.render(header, document.querySelector("#root2"));
