import './App.scss';
import { NavPortfolio } from './components/NavPortfolio';
import { Banner } from './components/Banner';
import { About } from './components/About'
import { LangTools } from './components/LangTools';

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
      <section className="tools">
        <LangTools />
      </section>
      <section className="projects"></section>
      <section className="contact"></section>
    </>
  );
}

export default App;
