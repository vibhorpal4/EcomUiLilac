import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/HOC/Footer";
import Header from "./components/HOC/Header";
import NavBar from "./components/HOC/NavBar";
import HomePage from "./pages/HomePage";
import { GlobalStyle, theme } from "./utils/theme";
import SubHeader from "./components/HOC/SubHeader";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SubHeader />
        <Header />
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
