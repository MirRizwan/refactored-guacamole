import React, { Component } from "react";

class MovieDetails extends Component{
    handleSave(){
        console.log("clicked");
    }
    render(){
        return(
            <React.Fragment>
                <h1>Movie Details - { this.props.match.params.id }</h1>
                <button className="btn btn-primary btn-sm" onClick={this.handleSave}>Save</button>
            </React.Fragment>
            
        )
    }
}

export default MovieDetails;