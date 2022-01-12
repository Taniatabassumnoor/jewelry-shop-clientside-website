// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const drawerWidth = 240;

// function Dashboard(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
//       <Link to={`${url}/makeAdmin`}><Button color="inherit">Dashboard</Button></Link>
// <Link to="/explore"><Button color="inherit">Explore</Button></Link>
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
      
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//                    <Switch>
//              <Route exact path={`${path}`}>
//                <DashboardPort />
//              </Route>

//              <Route path={`${path}/makeAdmin`}>
//                <MakeAdmin />
//              </Route>
             
//            </Switch>
//          </Box>
//         <Typography paragraph>

//         </Typography>
        
//       </Box>
//     </Box>
//   );
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Dashboard;






























import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import DashboardPort from "../DashboardPort/DashboardPort";
import Pay from "../Pay/Pay";
import MyOrder from "../MyOrder/MyOrder";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from "../../../Hooks/useAuth";
import ManageProducts from "../ManageProducts/ManageProducts";

import Reviews from "../../HomePage/Reviews/Reviews";
import AdminAnalytics from "./AdminAnalytics/AdminAnalytics";
import Featuredinfo from "./Featuredinfo/Featuredinfo";
import UserAnalytics from "../DashboardPort/UserAnalytics/UserAnalytics";
const drawerWidth = 260;
function ResponsiveDrawer(props) {
    const { logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        {/* for user */}
        {!admin && (
          <div>
            <Link className="btn mb-3" to={`${url}/pay`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fab fa-paypal me-2"></i> Make Payment
              </Button>
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/myOrders`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-box  me-2"></i>My Orders
              </Button>
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/userAnalytics`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
              <i style={{ marginRight: "5px",fontSize: "20px"}} class="fas fa-chart-line"></i>Purchased Analytics
              </Button>
              <br />
            </Link>
            
            <Link className="btn  mb-3" to={`${url}/reviews`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                {" "}
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-address-book me-2"></i>Review
              </Button>{" "}
              <br />
            </Link>
          </div>
        )}
        {/* for admin */}
        {admin && (
          <div>
            
            <Link className="btn  mb-3" to='/dashboard'>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
              <i style={{ marginRight: "5px",fontSize: "20px"}}  className="fas fa-home"></i>Admin Home
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn  mb-3" to={`${url}/addAProducts`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-plus-circle me-1"></i>Add a product
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/makeAdmin`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-user-cog me-1"></i> Make Admin
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/analytics`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
              <i style={{ marginRight: "5px",fontSize: "20px"}} class="fas fa-chart-line"></i>Admin Analytics
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/featuredInfo`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
              <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-info-circle"></i>Featured Info
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn mb-3" to={`${url}/manageAllOrders`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fas fa-arrows-alt me-1"></i> Manage All Order
              </Button>{" "}
              <br />
            </Link>
            <Link className="btn  mb-3" to={`${url}/manageProducts`}>
              <Button style={{color:"#000",fontSize:"15px",fontWeight:"400"}} color="inherit">
                <i style={{ marginRight: "5px",fontSize: "20px"}} className="fab fa-artstation me-1"></i> Manage Products
              </Button>{" "}
              <br />
            </Link>
          </div>
        )}
        <button onClick={logout} className="ms-3 mt-5 btn btn-dark">
          Logout
        </button>
      </div>
    );
    const container =
      window !== undefined ? () => window().document.body : undefined;
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              style={{ mr: 2, color: "white", display: { sm: "none" } }}
            >
              {" "}
              <i className="fas fa-bars"></i>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Link className="btn text-light" to="/home">
              Home
            </Link>
          </Toolbar>
        </AppBar>
        <Box
          componet="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={`${path}`}>
              <DashboardPort />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/userAnalytics`}>
             <UserAnalytics/>
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews/>
            </Route>
            <AdminRoute path={`${path}/addAProducts`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/featuredInfo`}>
              <Featuredinfo/>
            </AdminRoute>
            <AdminRoute path={`${path}/analytics`}>
              <AdminAnalytics/>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrder />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts />
            </AdminRoute>
          </Switch>
        </Box>
      </Box>
    );
  }
  ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
  };
  export default ResponsiveDrawer;























// // // import * as React from 'react';
// // // import PropTypes from 'prop-types';
// // // import AppBar from '@mui/material/AppBar';
// // // import Box from '@mui/material/Box';
// // // import CssBaseline from '@mui/material/CssBaseline';
// // // import Divider from '@mui/material/Divider';
// // // import Drawer from '@mui/material/Drawer';
// // // import IconButton from '@mui/material/IconButton';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import Toolbar from '@mui/material/Toolbar';
// // // import Typography from '@mui/material/Typography';

// // // import {
// // //     BrowserRouter as Router,
// // //     Switch,
// // //     Route,
// // //     Link,
// // //     useParams,
// // //     useRouteMatch
// // // } from "react-router-dom";
// // // import { Button, Grid } from '@mui/material';
// // // // import DashboardHome from '../DashboardHome/DashboardHome';
// // // import MakeAdmin from '../MakeAdmin/MakeAdmin';
// // // import AddProduct from '../AddProduct/AddProduct';
// // // // import useFirebase from '../../../../Hooks/useFirebase';
// // // import AdminRoute from '../../Login/AdminRoute/AdminRoute';
// // // import useFirebase from '../../../Hooks/useFirebase';
// // // import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
// // // import ManageProduct from '../ManageProduct/ManageProduct';
// // // // import Pay from '../Pay/Pay';
// // // import MyOrder from '../MyOrder/MyOrder';
// // // import Reviews from '../../HomePage/Reviews/Reviews';
// // // import ExploreHome from '../../ExplorePage/ExploreHome/ExploreHome';
// // // import UserDashboard from '../UserDashboard/UserDashboard';
// // // import useAuth from '../../../Hooks/useAuth';

// // // const drawerWidth = 240;

// // // function Dashboard(props) {
// // //     const { window } = props;
// // //     const [mobileOpen, setMobileOpen] = React.useState(false);

// // //     let { path, url } = useRouteMatch();
// // //     const {admin} = useAuth();

// // //     const handleDrawerToggle = () => {
// // //         setMobileOpen(!mobileOpen);
// // //     };

// // //     const drawer = (
// // //         <div>
// // //             <Toolbar />
// // //             <Divider />
// // //             <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
// // //             <Link to="/explore"><Button color="inherit">Explore</Button></Link>
// // //             {/* <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link> */}
// // //             <Link to={`${url}/myOrder`}><Button color="inherit">My Orders</Button></Link>
// // //             <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link>
// // //             {
// // //                 admin && <Box>
// // //                     <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
// // //                     <Link to={`${url}/addProduct`}><Button color="inherit">Add a Product</Button></Link>
// // //                     <Link to={`${url}/manageAllOrder`}><Button color="inherit">Manage All Orders</Button></Link>
// // //                     <Link to={`${url}/manageProduct`}><Button color="inherit">Manage Product</Button></Link>
// // //                 </Box>
// // //             }
            
// // //         </div>
// // //     );

// // //     const container = window !== undefined ? () => window().document.body : undefined;

// // //     return (
// // //         <Box sx={{ display: 'flex' }}>
// // //             <CssBaseline />
// // //             <AppBar
// // //                 position="fixed"
// // //                 sx={{
// // //                     width: { sm: `calc(100% - ${drawerWidth}px)` },
// // //                     ml: { sm: `${drawerWidth}px` },
// // //                 }}
// // //             >
// // //                 <Toolbar>
// // //                     <IconButton
// // //                         color="inherit"
// // //                         aria-label="open drawer"
// // //                         edge="start"
// // //                         onClick={handleDrawerToggle}
// // //                         sx={{ mr: 2, display: { sm: 'none' } }}
// // //                     >
// // //                         <MenuIcon />
// // //                     </IconButton>
// // //                     <Typography variant="h6" noWrap component="div">
// // //                         Dashboard
// // //                     </Typography>
// // //                 </Toolbar>
// // //             </AppBar>
// // //             <Box
// // //                 component="nav"
// // //                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
// // //                 aria-label="mailbox folders"
// // //             >
// // //                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
// // //                 <Drawer
// // //                     container={container}
// // //                     variant="temporary"
// // //                     open={mobileOpen}
// // //                     onClose={handleDrawerToggle}
// // //                     ModalProps={{
// // //                         keepMounted: true, // Better open performance on mobile.
// // //                     }}
// // //                     sx={{
// // //                         display: { xs: 'block', sm: 'none' },
// // //                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
// // //                     }}
// // //                 >
// // //                     {drawer}
// // //                 </Drawer>
// // //                 <Drawer
// // //                     variant="permanent"
// // //                     sx={{
// // //                         display: { xs: 'none', sm: 'block' },
// // //                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
// // //                     }}
// // //                     open
// // //                 >
// // //                     {drawer}
// // //                 </Drawer>

// // //             </Box>
// // //             <Box
// // //                 component="main"
// // //                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
// // //             >
// // //                 <Toolbar />

// // //                 <Switch>
// // //                     {/* <Route exact path={path}>
// // //           <DashboardHome></DashboardHome>
// // //         </Route> */}
// // //                     <Route exact path={`${path}/explore`}>
// // //                         <ExploreHome></ExploreHome>
// // //                     </Route>
// // //                     {/* <Route exact path={`${path}/pay/:purchaseId`}>
// // //                         <Pay></Pay>
// // //                     </Route> */}
// // //                     <Route exact path={`${path}/myOrder`}>
// // //                         <MyOrder></MyOrder>
// // //                     </Route>
// // //                     <Route exact path={`${path}/reviews`}>
// // //                         <Reviews></Reviews>
// // //                     </Route>

// // //                     <AdminRoute path={`${path}/makeAdmin`}>
// // //                         <MakeAdmin></MakeAdmin>
// // //                     </AdminRoute>
// // //                     <AdminRoute path={`${url}/addProduct`}>
// // //                         <AddProduct></AddProduct>
// // //                     </AdminRoute>
// // //                     <AdminRoute path={`${url}/manageAllOrder`}>
// // //                         <ManageAllOrder></ManageAllOrder>
// // //                     </AdminRoute>
// // //                     <AdminRoute path={`${url}/manageProduct`}>
// // //                         <ManageProduct></ManageProduct>
// // //                     </AdminRoute>

// // //                 </Switch>
// // //                 {/* <Grid container spacing={2}>
// // //                     <Grid item xs={12} md={12}>
// // //                      <UserDashboard></UserDashboard>
// // //                     </Grid>
// // //                 </Grid> */}


// // //             </Box>
// // //         </Box>
// // //     );
// // // }

// // // Dashboard.propTypes = {
// // //     /**
// // //      * Injected by the documentation to work in an iframe.
// // //      * You won't need it on your project.
// // //      */
// // //     window: PropTypes.func,
// // // };

// // // export default Dashboard;
