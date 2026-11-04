import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Products } from "./pages/Products.tsx";
import { ProductDetail } from "./pages/ProductDetail.tsx";
import { Guides } from "./pages/Guides.tsx";
import { GuideDetail } from "./pages/GuideDetail.tsx";
import { About } from "./pages/About.tsx";
import { Contact } from "./pages/Contact.tsx";
import { NotFound } from "./pages/NotFound.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
