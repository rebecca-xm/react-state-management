// import { useState } from "react";
import { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieListContext";

const MovieList = () => {
    // const [movies, setMovies] = useState([
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
    const [movies, setMovies] = useContext(MovieContext);             // <= in questo modo ho accesso al valore di MovieContext

    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
                {/* <li>{movie.name}</li>  */}
        </div>
    );
};

export default MovieList;

// PRIMO STEP: 
// In che modo posso trasferire queste informazioni
// nel file Movie.jsx?
// Per prima cosa, importo Movie e lo sostituisco
// all'elemento li.

// SECONDO STEP:
// Con l'aiuto delle props passo al componente Movie
// i vari dati presenti all'interno dell'array.

// TERZO STEP:
// Sempre tramite props, collego questo componente
// a Movie.jsx.

// CONTINUO QUARTO STEP:
// (IPOTESI) Trasferisco lo stato da questo componente al suo
// genitore, ossia App.js (lifting state up)

// QUINTO STEP => Trasferiro lo stato al componente
// MovieListContext.jsx