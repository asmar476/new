import React, { useState } from 'react';
import Login from './component/Login';
import ContextExample from './component/ContextExample';
import ChildComponent from './component/ChildComponent';
function App() {
  const appData = { name: 'My App', version: '1.0.0' };
  return (
    <div className="App">
      {/* <Login /> */}
      <ContextExample.Provider value={appData}>
      <div>
        <h1>{appData.name}</h1>
        <ChildComponent />
      </div>
    </ContextExample.Provider>
    </div>
  );
}
export default App;