import React from 'react';
import { RouterProvider, createHashRouter } from "react-router-dom";

import HomePage from './Component/HomePage';
import ServiceUs from './Component/ServiceUs';
import Contact from './Component/Contact';
import RootLayout from './Component/RootLayout';
import OfferYou from './Component/OfferYou';

const router = createHashRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {index:true , element: <HomePage />},
      {path :"home" , element: <HomePage />},
      {path :"OfferYou" , element: <OfferYou />},
      {path :"service" , element: <ServiceUs />},
      {path :"contact" , element: <Contact />},
      
    ],
  },
]);

function App() {
  return (<>

   <RouterProvider router={router} />
  </>
  );
}

export default App;
