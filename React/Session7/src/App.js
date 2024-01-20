import logo from './logo.svg';
import './App.css';
import GrandParent from './components/UseCase1/GrandParent';
import { useState } from 'react';
import MyGrandParent from './components/useCase2/MyGrandParent';
import ThemeContextProvider from './components/useCase3/themeContext';
import ThemeUsage from './components/useCase3/ThemeUsage';

function App() {

  // const [data, setData] = useState("Message from App Parent");
  return (
      <ThemeContextProvider>
        <ThemeUsage />
      </ThemeContextProvider>
  );
}

export default App;
