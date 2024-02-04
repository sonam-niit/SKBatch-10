import { ToastContainer } from "react-toastify";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const token= localStorage.getItem('token')
  return (
    <Router>
      <div className="container">
        <ToastContainer />
        <ul className="nav">
        { !token &&  <li className="nav-item">
            <Link to="register" className="nav-link">Register</Link>
          </li> }
          { !token && <li className="nav-item">
            <Link to="login" className="nav-link">Login</Link>
          </li>}
        </ul>

        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
