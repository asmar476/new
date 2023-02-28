import React, { useState } from 'react';
import Login from './component/Login';
function App() {
  const [value, setValue] = useState("");
  const handleClick = (event) => {
    setValue("abc")
  }
  return (
    <div className="App">
      {/* <Login /> */}
      <input type="text" className="abc" defaultValue="value" />
      <button type="button" style={{backgroundColor: "red", border: "none", width: "30px", height: "20px", position: "fixed", marginLeft: "40px"}} onClick={handleClick}>{value}</button>
      <button type="button" style={{backgroundColor: "red", border: "none", width: "30px", height: "20px", position: "fixed", marginLeft: "80px"}} onClick={handleClick}>{value}</button>
      <button type="button" style={{backgroundColor: "red", border: "none", width: "30px", height: "20px", position: "fixed", marginLeft: "120px"}} onClick={handleClick}>{value}</button>
    </div>
  );
}

export default App;