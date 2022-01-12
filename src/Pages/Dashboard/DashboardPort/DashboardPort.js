import React from "react";
import useAuth from "../../../Hooks/useAuth";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";


const DashBoardPort = () => {
  const { user,admin } = useAuth();
  return (
    <div>
      <h2 className="logo p-5 text-bold reviews">Hi {user.displayName}   ---   ---   --- Welcome To Dashboard</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
          {admin && (
              <div>
               
               <AdminDashboard/>
              </div>
            )
          }
          </div>
          
          <div className="col-lg-4">
            <img
            style={{width: '60%', marginTop: '8%',marginLeft:"10%"}}
              className="img-fluid"
              src="https://i.ibb.co/znT8rGD/login.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPort;