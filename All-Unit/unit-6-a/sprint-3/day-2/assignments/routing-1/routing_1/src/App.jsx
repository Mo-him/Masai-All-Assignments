import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AllProducts from './document/AllProducts';
import ProductDetail from './document/ProductDetail';
import Home from './document/Home';
import Product from './document/Product';
import NotFound from './document/NotFound';
import {
  ChakraProvider,
  
  theme,
} from '@chakra-ui/react';
import NavbarWrapper from './document/Navbar'
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavbarWrapper />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AllProducts' element={<AllProducts />}></Route>
        {/* <Route path='/ProductDetails' element={<ProductDetail />}></Route> */}
        <Route path='/product/:id' element={<Product />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
