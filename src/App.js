import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import PersonalHomeScreen from './Screens/Personal/HomeScreen/HomeScreen';
import ServiceScreen from './Screens/Personal/Service/ServiceScreen';
import LoginScreen from "./Screens/Personal/Login/LoginScreen.jsx";
import PersonalRegisterScreen from "./Screens/Personal/Register/PersonalRegisterScreen.jsx";
import RegisterScreen from "./Screens/Business/Register/RegisterScreen.jsx";
import NavBar from "./Components/Navbar/Navbar";
import OrderScreen from "./Screens/Personal/Order/OrderScreen";
import BasketScreen from "./Screens/Personal/Basket/BasketScreen";
import FooterBar from "./Components/Footer/FooterBar";
import AccountRegister from "./Screens/Personal/Register/AccountRegister";
import ServicesScreen from "./Screens/Personal/Services/ServicesScreen";
import CategoriesScreen from "./Screens/Personal/Categories/CategoriesScreen";
import MessengerScreen from "./Screens/Personal/Messenger/MessengerScreen";
import BusinessHomeScreen from "./Screens/Business/HomeScreen/HomeScreen";
import BarChart from "./Components/Examples/Chart/BarChart";
import BusinessProduct from './Screens/Business/Services/CreateServices';
import RegisterDetails from "./Screens/Personal/Register/registerDetails";

function App() {
  return (
      <BrowserRouter>

        <div className="grid-container">

          <NavBar />

          <Switch>
            <main className="main">
              <div className="content">
                <Route path="/products/:id" component={ServiceScreen} />
                <Route path="/" exact={true} component={PersonalHomeScreen} />
              </div>

              {/* User Account Creation/Login Section */}
              <div>
                <Route path="/login" component={LoginScreen} />
              </div>
              <div>
                <Route path="/account-type-register" component={AccountRegister} />
              </div>
              <div>
                <Route path="/personal-register" component={PersonalRegisterScreen} />
              </div>
              <div>
                <Route path="/business-register" component={RegisterScreen} />
              </div>
              <div>
                <Route path="/register-details" component={RegisterDetails}/>
              </div>
              {/* End of User Account Creation/Login Section */}

              {/* Personal Account Components */}
              <div>
                <Route path="/orders" component={OrderScreen} />
              </div>
              <div>
                <Route path="/basket" component={BasketScreen} />
              </div>
              <div>
                <Route path="/services" component={ServicesScreen} />
              </div>
              <div>
                <Route path="/categories" component={CategoriesScreen} />
              </div>
              <div>
                <Route path="/messenger" component={MessengerScreen} />
              </div>
              {/* End of Personal Account Components */}

              {/* Business Account Components */}
              <div>
                <Route path="/business" component={BusinessHomeScreen}/>
              </div>
              <div>
                <Route path="/barchart" component={BarChart}/>
              </div>
              <div>
                <Route path="/bsn/products" component={BusinessProduct} />
              </div>
              {/* End of Business Account Components */}
            </main>
          </Switch>

          <FooterBar />

        </div>
      </BrowserRouter>
  );
}

export default App;
