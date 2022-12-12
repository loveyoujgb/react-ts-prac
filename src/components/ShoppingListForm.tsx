import React, { useRef } from "react";

/* ------------------------------ 함수 props 받아오기 ----------------------------- */
interface ShoppingLIstFormProps {
  onAddItem:(item:string, quantity:number)=> void;
}


function ShoppingListForm({onAddItem} : ShoppingLIstFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null); // 맨 처음엔 dom에 이게 존재하지 않으므로 null로 시작해야된다. 

  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value // ?, !둘 중 하나로 해주어야 한다. ? 있을 지 없을지 모를 때 , ! 있다고 단언할 때 , 태그에 ref프로퍼티로 넣어두었으므로 null은 아니다.
    const quantity = parseInt(quantityInputRef.current!.value) //string으로 들어오므로 정수로 바꿔준다.
    onAddItem(newProduct,quantity) // product는 null이 아니어야 하므로 위에서 !를 해줘야 되겠다.
    productInputRef.current!.value="";
    quantityInputRef.current!.value="";
  }
//Dom 에 엑세스하게 만드려는 항목에 Ref 프로퍼티를 넣는다
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef}></input>
      <input type="number" min={0} ref={quantityInputRef} ></input>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
