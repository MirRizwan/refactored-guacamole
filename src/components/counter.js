import React, { Component} from 'react';


class Counters extends Component{

    render(){
        
        return(
            <div className="row m-5">
               
                <div className="col-12">
                    { this.props.children }
                </div>
                <div className="col-2">
                    <span style={ {padding: "6px 8px", marginTop:4} } className={ this.formatCountBadge() }>{ this.formatCount() }</span>
                </div>

                <div className="col-md-auto">
                    <button className="btn btn-sm btn-success" onClick={ () => this.props.onAddCount(this.props.counter) }>+</button>    
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-sm btn-success" onClick={ () => this.props.onMinCount(this.props.counter) } disabled={ this.disableBtn() }>-</button>    
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-sm btn-danger" onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>    
                </div>
            </div>
            
        )
    }

    disableBtn(){
        return this.props.counter.countValue === 0 ? true : false;
    }

    formatCount(){
       return this.props.counter.countValue === 0 ? "Zero" : this.props.counter.countValue
    }

    formatCountBadge(){
        let badgeClass = "badge badge-";
        badgeClass += this.props.counter.countValue === 0 ? "warning" : "primary";
        return badgeClass;
    }

    


}


export default Counters;
