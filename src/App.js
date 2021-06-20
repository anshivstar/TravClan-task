import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Screens/Homepage/Homepage';
import { DataProvider } from './ContextApi/data'
import DetailScreen from './Screens/DetailScreen/DetailScreen';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <DataProvider>
            <Route path='/' component={Homepage} exact />
            <Route path='/detail/:id' component={DetailScreen}  />
          </DataProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
