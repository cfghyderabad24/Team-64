import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import DonateForChild from './DonateForChild';
import DonateProducts from './DonateProducts';
import BuyProducts from './BuyProducts';
import { Route ,Routes} from 'react-router-dom';
function DonorsMainPage() {
  return (
    <div className="container ">
    <div className="text-center mb-4">
      <h1>Welcome to Donor's Hub</h1>
      <p>Make a difference by buying, donating products or helping a child in need.</p>
    </div>
    <div className="row text-center text-dark">
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <button className="btn btn-primary btn-lg w-100">
            <Link to="/buy-products" className='p-4 text-dark'>Buy Products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <button className="btn btn-success btn-lg w-100">
            <Link to="/donate-products" className='p-4 text-dark'>Donate Products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <button className="btn btn-warning btn-lg w-100">
            <Link to="/donate-for-child" className='p-4 text-dark'>Donate For A Child</Link>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Routes>
        <Route path="/donate-for-child" element={<DonateForChild/>} exact/>
        <Route path="/donate-products" element={<DonateProducts/>} exact/>
        <Route path="/buy-products" element={<BuyProducts/>} exact/>
        </Routes>
    </div>
  );
 
}

export default DonorsMainPage;
