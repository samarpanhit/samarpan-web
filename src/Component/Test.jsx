import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Test = () => {
    const [data, setData] = useState()
    const url = 'https://script.google.com/macros/s/AKfycbzDoAKssNY1qVOIM262kKP0q30Jy9x0J1vOnW9So8Xvvas6hVVDmg36hIZBzoaVFnrL5w/exec'
    async function getData() {
        var fdata = await fetch(url);
        fdata = await fdata.json();
        setData(fdata.data);
    }
    useEffect(() => {
        getData();
        console.log(data[0].title);
    }, [])
  return (
    <div>
            Test {data[0].title}
    </div>
  )
}

export default Test