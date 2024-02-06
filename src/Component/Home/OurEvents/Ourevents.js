import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../../../store/eventSlice'
import Loader from '../../Loader'
import Card from './Card'


const Ourevents = () => {
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
  },[])

  useEffect(() => {
    getData();
  }, [test])

  function handleClick() {
    window.scrollTo({
      top: 0,

      behavior: 'auto'
    });
  }


  return (
    <div className='ourevents'>
      <h1>OUR EVENTS</h1>
      <div className='event-content'>
        {
          !data ?
            <Loader/>
            :
            <>
            <Card title={data[0].title} date={data[0].date} contents={data[0].contents} id={data[0].id} image={image[0]}/>
            <Card title={data[1].title} date={data[1].date} contents={data[1].contents} id={data[1].id} image={image[1]}/>
            <Card title={data[2].title} date={data[2].date} contents={data[2].contents} id={data[2].id} image={image[2]}/>
            </>
        }

      </div>
      <Link to='/event'><button type='button' className='event-button' onClick={handleClick}>READ MORE</button></Link>
    </div>
  )
}

export default Ourevents
