import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Reviews from "./Components/Reviews/Reviews";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Products />
              <Reviews />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;