import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import RepairPage from "./pages/RepairPage";
import PricePredictionPage from "./pages/PricePredictionPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="marketplace/:id" element={<ItemDetailPage />} />
          <Route path="repair" element={<RepairPage />} />
          <Route path="price" element={<PricePredictionPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
