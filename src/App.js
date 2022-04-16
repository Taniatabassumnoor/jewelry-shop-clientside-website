import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import About from "./Pages/AboutUsPage/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Demo from "./Pages/ExplorePage/Demo";
import ExploreHome from "./Pages/ExplorePage/ExploreHome/ExploreHome";

import Home from "./Pages/HomePage/Home/Home";
import Services from "./Pages/HomePage/Services/Services";
import Login from "./Pages/Login/Login/Login/Login";
import Register from "./Pages/Login/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

import PurchaseProduct from "./Pages/ProductDetails/PurchaseProduct";

import Footer from "./Pages/Shared/Footer/Footer";
import Headers from "./Pages/Shared/Headers/Headers";
import OurBranchHome from "./Pages/OurBranch/OurBranchHome";
import ExploreBanner from "./Pages/ExplorePage/ExploreBanner";
import BranchBanner from "./Pages/OurBranch/BranchBanner";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryBanner from "./Pages/Gallery/GalleryBanner";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Headers />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/home">
              <Headers />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/about">
              <Headers />
              <About />
              <Footer />
            </Route>
            <Route exact path="/gallery">
              <Headers />
              <GalleryBanner />
              <Gallery />
              <Footer />
            </Route>
            <Route exact path="/ourmap">
              <Headers />
              <BranchBanner />
              <OurBranchHome />
              <Footer />
            </Route>
            {/* <Route exact path="/contact">
            <Headers />
            <Contact />
            <Footer />
          </Route> */}
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/products/:id">
              <Headers />
              <PurchaseProduct />
              <Footer />
            </PrivateRoute>
            <Route path="/login">
              <Headers />
              <Login />
              <Footer />
            </Route>
            <Route path="/demo">
              <Demo></Demo>
            </Route>
            <Route path="/explore">
              <Headers />
              <ExploreHome />
              <Footer />
            </Route>
            <Route path="/register">
              <Headers />
              <Register />
              <Footer />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* <Route exact path="*">
            <NotFound />
          </Route> */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
