import profile from './wanted_preonboarding.png';
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
      <span className="submitter">제출자 : 박성현</span>
      <div className="body">
        <ol>
          <li>
            <span>Toggle.js</span>
            <Toggle></Toggle>
          </li>
          <li>
            <span>Tab.js</span>
            <Tab></Tab>
          </li>
          <li>
            <span>Input.js</span>
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
