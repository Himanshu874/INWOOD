import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header.js"
import Home from "./Components/Home/Home.js";
import Cate from "./Components/Cate/Cate.js";
import Product from "./Components/Product/Product.js";
import Footer from "./Components/Footer/Footer.js";
import Subs from "./Components/Subs/Subs.js";
import Exp from "./Components/Exp/Exp.js";
import Test from "./Components/Test/Test.js";
import Creation from "./Components/Creation/Creation.js";
import Package from "./Components/Package/Package.js";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Home />
        <Cate />
        <Product />
        <Package />
        <Creation />
        <Exp />
        <Test />
        <Subs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
