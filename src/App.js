import React, { useEffect, useState , useRef} from 'react';

import './App.css';
//import { Fetch }from './component/Fetch';
function App() {
  const inputRef = useRef(null);
  const [state, setState] = useState([]);
  const [slc, setSlc] = useState([]);
  useEffect(() => {
    const characterArray = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]; 
    console.log("array", characterArray);
    const copArr = [...characterArray];
    // copArr.splice(0,4);
    // console.log("array with data",copArr);
   copArr.splice(copArr.length, 0, "g")
   let newArr=[...copArr]
    console.log("array with data", newArr);
    setState(newArr);
    const selected =  characterArray.slice(3)
    console.log("slice concept", selected);
    setSlc(selected);
  }, [])
  const numbers = [1, 3];
  const  num =  [2,4];
  // const merger = [...numbers, ...num];
  const merger = numbers.concat(num);
  console.log(merger);
  const sum = merger.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // 10
  let arrOfObjs = [
    {name: "item1", category: "A", price: 10},
    {name: "item2", category: "B", price: 15},
    {name: "item3", category: "A", price: 20},
    {name: "item4", category: "C", price: 25}
  ];
  
  const sums = arrOfObjs.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  
  console.log(sums); // 6
  let fruits = ["Banana", "Apple", "Mango"];
let lastFruit;
lastFruit = fruits.pop();
console.log(fruits); // Output: ["Banana", "Apple"]
console.log(lastFruit); // Output: "Mango"
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputRef.current.value);
};
const valOne = 9; 
const valTwo = 10;  
console.log("values => ",valOne | valTwo);


  return (
    <div className="App">
      {/* <Fetch /> */}
      {JSON.stringify(state)}
      {JSON.stringify(slc)}
      <input type="text" defaultValue={sum}></input>
      <span>{sum}</span>
      <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
              
    </div>
  );
}

export default App;