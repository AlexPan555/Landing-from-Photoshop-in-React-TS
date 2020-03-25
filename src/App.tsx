import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/header/Header';
import Landing from './Components/Landing';
import AppTest from './test/AppTest'



const App: React.FC = () => {
  return (
    <BrowserRouter>
       <main className='conteiner'>
         <Header />
        <Switch>
          <Route path='/' component={Landing} exact/>
          <Route path='/test' component={AppTest} />
        </Switch>
      </main>
    </BrowserRouter>
   
  );
}

export default App;
