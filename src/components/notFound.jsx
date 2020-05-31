import React from "react";
import {Link} from "react-router-dom";

const notFound = () =>{
    return(
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
                <h1 class="display-4">404!</h1>
                <p class="lead">Opps, looks like a ghost</p>
                <p>The page you are looking for can't be found, go to home page by <Link to="/">clicking here</Link></p>
            </div>
        </div>

        
    )
}

export default notFound;
