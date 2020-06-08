import React, {Component} from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from './common/listGroup';
import {Paginate} from "../utils/paginate";
import MoviesTable from './moviesTable';


class Movies extends Component{

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        postsPerPage: 2, 
    }

    componentDidMount(){
        const genres = [{_id: "", name: "All Genres"}, ...getGenres()]
        this.setState({ movies: getMovies(), genres})
    }

    deleteMovie = (movie) =>{
        const newMovie = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({ movies: newMovie});
    }

    handleLike = movie =>{
        const newMovies = [...this.state.movies];
        const index = newMovies.indexOf(movie);
        newMovies[index] = {...newMovies[index]};
        newMovies[index].liked = !newMovies[index].liked;
        this.setState({ movies: newMovies});
    }

    handlePagination = post =>{
        this.setState({ currentPage: post});
    }
    
    handleGenreSelect = genre =>{
        this.setState({ selectedGenre: genre, currentPage: 1});
    }

    render(){

        //Object Destructuring and renaming the the lenght variable
        const {currentPage, postsPerPage, movies:allMovies, selectedGenre} = this.state;

        
        
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;
        
        const movies = Paginate(filtered, currentPage, postsPerPage);


        return(
            <React.Fragment>
                <h1>Top Movies</h1>
                <p className="lead">Showing <strong className="badge badge-primary">{ filtered.length }</strong> top movies in the database!</p>  
                

                <div className="row">
                    <div className="col-3">
                       <ListGroup items={ this.state.genres } onItemSelect={ this.handleGenreSelect} selectedGenre={ this.state.selectedGenre} movies={ movies  } /> 
                    </div>
                    <div className="col-9">
                        { filtered.length === 0 ? <p className="lead">There is no movie in the database!</p> : 
                            <MoviesTable movies={movies} onLike={ this.handleLike} onDelete={ this.deleteMovie} />
                        }
                        <Pagination onClick={ this.handlePagination } currentPage={ currentPage } postsPerPage={ postsPerPage } movies={ filtered } />
                    </div>
                </div>
                
                     
            </React.Fragment>
        )

    }

    
    
}

export default Movies;