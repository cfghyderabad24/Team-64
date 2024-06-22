import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../Header/Header';

function Rootlayout() {
  
  return (
    <div className="rootlayout" >
      <Header />
      <div style={{ minHeight: "60vh" }}>
          <Outlet />
      </div>
    </div>
  );
}

export default Rootlayout;
