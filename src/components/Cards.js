import React from 'react'
import Card from './Card'

const Cards = (props) => {
  const Data = props.Data
  return (
    <>
      <div className="row">
      {Data.map((value) => (
        <Card key={value.show.id} score= {value.score} id= {value.show.id} url= {value.show.url} name= {value.show.name} language= {value.show.language}/>
      ))}
      </div>

    </>
  )
}

export default Cards