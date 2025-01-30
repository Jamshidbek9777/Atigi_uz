import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme/theme.js";

import Navbar from "./components/navbar.jsx";
import Topbar from "./components/topbar.jsx";
import DetailProduct from "./pages/detail.jsx";
import Cart from "./pages/cart.jsx";
import Contact from "./pages/contact.jsx";
import Login from "./pages/login.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Root = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <Topbar />
            <Navbar />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/detail" element={<DetailProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
