import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";

const num: number = 123;
console.log("HELLO FROM TYPESCRIPT!!!", num);
// 직접 컴파일 할 필요가 없다. !! npm start  웹팩이 해준 덕이다. tsc명령어 직접 하지 않아도 컴팡일 된다.

// tsx파일에서는 화살표함수 타입에서 타입을 넣을 때 T우측에 ',' 를 추가 해야 한다.
// const func = <T,>(x:T):T=>{
//   return x;
// }

function App() {
  const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken Breast", quantity: 2 },
  ];

  return (
    <div>
      <h1>Hello World</h1>
      <Greeter person="Colt" />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
