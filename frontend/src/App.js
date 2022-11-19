import "./assets/css/color4.css";
  import "./assets/css/font-awesome.css";
  import "./assets/css/themify.css"
  // <!--Slick slider css-->
  import "./assets/css/slick.css"
  import "./assets/css/slick-theme.css"
  // <!--Animate css-->
  import "./assets/css/animate.css"
  // <!-- Bootstrap css -->
  import "./assets/css/bootstrap.css"
  // <!-- Theme css -->
  import './App.css';

  import "./assets/css/color4.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider"
import Home from './components/Home';
import Searcher from "./components/layout/Searcher";
import Footer from './components/Home';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (
    <BrowserRouter>
          <div className="">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
     {/* <Route  path="/search/:keyword" element={<Home/>} /> */}
     <Route path="/search/:keyword" element={<Searcher/>} />
     < Route exact path = "/product/:id" element={<ProductDetails/>}  />
        </Routes>
        {/* <Footer /> */}
        </div>
      </BrowserRouter>
  );
}

export default App;
