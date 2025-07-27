import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Slider from './components/Slider';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with Slider and Navbar */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Navbar />
              <div className="pt-[64px]">
                <Home />
              </div>
            </>
          }
        />

        {/* Login and Register pages (no navbar or slider) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Profile route with Slider and Navbar */}
        <Route
          path="/profile"
          element={
            <>
              <Slider />
              <Navbar />
              <div className="pt-[64px]">
                <Profile />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
