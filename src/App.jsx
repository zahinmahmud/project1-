import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <h2>Hello from </h2>
    </div>
  )

}
export default App;