import './App.css';
import ItemList from './components/ItemList';
import Cart from './components/cart';
import Counter from './components/counter';
import XYZ from './components/xyz';

function App() {
  return (
    <div className="App">
      <Counter />
      <XYZ />
      <ItemList />
      <Cart />
    </div>
  );
}

export default App;
