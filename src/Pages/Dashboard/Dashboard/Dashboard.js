import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
// import useFirebase from '../../../../Hooks/useFirebase';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useFirebase from '../../../Hooks/useFirebase';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Reviews from '../../HomePage/Reviews/Reviews';
import ExploreHome from '../../ExplorePage/ExploreHome/ExploreHome';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const {admin} = useFirebase()
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to={`${url}/explore`}><Button color="inherit">Dashboard</Button></Link>
            <Link to="/explore"><Button color="inherit">Explore</Button></Link>
            <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
            <Link to={`${url}/myOrder`}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link>
            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            <Link to={`${url}/addProduct`}><Button color="inherit">Add a Product</Button></Link>
            <Link to={`${url}/manageAllOrder`}><Button color="inherit">Manage All Orders</Button></Link>
            <Link to={`${url}/manageProduct`}><Button color="inherit">Manage Product</Button></Link>
                </Box>
            }
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
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
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                
                <Switch>
        {/* <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route> */}
        <Route exact path={`${path}/explore`}>
          <ExploreHome></ExploreHome>
        </Route>
        <Route exact path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route exact path={`${path}/myOrder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route exact path={`${path}/reviews`}>
         <Reviews></Reviews>
        </Route>
        
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${url}/addProduct`}>
            <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${url}/manageAllOrder`}>
            <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${url}/manageProduct`}>
            <ManageProduct></ManageProduct>
        </AdminRoute>
       
      </Switch>
                
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
