import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

// Screens
import HomeScreen from "./screens/Home/HomeScreen";
import StoreScreen from "./screens/Store/StoreScreen";
import AboutScreen from "./screens/About/AboutScreen";
import BlogScreen from "./screens/Blog/BlogScreen";
import ContactScreen from "./screens/Contact/ContactScreen";
import ProductScreen from "./screens/Product/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/store" component={StoreScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/blog" component={BlogScreen} />
        <Route exact path="/contact" component={ContactScreen} />

        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </Router>
  );
}

export default App;
