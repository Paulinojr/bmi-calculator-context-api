import React from 'react'
import './App.css';
import UserImc from './components/UserIMC'
import { UserProvider} from './components/user-context'



function App() {

  return (
    <UserProvider weight="60" height="1.60" className="App">
     <UserImc></UserImc>
    </UserProvider>
  );
}

export default App;
