import './App.css';
import HomePage from './NetFlix/HomePage';
import Titlechange from './Schenario/Titlechange';
import Welcome from './Schenario/Welcome';
import UseCase1 from './components/UseCase1';
import UseCase2 from './components/UseCase2';
import UseCase3 from './components/UseCase3';
import UseCase4 from './components/UseCase4';
import UseCase5 from './components/UseCase5';

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Titlechange /> */}
      {/* <Welcome name="Skill Academy" titleOfTheDay="Keep Learning, Kepp Exploring...!" />; */}
      {/* <UseCase5 name="Sonam" age={67} 
      isStudent={true} 
      cb={()=>alert("Clicked...")} /> */}
      {/* <UseCase4 name="sonam" age={56} 
      greeting={"Hello..."} />
      <UseCase4 /> */}
      {/* <UseCase1 />
      <UseCase2 name="sonam" message="Good Morning.."/>
      <UseCase2 name="Anshuman" message="Good Afternoon.."/>
      <UseCase2 name="Chnadan" message="Good Evening.."/> */}

      {/* <UseCase3 method={()=>alert('Submit Clicked')} 
      name='Submit' />
      <UseCase3 method={()=>alert('Reset Clicked')} name='Reset' />
      <UseCase3 method={()=>alert('Change Clicked')} name='Change' /> */}
    </div>
  );
}

export default App;
