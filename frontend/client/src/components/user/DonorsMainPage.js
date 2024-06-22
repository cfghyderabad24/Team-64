import { Button } from 'bootstrap'
import React from 'react'

function DonorsMainPage() {
  return (
    <div>
        <div className='row'>
        <div className='column col-1 card'>
        <Button className="btn ">Buy Products</Button>
        </div>
        <div className='column col-1 card'>
        <Button className="btn ">Donate Products</Button>
        </div>
        <div className='column col-1 card'>
        <Button className="btn ">Donate For A Child</Button>
        </div>
        </div>
    </div>
  )
}

export default DonorsMainPage