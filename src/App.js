import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import MarketPlace from "./pages/MarketPlace";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="marketplace" element={<MarketPlace />}></Route>
            <Route path="/details/:id" element={<DetailsPage/>}></Route>
            <Route path="/test" element={<TestPage/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
