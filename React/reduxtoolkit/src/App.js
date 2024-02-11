import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoApp />
      <UserProfile userId={4} />
    </div>
  );
}

export default App;
