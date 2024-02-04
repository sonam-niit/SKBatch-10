import { ToastContainer } from "react-toastify";
import UserList from "./components/UserList";
import WithAxios from "./components/WithAxios";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      {/* <UserList /> */}
      <WithAxios />
    </div>
  );
}

export default App;
