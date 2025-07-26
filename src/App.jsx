import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Set Login as the default route */}
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
