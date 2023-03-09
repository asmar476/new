// ChildComponent.js
import React, { useContext } from 'react';
import ContextExample from './ContextExample';

function ChildComponent() {
  const appData = useContext(ContextExample);

  return (
    <div>
      <p>Version: {appData.version}</p>
    </div>
  );
}

export default ChildComponent;
