import { useContext, useState } from "react";
import { MovieContext } from "./MovieListContext";

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);      // '...prevMovies' <= ottengo una copia degli oggetti presenti nell'array
    };                                                                              // name e price saranno ricavati dai relativi input

    return (
        <form onSubmit={addMovie}>
            <input type='text' name='name' value={name} onChange={updateName} />
            <input type='text' name='price' value={price} onChange={updatePrice} />
            <button>Add to the list</button>
        </form>
    );
};

export default AddMovie;