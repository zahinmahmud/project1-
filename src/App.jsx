import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';
import CardDetail from './components/Datafetch/CardDetail';
import Data from "./components/Datafetch/data.json"

function App() {

  let items = [];
  for (let x = 0; x < Data.length; x++) {
    items.push(<CardDetail  title={Data[x].title} desc={Data[x].desc} />)
  }
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* <Card/> */}
        <Card title="Allion" description="Allion is  toyota brand Car" />
        <Card title="Axio" description="Axio is  toyota brand Car" />
        <Card title="Premio" description="Premio is  toyota brand Car" />
        <Card title="Prius" description="Prius is  toyota brand Car" />
        <Card title="Rav4" description="Rav4 is  toyota brand Car" />


      </div>
      <h2>Hello from </h2>

      <div style={{display:'flex'}}>
                {items}
      </div>
    </div>
  )

}
export default App;