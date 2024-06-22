import { Button } from 'bootstrap'
import React from 'react'

function DonorsMainPage() {

  return (
    <div>
        <div className='row'>
        <div className='column col-1 card'>
        <button className="btn ">Buy Products</button>
        </div>
        <div className='column col-1 card'>
        <button className="btn ">Donate Products</button>
        </div>
        <div className='column col-1 card'>
        <button className="btn ">Donate For A Child</button>
        </div>
        </div>
    </div>
  )
}

export default DonorsMainPage