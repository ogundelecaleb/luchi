import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import HomeIndex from "./scene/HomeIndex";
import Track from "./scene/Track";
import Company from "./scene/Company";
import Gallery from "./scene/Gallery";
import Menu from "./scene/Menu";
import { Provider } from "react-redux";
import { store } from "./app/store";



function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
        <Route  element={<Home />}>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/track" element={<Track />} />
        <Route path="/company" element={<Company />} />
        <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
