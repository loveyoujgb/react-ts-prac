import React from 'react';

// props 프로퍼티에 대한 인터페이스 작성
interface GreeterProps {
  person:string;
  
}


// JSX.Element 최신에 쓰이는 jsx 애너테이션!
// function Greeter(props:{person:string}): JSX.Element {
function Greeter({person}:GreeterProps): JSX.Element {
  //function Greeter(): JSX.Element
  return (
    <div >
      <h2>Hello</h2>
      <h3>{person}</h3>
    </div>
  );
}

// React.FC
// 현재 쓰기에는 구식이므로 권장하지 않는다. 
// const Greeter:React.FC = () => {
//   //function Greeter(): JSX.Element
//   return (
//     <div >
//       <h2>Hello</h2>
//     </div>
//   );
// }

export default Greeter;