import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/header/Header';
import Landing from './Components/Landing';



const App: React.FC = () => {
  return (
    <BrowserRouter>
       <main className='conteiner'>
         <Header />
        <Switch>
          <Route path='/' component={Landing} exact/>
        </Switch>
      </main>
    </BrowserRouter>
   
  );
}

export default App;
