import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
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
