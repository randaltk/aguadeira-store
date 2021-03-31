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
import EnvioRetornoScreen from "./screens/EnvioRetorno/EnvioRetornoScreen";
import PoliticaDaLojaScreen from "./screens/PoliticaDaLoja/PoliticaDaLojaScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/store" component={StoreScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/blog" component={BlogScreen} />
        <Route path="/contact" component={ContactScreen} />

        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart" component={CartScreen} />

        <Route path="/envios-e-retornos" component={EnvioRetornoScreen} />
        <Route path="/politica-da-loja" component={PoliticaDaLojaScreen} />
      </Switch>
    </Router>
  );
}

export default App;
