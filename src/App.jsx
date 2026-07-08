import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';
import CardDetail from './components/Datafetch/CardDetail';
import Data from "./components/Datafetch/data.json"
import CardDetails from './components/Datafetch/CardDetails';
import UniqueId from './components/Uniqueid/UniqueId';
function App() {

  let items = [];
  for (let x = 0; x < Data.length; x++) {
    items.push(<CardDetail key={x} title={Data[x].title} desc={Data[x].desc} />)
  }

  const itemDetails  = Data.map((item1,index)=> (<CardDetails  key={index} title ={item1.title} desc={item1.desc}/>))
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
      <div style={{display:"flex"}}>
        {itemDetails}
      </div>

      <div style={{display:'flex'}}>
        <UniqueId/>
      </div>
    </div>
  )

}
export default App;