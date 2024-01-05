import Carousel from "./components/Carousel"
import Navbar from "./components/NavBar"
import TopNavBar from "./components/TopNavBar"
import Body from "./components/body"
export default function App() {
  return (
   
<div className="">
  
<TopNavBar/>
<Navbar/>
<Body/>
<div className="flex items-center justify-center py-4 mt-40 text-5xl"> 
  <h1>Rooms</h1>
  </div>
<Carousel/>
</div>

  )
}