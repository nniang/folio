import './App.css';
import  './composantes/Responsive.css';
import Accueil from './composantes/Accueil';
import Menu from './composantes/Menu';
import Presentation from './composantes/Presentation';
import Portefolio from './composantes/Portefolio';
import Competence from './composantes/Competence';
import Experience from './composantes/Experience';
import Contact from './composantes/Contact';
import Footer from './composantes/Footer';

function App() {
  return (
    <div className="App">
    <Menu/>
    <Accueil/>
    <Presentation/>
    <Portefolio/>
    <Competence/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
