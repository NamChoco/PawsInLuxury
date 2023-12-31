import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./component/navbar/navbar";
import Footer from "./component/footer/footer"
import SlideImg from "./component/slide-img/slideImg";
import './App.css';

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/slide" element={<SlideImg />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
