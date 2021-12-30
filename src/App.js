import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import { MovieProvider } from './components/MovieListContext';
import Nav from './components/Nav';

function App() {
  //   const [movies, setMovies] = useState([
  //     {
  //         name: 'Druk',
  //         price: '$10',
  //         id: 1234
  //     },
  //     {
  //         name: 'Riders of Justice',
  //         price: '$10',
  //         id: 5678
  //     },
  //     {
  //         name: 'Hannibal',
  //         price: '$10',
  //         id: 91011
  //     },
  // ]);

  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>
    </div>
  );
}

export default App;

//* QUARTO STEP: LIFTING STATE UP
// Adesso voglio fare in modo di renderizzare il numero
// dei film presenti all'interno della mia lista nel
// componente Nav.
// Per fare ciò, dovrei renderizzare Nav in MovieList.
// Un modo per evitare questo passaggio è attraverso
// lo spostamento di stato verso l'alto (lifting state up).

// CONTINUO QUARTO STEP DA MOVIELIST:
// Trasferendo qui lo stato, posso passarlo direttamente
// a qualunque componente io voglia.
// Il problema con questo metodo, tuttavia, è che a quel 
// punto sarei costretta a passare le props ad ogni
// componente figlio. E' qui che interviene lo 
//* STATE MANAGEMENT.