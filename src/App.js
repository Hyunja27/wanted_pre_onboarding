import profile from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
      </header>
      <div className="body">
        <ol>
          <li>
            <span>Toggle.js</span>
            <Toggle></Toggle>
          </li>
          <li>
            Tab.js
            <Tab></Tab>
          </li>
          <li>
            Input.js
            <Input></Input>
          </li>
          {/* <li>
            Slider.js
            <Slider></Slider>
          </li>
          <li>
            Dropdown.js
            <Dropdown></Dropdown>
          </li> */}
        </ol>
      </div>
    </div>
  );
}

export default App;
