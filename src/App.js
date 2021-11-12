import './App.scss';
import { NavPortfolio } from './components/NavPortfolio';
import { Banner } from './components/Banner';
import { About } from './components/About'

function App() {
  return (
    <>
       <section className="home">
       <Banner />
       <NavPortfolio />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="tools"></section>
      <section className="projects"></section>
      <section className="contact"></section>
    </>
  );
}

export default App;
