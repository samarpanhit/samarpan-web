import React from 'react'
import './ourevents.css'
import Card from '../Home/OurEvents/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../../store/eventSlice'
import Loader from '../Loader'

const Events = () => {
  const dispatch = useDispatch()
  const { data:test } = useSelector((state) => state.event);


  const [data, setData] = useState()
  const [image, setImage] = useState()

  async function getData() {
    setData(test.data);
    setImage(test.image);
  }
  useEffect(() => {
    dispatch(fetchEvent())
  }, [])

  useEffect(() => {
    getData();
  }, [test])

  return (
    <div className='event-page'>
      <h1>OUR EVENTS</h1>
      <div className='event-details'>
        {/* {Events_db.map((item, i) => <Card title={item.title} date={item.date} contents={item.contents} id={item.id} image={item.image[0].original} />)} */}
        {
        !data?
        <Loader/>
        :
            data.map((item, i) => <Card title={item.title} date={item.date} contents={item.contents} id={item.id}  image={image[i]} key={i}/>)
        
        }
      </div>
    </div>
  )
}

export default Events