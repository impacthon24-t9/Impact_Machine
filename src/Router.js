import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/home";

function Router() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
