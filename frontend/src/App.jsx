import Carousel from "./components/Carousel"
import Navbar from "./components/NavBar"
import TopNavBar from "./components/TopNavBar"
import Body from "./components/body"
import Stepper from "./components/Stepper"
import PaymentPage from "./components/payment"
import Footer from './components/Footer'
import ReviewPage from './components/Review/ReviewPage'
import Card from './components/Card'
import { Outlet } from "react-router-dom"

// import ProductCard from "./components/ProductCard"
// import ProductCardSlider from "./components/productCardSlider"
// import SecondProductCard from "./components/secondProductCard"
export default function App() {
  return (
   
<div className="">
  
<TopNavBar/>
<Navbar/>

<Outlet/>
<Footer/>
</div>

  )
}