import React, { Component} from 'react';
import Navigation from "./components/navigation";
import Routes from './components/routes';

import "./App.css";

class App extends Component {

  state = {
    counters : [
        { id: 1, countValue: 2}, { id: 2, countValue: 1}, { id: 3, countValue: 0}, { id: 4, countValue: 50}, { id: 5, countValue: 2}, { id: 6, countValue: 0}, { id: 7, countValue: 10}
    ]
  }

  handleDelete = (counterId) =>{ 
      const newCounters = this.state.counters.filter( c => c.id !== counterId );
      this.setState({ counters: newCounters});
  }

  handleCounter = counter => {
    
      const newCounters = [...this.state.counters];
      const index = newCounters.indexOf(counter);
      newCounters[index] = {...counter};
      newCounters[index].countValue++; 
    
      this.setState({ counters: newCounters});
      
  }

  handleMinCount = counter =>{
    const minCounter = [...this.state.counters];
    const i = minCounter.indexOf(counter);
    minCounter[i] = {...counter};

    minCounter[i].countValue--;

    this.setState({ counters: minCounter});
  }

  
  handleReset = () =>{
      const reseting2 = this.state.counters.map( c => {
          c.countValue = 0;
          return c;    
      });
      this.setState({ counters: reseting2});
  }

  render(){
    return (
      <main role="main" className="container">

        <div className="starter-template">
          <Navigation cart={ this.state.counters.filter(c => c.countValue > 0 ).length } />
          
          <Routes counters={ this.state.counters} onAdd={ this.handleCounter} onDelete={ this.handleDelete } onReset={ this.handleReset} onMin={ this.handleMinCount}/>
        </div>

      </main>
    );
  }
  
}

export default App;
