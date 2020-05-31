import React,{Component} from 'react';

class Like extends Component{
    likeBtn = {
        cursor: "pointer"
    }
    render(){
       
        let heartIcon = "fa fa-heart";
        if(!this.props.Liked) heartIcon += "-o";
        return(
           <i style={this.likeBtn} className={ heartIcon } aria-hidden="true" onClick={ this.props.onLiked }></i>
               
          
        )
    }
}

export default Like;