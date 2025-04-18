import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import SearchAmazonProduct from "./Pages/SearchAmazonProduct";
import SearchEbayProduct from "./Pages/SearchEbayProducts";
import CompareProductPrices from "./Pages/CompareProductPrices";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserProfile from "./Pages/UserProfile";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute>
              <SignIn />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search-amazon-product"
          element={
            <ProtectedRoute>
              <SearchAmazonProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search-ebay-product"
          element={
            <ProtectedRoute>
              <SearchEbayProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compare-product-prices"
          element={
            <ProtectedRoute>
              <CompareProductPrices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
