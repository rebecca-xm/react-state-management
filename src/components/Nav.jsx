import { useContext } from "react";
import { MovieContext } from "./MovieListContext";

const Nav = () => {
    const [movies, setMovie] = useContext(MovieContext);

    return (
        <div>
            <h3>Rebecca</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;

// QUARTO STEP:
// Esporto la barra di navigazione in App.js

// OTTAVO STEP:
// Per renderizzare il numero di film presenti nella mia
// lista, importo sempre useContext e MovieContext.
// => {movies.length}