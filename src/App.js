import { Reviews } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import About from './Pages/AboutUsPage/About/About';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/ExplorePage/Explore/Explore';
import ExploreHome from './Pages/ExplorePage/ExploreHome/ExploreHome';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/PurchasePage/Purchase/Purchase';
import Headers from './Pages/Shared/Headers/Headers';
import Order from './Pages/Shared/Order/Order';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Headers></Headers>
      <Switch>
      <Route exact path="/"><Home></Home></Route>
        <Route exact path="/home"><Home></Home></Route>
        
        <Route  path="/login"><Login></Login></Route>
        <Route  path="/review"><Reviews></Reviews></Route>
        <Route  path="/register"><Register></Register></Route>
        <Route  path="/explore"><ExploreHome></ExploreHome></Route>
        <Route  path="/about"><About></About></Route>
        <Route  path="/order/:orderId"><Order></Order></Route>
        
        <PrivateRoute  path="/purchase"><Purchase></Purchase></PrivateRoute>
        <PrivateRoute  path="/dashboard"><Dashboard></Dashboard></PrivateRoute>
        
      </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
