import React from 'react'
import './App.css';
import UserImc from './components/UserIMC'
import { UserProvider} from './components/user-context'



function App() {

  return (
    <UserProvider className="App">
     <UserImc></UserImc>
    </UserProvider>
  );
}

export default App;
