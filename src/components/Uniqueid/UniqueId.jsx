import React from 'react';
import  {v4 as uuidv4} from "uuid";

const  todos =[
    {   id:uuidv4(),
        title:"Rav4",
        description:"Rav4 is toyota brand  SUV Car"
    },
       {id:uuidv4(),
        title:"Aqua",
        description:"Aqua is  toyota brand SUV Car"
    },

       {id:uuidv4(),
        title:"Toyota Crown",
        description:"Toyota Crown is  one  the most favourite Toyota Cars"
    },
       {id:uuidv4(),
        title:"Toyota Yaris ",
        description:"Toyota Yaris is one of the most  valuable cars"
    },
       {id:uuidv4(),
        title:"Toyota Allion",
        description:"Toyota Allion  is one of the best city type car from a"
    },   {id:uuidv4(),
        title:"Toyota Premio",
        description:"Premio is   dashing cars among  toyota brand cars and has more effenciancy"
    },
       {id:uuidv4(),
        title:"Land Crusier Prado",
        description:"Land Crusier Prado is most beautiful and  top valuable cars  in  toyota brand"
    },

]

function UniqueId() {
    console.log(uuidv4())
  return (
    <div>
        <h2>Map With Unique ID </h2>
<div style={{display:"flex"}}>

        {todos.map((todo)=>{
            const {id , title,description} =todo
            return (
                <div key={id}  className='container'>

                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            )
        })}
    </div>
</div>

       
    )
}

export default UniqueId