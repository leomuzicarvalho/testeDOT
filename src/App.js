import Slideshow from './components/Slideshow';
import './css/main.css';
import CardsSlider from './components/CardsSlider';
import RoundedImgWithText from './components/RoundedImgWithText';
import DropdownCards from './components/DropdownCards';
import BottomForm from './components/BottomForm';
import BottomFrom from './components/BottomForm';

function App() {
  return (
    <div className="App">
      <Slideshow/>
      <CardsSlider/>
      <RoundedImgWithText/>
      <DropdownCards/>
      <BottomFrom/>
      <footer>
        <p className="footer-text">LOREM IPSUM</p>
      </footer>
    </div>
  );
}

export default App;
