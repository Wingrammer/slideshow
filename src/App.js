import logo from './logo.svg';
import './App.css';
import Slideshow from './Slideshow/Slideshow';

function App() {
  return (
    <div className="App">
      <div className="centeredFlexBox">

        <div className="leftBox">
          Left Box
        </div>
        <div className="rightBox">
          <Slideshow/>
        </div>        
      </div>
    </div>
  );
}

export default App;
