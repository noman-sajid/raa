import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import CustomOrderDetails from "./component/CustomOrder/CustomOrderDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import MyCustomOrders from "./component/CustomOrder/MyCustomOrder";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import CustomOrderList from "./component/Admin/CustomOrderList";
import NewProduct from "./component/Admin/NewProduct";
import NewCustomOrder from "./component/Admin/NewCustomOrder";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import TeamUsersList from "./component/Admin/TeamList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import Pricing from "./component/layout/Pricing/Pricingplan.js";
import NotFound from "./component/layout/Not Found/NotFound";
import Services from "./component/layout/Services/Services";
import Service1 from "./component/layout/Services/Service1";
import Service2 from "./component/layout/Services/Service2";
import Service3 from "./component/layout/Services/Service3";
import Service4 from "./component/layout/Services/Service4";
import CustomOrder from "./component/layout/Custom Order/Customorder";
import NewProject from "./component/Admin/NewProject";
import ProjectList from "./component/Admin/ProjectList.js";
import Projects from "./component/Project/Projects";
import CoDetails from "./component/layout/Custom Order/CoDetails";
import ScrollToTop from './component/ScrollToTop';
import PendingCustomOrders from "./component/Admin/PendigCustomOrders";
import ConfirmedCustomOrders from "./component/Admin/ConfirmedCustomOrders";
import TeamUsers from "./component/Admin/TeamUsers";
import AssignedCustomOrders from "./component/Admin/AssignedCustomOrder";
import AssignedToCustomOrders from "./component/Admin/MyAssignedCustomOrders";
// import userDash from "./component/cdash/Cdashboard.js"
import MyPendingCustomOrder from "./component/Admin/MyPendingCustomOrders.js";
import UserDashboard from "./component/cdash/Cdashboard.js"


function App() {

  //fetch for contact-form submission
  // useEffect(()=>{
  //   fetch("/api")
  //   .then((res)=>res.json())
  //   .then((data)=>{console.log(data)})
  // }, [])
  
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <ScrollToTop />
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/custom-order-details/:id" component={CustomOrderDetails} />
        <Route exact path="/userdash" component={UserDashboard}/>
        {/* <Route exact path="/user/pending" component={myPendingCustomOrders}/> */}

        <Route exact path="/products" component={Products}/>
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <Route exact path="/pricing" component={Pricing} />

        <Route exact path="/services" component={Services}/>

        <Route exact path="/embroidery-digitizing" component={Service1}/>

        <Route exact path="/embroidery-patches" component={Service2}/>

        <Route exact path="/vector-art-services" component={Service3}/>

        <Route exact path="/pu-labels" component={Service4}/>

        <Route exact path="/custom-order" component= {CustomOrder} />

        <Route exact path="/codetails" component= {CoDetails} />


        <Route exact path="/projects" component={Projects} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />
        <ProtectedRoute exact path="/my-custom-orders" component={MyCustomOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          isTeam={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          isTeam={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/custom-orders-list"
          isAdmin={true}
          isTeam={true}
          component={CustomOrderList}
        />
        <ProtectedRoute
          exact
          path="/admin/pending-custom-orders"
          isAdmin={true}
          isTeam={true}
          component={PendingCustomOrders}
        />
        <ProtectedRoute
          exact
          path="/admin/assigned-custom-orders"
          isAdmin={true}
          isTeam={true}
          component={AssignedCustomOrders}
        />
        <ProtectedRoute
          exact
          path="/user/pending-custom-orders"
          isAdmin={true}
          isTeam={true}
          component={MyPendingCustomOrder}
        />
        <ProtectedRoute
          exact
          path="/user/pending-custom-orders"
          isAdmin={true}
          isTeam={true}
          component={AssignedToCustomOrders}
        />
        <ProtectedRoute
          exact
          path="/admin/confirmed-custom-orders"
          isAdmin={true}
          isTeam={true}
          component={ConfirmedCustomOrders}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          isTeam={true}
          component={NewProduct}
        />
        <ProtectedRoute
          exact
          path="/new-custom-order"
       
          component={NewCustomOrder}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          isTeam={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/orders"
          isTeam={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          isTeam={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
        <ProtectedRoute
          exact
          path="/admin/users/team"
          isAdmin={true}
          component={TeamUsersList}
        />
        <ProtectedRoute
          exact
          path="/admin/users/team-list"
          isAdmin={true}
          component={TeamUsers}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          isTeam={true}
          component={ProductReviews}
        />

      <ProtectedRoute
          exact
          path="/admin/projects"
          isTeam={true}
          isAdmin={true}
          component={ProjectList}
        />

      <ProtectedRoute
          exact
          path="/admin/project"
          isTeam={true}
          isAdmin={true}
          component={NewProject}
        />

      <ProtectedRoute
          exact
          path="/admin/projects"
          isTeam={true}
          isAdmin={true}
          component={ProjectList}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
