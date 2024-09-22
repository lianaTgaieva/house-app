import "./assets/css/syile.css"; 
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import HomeDetail from "./pages/HomeDetail";
import KvarDetail from "./pages/KvarDetail";
import CategoriesPage from "./pages/CategoriesPage";
import CategoriesPageKvar from "./pages/CategoriesPageKvar";
import Contact from "./pages/Contact";
import Contactps from "./pages/Contactps";
import Email from "./pages/Email";
import { Routes, Route } from "react-router-dom";
import PostList from "./component/PostList"; 

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostList />} /> 
          <Route path="/cate" element={<CategoriesPage />} />
          <Route path="/cate/:id" element={<HomeDetail />} />
          <Route path="/cateKvar" element={<CategoriesPageKvar />} />
          <Route path="/cateKvar/:id" element={<KvarDetail />} />
          <Route path="/sps" element={<Contactps />} />
          <Route path="/email" element={<Email />} />
          <Route path="/cont" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;