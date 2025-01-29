import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css';
import Footer from './component/Footer';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import ProductPage from './component/ProductPage'; // Assuming this component exists

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Use element prop instead of component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
