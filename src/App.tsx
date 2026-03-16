import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from "framer-motion";
import PageTransition from './Anim/PageTransition.tsx';

import './css/App.css'

import Nav from './Elements/Nav.tsx';
import MainPage from './Pages/MainPage.tsx';
import About from './Pages/About.tsx';
import MyWorkPage from './Pages/MyWorkPage.tsx';
import Footer from './Elements/Footer.tsx';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <MainPage />
              <footer>
                <Footer />
              </footer>
            </PageTransition>
          }
        />
        <Route
          path="/About"
          element={
            <PageTransition>
              <About />
              <footer>
                <Footer />
              </footer>
            </PageTransition>
          }
        />
        <Route
          path="/MyWork"
          element={
            <PageTransition>
              <MyWorkPage />
              <footer>
                <Footer />
              </footer>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
