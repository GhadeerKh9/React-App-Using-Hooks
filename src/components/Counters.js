// import React, { Component } from "react";

// // import bootstrap from "bootstrap";
// import Counter from "./Counter";

// class Counters extends React.Component {
//   state = {
//     arr: [
//       { id: 21, value: 1 },
//       { id: 22, value: 2 },
//       { id: 23, value: 3 },
//     ],
//   };

//   handleDelete = (parameter) => {
//     console.log(parameter);
//     const arr = this.state.arr.filter(element => element.id !== parameter.id);
//     this.setState({ arr: arr });
//   };

//   render() {
//     return (
//       <div>
//         {/* {<Counter/>} */}
//         <h1>bla</h1>

//         {this.state.arr.map((element) => (
//           <Counter
//             value={element.value}
//             key={element.id}
//             id={this.state.id}
//             handleDelete={this.handleDelete(element)}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;



import React, { Component, useState} from 'react';
import useDocumentTitle from './useDocumentTitle'
import Users from './Users'



function Counters (props){
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")


  useDocumentTitle(`${name} ${count}`)
 

return(

<div>
<h1>This is a functional component</h1>
<input type="text" onChange= {(e) => setName(e.target.value)}/>
<h1>{name} has clicked {count} times</h1>
<h1>Count: {count} </h1>
<button onClick= {() => setCount(count + 1)}>Increment</button>
<Users/>
</div>

)


}


export default Counters;
