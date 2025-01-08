import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoriaPage from "./components/historia/historiaPage";
import HomePage from "./components/homePage/HomePage";
import Layout from "./components/layout/Layout";
import NotFound from "./components/not-found/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nossa-historia" element={<HistoriaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;
