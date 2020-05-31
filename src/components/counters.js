import React, { Component} from 'react';
import Counter from "./counter";

class Counters extends Component{

    render(){
       
        const countersLength = this.props.counters.length;
        if (countersLength === 0){
            return <p>There is no count in the database!</p>
        }
        return(
            <React.Fragment> 
                <div className="container">
                <h4>Number of counters, Showing result { countersLength }</h4>
                <button className="btn btn-primary" onClick={ () => this.props.onReset() }>Reset</button>
                    { this.props.counters.map( counter => (
                        <Counter key={counter.id} counter={counter} onDelete={ this.props.onDelete }  onAddCount={ this.props.onAdd } onMinCount={ this.props.onMin }>
                            <h2>Counter #{ counter.id }</h2>
                        </Counter>        
                        ))
                    }
                </div>
            
            </React.Fragment>
        )
    }

}


export default Counters;
