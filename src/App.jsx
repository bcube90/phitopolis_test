/* 
 *  We only need the the style, for this task I will not use the react-bootstrap
 *  since we only need the bare minimum setup.
*/
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import React, {useReducer} from 'react';
import {
  IntegersInput, Footer, ResultAbsolute,
  AbsoluteList
} from './components'
import { 
  AbsoluteContext, AbsoluteDefaultState, AbsoluteReducer
} from './contexts/AsboluteContext';

function App() {
  const [state, disptach] = useReducer(AbsoluteReducer, AbsoluteDefaultState)

  return (
    <AbsoluteContext.Provider value={{state: state, disptach: disptach}}>
      <section id="main" className='container-md overflow-scroll'>
        <IntegersInput />

        <div className='row'>
          <ResultAbsolute />
          <AbsoluteList />
        </div>
      </section>

      <Footer />
    </AbsoluteContext.Provider>
  );
}

export default App;
