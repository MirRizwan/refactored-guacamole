import React from "react";
import Like from "./common/like";
import {Link} from "react-router-dom";


const MoviesTable = (props) =>{
    const { movies, onLike, onDelete} = props;
    
    return(
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

            { movies.map( movie => {
                return(
                <tr key={ movie._id}>
                    <td><Link to={`/movies/${movie._id}`}>{ movie.title }</Link> </td>
                    <td>{ movie.genre.name }</td>
                    <td>{ movie.numberInStock }</td>
                    <td>{ movie.dailyRentalRate }</td>
                    <td><Like Liked={movie.liked} onLiked={ () => onLike(movie)} /></td>
                    <td><button className="btn btn-danger btn-sm" onClick={ () => onDelete(movie)}>Delete</button></td>
                </tr>
            
                )
                    
                })
                }
            
                
            </tbody>
        </table>  
    )
}


export default MoviesTable;