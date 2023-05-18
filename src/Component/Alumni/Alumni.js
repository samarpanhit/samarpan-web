import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import './alumni.css'
import Card from './Card'


const Alumni = () => {
  const [data, setData] = useState()
  const url = 'https://script.google.com/macros/s/AKfycbxOeZ2WvErfHwGPKWPOXt4cLoZqpFtLaoT7b3Q8jl6hg0YaC4fbzBDffAyQUmvsofq1fQ/exec '
  async function getData() {
    var fdata = await fetch(url);
    fdata = await fdata.json();
    setData(fdata.data);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='alumni'>
      {
        !data ?
          <div className='loader'>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
          :
          data.map((item, i) => {
            return <Card name={item.Name} year={item.Year} />
          })
      }
    </div>
  )
}

export default Alumni