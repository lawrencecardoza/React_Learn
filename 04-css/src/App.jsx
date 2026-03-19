import React from 'react'
import Header from './components/header/Header'
import Button from './components/button/Button'


// const App = () => {
//   return (
//    <div>
//     <Header />
//     <Button />
//    </div>
//   )
// }


// // Inline CSS 
// function App(){
//   return <h1 style={{color:"red"}}>Lawrence</h1>
// }

// External CSS
function App(){
  const style = {
    color:"blue",
    fontSize:"20px"
  };

  
return <h1 style={style}>Hi React</h1>

}

export default App

