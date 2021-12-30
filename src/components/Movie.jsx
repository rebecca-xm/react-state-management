const Movie = (/*props*/{ name, price }) => {
    return (
        <div>
            <h3>{/*props*/name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Movie;

// CONTINUO TERZO STEP:
// In questo caso, le props mi consentono di richiamare
// e renderizzare il componente Movie con gli attributi
// che gli ho assegnato in MovieList.jsx.