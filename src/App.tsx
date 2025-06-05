import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserve from "./pages/Reserve"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      <Navbar />
      <main className="flex-grow">
        {/* <Home /> */}        
          <Routes>            
          <Route path="/LandingPage/" index element={<Home />} />            
          <Route path="/LandingPage/reserve" element={<Reserve />} />    
          </Routes>        
      </main>
      <Footer />
    </BrowserRouter>  
    <div className="hidden">V1.4</div>
    </div>
  )
}

export default App
