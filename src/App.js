import profile from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
      </header>
      <body>
        <Dropdown></Dropdown>
        <Input></Input>
        <Slider></Slider>
        <Tab></Tab>
        <Toggle></Toggle>
        <Test></Test>
      </body>
    </div>
  );
}

export default App;
