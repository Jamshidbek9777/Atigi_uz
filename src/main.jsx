import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";
import "antd/dist/reset.css";

import { theme } from "./theme/theme.js";
import Navbar from "./components/navbar.jsx";
import Topbar from "./components/topbar.jsx";
import DetailProduct from "./pages/detail.jsx";
import Cart from "./pages/cart.jsx";

const Root = () => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/detail" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
