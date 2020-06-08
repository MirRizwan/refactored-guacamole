import React from "react";
import {connect} from "react-redux";
import TestingComponent from "./testingComponent";
import {Helmet} from "react-helmet";


const MovieDetails = props =>{   
    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movie Details Component - { props.myName}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Here is the MOvie Details" />
            </Helmet>
            <h1>Movie Details - { props.match.params.id }</h1>
            <button className="btn btn-primary btn-sm" onClick={handleSave}>Save</button>
            <p>My name is <strong>{props.myName}</strong> and I am world's number one <strong>{props.myNature}</strong></p>
            <TestingComponent />
        </React.Fragment>
        
    )
}

const handleSave = () =>{
    console.log("clicked");
}

const mapStateToProps = state => {
    return{
        myName: state.fname,
        myNature: state.fnature
    }
}



export default connect(mapStateToProps)(MovieDetails);