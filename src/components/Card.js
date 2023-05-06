import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="col-sm-4 my-4 ">
        <div className="card bg-body-tertiary">
          <div className="card-body">
            <h2>Name: {props.name} </h2>
            <p className='card-text'>Id: {props.id} </p>
            <p className='card-text'>Score: {props.score} </p>
            <p className='card-text'>Language: {props.language} </p>
            <button type="button" className="btn btn-secondary">
               <a style={{color: 'white' , textDecoration: 'none'}} target='blank'  href={props.url}>More Details</a>
            </button>

          </div>
        </div>
      </div>
      <br />

    </>
  )
}

export default Card