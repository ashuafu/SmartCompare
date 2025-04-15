import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import SearchAmazonProduct from "./Pages/SearchAmazonProduct";
import SearchEbayProduct from "./Pages/SearchEbayProducts";
import CompareProductPrices from "./Pages/CompareProductPrices";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search-amazon-product" element={<SearchAmazonProduct />} />
        <Route path="/search-ebay-product" element={<SearchEbayProduct />} />
        <Route path="/compare-product-prices" element={<CompareProductPrices />} />
      </Routes>
    </Router>
  );
}

export default App;
