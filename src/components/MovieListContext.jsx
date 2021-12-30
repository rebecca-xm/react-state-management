import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Druk',
            price: '$10',
            id: 1234
        },
        {
            name: 'Riders of Justice',
            price: '$10',
            id: 5678
        },
        {
            name: 'Hannibal',
            price: '$10',
            id: 91011
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};

//* SESTO STEP: CREATECONTEXT
// Ogni volta che vorrò usare le informazioni presenti
// in MovieProvider, mi limiterò ad importare MovieContext.
// Il suo compitò sarà infatti quello di forire informazioni
// ai vari componenti.
// Lo esporto quindi in App.js (props.children => inserisco
// al suo interno i componenti che voglio ereditino le sue proprietà)

//* SETTIMO STEP => useContext in MovieList.jsx