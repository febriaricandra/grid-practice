import './App.css';
import CardNews from './components/CardNews';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SectionCard from './components/SectionCard';
import TitleDesc from './components/TitleDesc';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TitleDesc title='Popular Products' descriptions='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' />
      <SectionCard />
      <TitleDesc title='Latest News' descriptions='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' />
      <CardNews />
    </div>
  );
}

export default App;
