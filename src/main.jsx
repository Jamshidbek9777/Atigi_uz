import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Topbar from "./components/topbar.jsx";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { theme } from "./theme/theme.js";
import DetailProduct from "./pages/detail.jsx";

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
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
