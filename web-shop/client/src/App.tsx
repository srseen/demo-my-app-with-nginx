import { ThemeProvider } from "@/components/ui/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductList from "./pages/ProductPage";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
