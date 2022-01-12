import { Box } from '@mui/material';
import React from 'react';
import './Featuredinfo.css';

const Featuredinfo = () => {
    return (
        <Box>
            <h3 style={{textAlign:"center"}}>Featured Info of Sales</h3>
            <div className="featured p-4">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.4 <i className="fas fa-arrow-down featuredIcon negative"></i>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
              -1.4 <i className="fas fa-arrow-down featuredIcon negative"></i> 
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <i className="fas fa-arrow-up featuredIcon"></i>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
        </Box>
    );
};

export default Featuredinfo;