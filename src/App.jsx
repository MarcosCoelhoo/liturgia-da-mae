import './App.css';
import Credits from './components/credits/Credits';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Readings from './components/readings/Readings';
import { GlobalStorage } from './context/GlobalContext';

function App() {
  return (
    <>
      <Header />

      <GlobalStorage>
        <main>
          <Hero />
          <Readings />
        </main>
      </GlobalStorage>
      <Credits />
    </>
  );
}

export default App;
