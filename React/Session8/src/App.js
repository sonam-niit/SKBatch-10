import AuthProvider from './components/AuthContext';
import FilterDemo from './components/FilterDemo';
import FormDemo from './components/Form';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div>
      <FormDemo />
      <FilterDemo />
    </div>
    // <AuthProvider>
    //   <Header />
    //   <Login />
    // </AuthProvider>
  );
}

export default App;
