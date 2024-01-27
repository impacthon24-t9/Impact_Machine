import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/home";
import { Layout } from "./components/common/layout";
import { Payment } from "./pages/payment";
import { Photo } from "./pages/photo";
import { SelectImage } from "./pages/selecImage";
import { Frame } from "./pages/frame";
import { Download } from "./pages/download";

function Router() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/callback" element={<Photo />} />
          <Route path="/selectimage" element={<SelectImage />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/download" element={<Download />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
