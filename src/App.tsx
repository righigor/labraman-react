import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoriaPage from "./components/historia/historiaPage";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not-found/NotFound";
import EquipePage from "./pages/equipe/EquipePage";
import { ScrollToTop } from "./utils/scrollToTop";
import ArtigosPage from "./pages/artigos/ArtigosPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nossa-historia" element={<HistoriaPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/artigos" element={<ArtigosPage />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;
