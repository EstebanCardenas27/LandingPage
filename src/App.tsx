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
          <Route index element={<Home />} />    
          <Route path="/reserve" element={<Reserve />} />    
          </Routes>        
      </main>
      <Footer />
    </BrowserRouter>  
    </div>
  )
}

export default App
