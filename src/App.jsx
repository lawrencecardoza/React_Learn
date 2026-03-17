import React from 'react'
import Card from './components/Card'

const App = () => {
  return (

    <div className='parent'>
       
    <Card user='lawrence' age={24} img='https://images.unsplash.com/photo-1773270387206-481f73b2b85e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user='vishal' age={22} img='https://images.unsplash.com/photo-1770723963970-ace02c7db50e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
   
  )
}

export default App