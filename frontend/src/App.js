import './App.css';
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
  import "./assets/css/color4.css"
import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider"
import Home from './components/Home';
import Footer from './components/Home';

function App() {
  return (
    <div className="App" style={{backgroundColor: "rgba(245, 223, 219, 0.5)"}}>
      <Header/>
      <Slider/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
