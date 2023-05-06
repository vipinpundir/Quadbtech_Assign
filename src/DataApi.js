import React,{useEffect, useState} from 'react'
import Cards from './components/Cards'

const DataApi = () => {
  const [Data, SetData] = useState([])

  async function  GetData() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const Data =  await response.json()
    SetData(Data)
  }
  useEffect(()=>{
    GetData()
  },[]);
  
  return (
    <div className='container' >
    <Cards Data = {Data} />
    </div>
  )
}

export default DataApi