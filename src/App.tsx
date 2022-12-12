import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import { v4 as getId } from "uuid"; // uuid에 에러줄이 떴었으나 타입스크립트를 다운받아서 에러를 없애준다.

const num: number = 123;
console.log("HELLO FROM TYPESCRIPT!!!", num);
// 직접 컴파일 할 필요가 없다. !! npm start  웹팩이 해준 덕이다. tsc명령어 직접 하지 않아도 컴팡일 된다.

// tsx파일에서는 화살표함수 타입에서 타입을 넣을 때 T우측에 ',' 를 추가 해야 한다.
// const func = <T,>(x:T):T=>{
//   return x;
// }

function App() {
  // 제네릭 타입으로 Item[]을 넣어준다 => 시작할 때에는 빈 배열인 값이지만, Item 인터페이스를 지켜야 되는 배열 타입이 된다.
  // Item 타입 import
  const [items, setItems] = useState<Item[]>([]);

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];

  /* --------------------------------- 함수 전달하기 -------------------------------- */
  const addItem = (product: string, quantity: number) => {
    console.log(product);
    setItems([...items, { id: getId(), product, quantity }]);
    //getId 는 문자열을 반환 하므로 id의 타입을 문자열로 바꿔주면 에러 해결.
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Greeter person="Colt" />
      <ShoppingListForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
