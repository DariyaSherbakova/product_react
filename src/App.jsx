import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ContctPage from './Pages/ContactPage';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/Header';


function App() {
  return (
    
    <div className='App' >
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<HomePage /> }/>
      <Route path='/products' element= {<HomePage />} />
      <Route path='/products/:id' element= {<ProductDetailsPage />} />
      <Route path='/contact' element= {<ContctPage />} />
      <Route path='/*' element= {<NotFoundPage />} />




    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
