import React, {Component} from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import {Link} from "react-router-dom";

class Movies extends Component{

    state = {
        movies: getMovies(),
        currentPage: 1,
        postsPerPage: 8
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

    render(){

        //Object Destructuring and renaming the the lenght variable
        const { length : moviesCount} = this.state.movies;
        const {movies, currentPage, postsPerPage} = this.state;

        if ( moviesCount === 0){
            return <p className="lead">There is no movie in the database!</p>  
        }
        
        //Getting current movie
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
        
        return(
            <React.Fragment>
                <h1>Top Movies Website</h1>
                <p className="lead">Showing <strong className="badge badge-primary">{ moviesCount }</strong> top movies in the database!</p>  
                

                <div className="row">
                    <div className="col-3">
                        <ul className="list-group">
                            { movies.map(g => (
                                
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={g._id}>
                                    {g.genre.name}
                                    <span className="badge badge-primary badge-pill">2</span>
                                </li>
                                ) ) }
                           
                        </ul>
                    </div>
                    <div className="col-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>In Stock</th>
                                    <th>Rent</th>
                                    <th>Favourite</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            { currentPosts.map( movie => {
                                return(
                                <tr key={ movie._id}>
                                    <td><Link to={`/movies/${movie._id}`}>{ movie.title }</Link> </td>
                                    <td>{ movie.genre.name }</td>
                                    <td>{ movie.numberInStock }</td>
                                    <td>{ movie.dailyRentalRate }</td>
                                    <td><Like Liked={movie.liked} onLiked={ () => this.handleLike(movie)} /></td>
                                    <td><button className="btn btn-danger btn-sm" onClick={ () => this.deleteMovie(movie)}>Delete</button></td>
                                </tr>
                            
                                )
                                    
                                })
                                }
                            
                                
                            </tbody>
                        </table>  
                    </div>
                </div>
                
                     
            </React.Fragment>
        )

    }

    
    
}

export default Movies;