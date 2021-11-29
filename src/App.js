import './App.css';
import './components/SlideBar/index.css';
import SliderBar from './components/SlideBar';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div>
      <Reset />
      <SliderBar />
    </div>
  );
}

export default App;
