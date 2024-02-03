import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import DashboardMessages from "./components/Dashboard/DashboardMessages";
import DashboardTask from "./components/Dashboard/DashboardTask";
import DashboardAbout from "./components/Dashboard/DashboardAbout";
import UserList from "./components/Users/UserList";
import UserDetails from "./components/Users/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="messages" element={<DashboardMessages />}/>
            <Route path="task" element={<DashboardTask />}/>
            <Route path="about" element={<DashboardAbout />}/>
          </Route>
          <Route path="/users"  element={<UserList />} ></Route>
          <Route path="/users/:id"  element={<UserDetails />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
