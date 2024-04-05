import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import styles from './Movies.module.scss';
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";

interface MoviesProps{
    movies: Movie[];
}

 function Movies({ movies }: MoviesProps) {
     return (
         <section>
             <div className={styles.list}>
                 {movies.map(m => (
                     <MovieCard
                         key={m.id}
                         id={m.id}
                         title={m.title}
                         overview={m.overview}
                         popularity={m.popularity} />
                 ))}
             </div>
         </section>
     );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,

})

const connector = connect(mapStateToProps);

export default connector(Movies);