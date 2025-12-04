import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"


function Favorites(){
    const {favorites} = useMovieContext();

    if (favorites){
        return(
            <div>
                <h2 className="favourites">Your Favorites</h2>
        <div className="movie-grid">
            {favorites.map(
            (movie) => 
            (<MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </div>
        )
    }

    return(
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding Movies to your favourite and they will show here</p>
        </div>
    )
}
export default Favorites