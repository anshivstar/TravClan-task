import React from 'react'
import Homepage from './Screens/Homepage/Homepage';
import { DataProvider } from './ContextApi/data'
function App() {
  return (
    <>
      <DataProvider>
        <Homepage />
      </DataProvider>
    </>
  );
}

export default App;
