import React, {Component} from "react";
import {connect} from "react-redux";

class TestingComponent extends Component{
   
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <h3>My name is {this.props.myName} and I am World's number 1 {this.props.myNature}</h3>
                <button className="btn btn-warning" onClick={()=>{this.props.myFunc("Haramkhor")}}>Change Haseeb</button>
                <div style={{margin:20, padding:10 }}>
                <button className="btn btn-warning btn-sm" onClick={()=>{this.props.myMovieFunc("Jism")}}>Edit Movie</button>
                    <ul className="list-group">
                    { this.props.allMovies.map((m)=>(
                        <li className="list-group-item" key={m._id} >{m.title}</li>
                    ))}

                    </ul>
                </div>
                
            </React.Fragment>
        )
    }


    
}


const mapStateToProps = state =>{
    return{
        myName: state.fname,
        myNature: state.fnature,
        allMovies: state.fmovies
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        myMovieFunc: (x)=>{ dispatch({type:"CHANGE_MOVIE_TITLE", payload:x})},
        myFunc: (i)=>{ dispatch({type:"CHANGE_FNATURE", payload:i})}
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingComponent);
