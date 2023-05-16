import React from 'react'
import './galery.css'
import Gcard from './Gcard'
import Galery_db from '../../Database/Galery/Galery_db.json'


const Galery = () => {
  return (
    <div className='galery'>
      {Galery_db.map((item, i) => <Gcard index={item.id} title={item.title} sub={item.sub}/>)}          
      
               
    </div>
  )
}

export default Galery

