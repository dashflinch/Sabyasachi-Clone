import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'
import Sabyasachi_At_Harrods from './Components/Sabyasachi_At_Harrods';
import Years_Of_Sabyasachi from './Components/Years_Of_Sabyasachi';
import Calcutta_Summer_Feast from './Components/Calcutta_Summer_Feast';
import SabysachiXBergdorf from './Components/SabysachiXBergdorf';
import High_Jewellery from './Components/High_Jewellery';
import Bridal_Couture_2025 from './Components/Bridal_Couture_2025';
import Curiosity_Art_Antiquity from './Components/Curiosity_Art_Antiquity';
import Accessories from './Components/Accessories';
import Weddings from './Components/Weddings';
import Art_Of_Retail from './Components/Art_Of_Retail';
import Love_Wanderlust_Curiosity from './Components/Love_Wanderlust_Curiosity';
import MensWear from './Components/MensWear';
import WomensWear from './Components/WomensWear';
import Fine_Jewellery from './Components/Fine_Jewellery';


    const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <h1>Page Not Found</h1>
  },
  {
    path: "/sabyasachi_harrods",
    element: (
      <>
        <Sabyasachi_At_Harrods />
        <Footer/>
      </>
    ),
  },
  {
    path: "/25_years_of_sabyasachi",
    element: (
      <>
        <Years_Of_Sabyasachi />
        <Footer/>
      </>
    ),
  },
  {
    path: "/calcutta_summer_feast",
    element: (
      <>
        <Calcutta_Summer_Feast />
        <Footer/>
      </>
    ),
  },
  {
    path: "/sabyasachi_X_bergdorfgoodman",
    element: (
      <>
        <SabysachiXBergdorf />
        <Footer/>
      </>
    ),
  },
  {
    path: "/high_jewellery",
    element: (
      <>
        <High_Jewellery />
        <Footer/>
      </>
    ),
  },
  {
    path: "/bridal_couture_2025",
    element: (
      <>
        <Bridal_Couture_2025 />
        <Footer/>
      </>
    ),
  },
  {
    path: "/curiosity_art_antiquity",
    element: (
      <>
        <Curiosity_Art_Antiquity />
        <Footer/>
      </>
    ),
  },
  {
    path: "/accessories",
    element: (
      <>
        <Accessories />
        <Footer/>
      </>
    ),
  },
  {
    path: "/weddings",
    element: (
      <>
        <Weddings/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/love_wanderlust_curiosity",
    element: (
      <>
        <Love_Wanderlust_Curiosity/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/art_of_retail",
    element: (
      <>
        <Art_Of_Retail/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/menswear",
    element: (
      <>
        <MensWear/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/womenswear",
    element: (
      <>
        <WomensWear/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/fine_jewellery",
    element: (
      <>
        <Fine_Jewellery />
        <Footer/>
      </>
    ),
  },
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
