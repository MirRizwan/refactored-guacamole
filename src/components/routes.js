import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from "./movies";
import Counters from "./counters";
import homeComponent from "./homeComponent";
import Rentals from "./rentals";
import Customers from "./customers";
import notFound from "./notFound";
import MovieDetails from "./movieDetail";

const Routes  = (props) =>{

    return(
        <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/products" render={ p => <Counters counters={ props.counters } onDelete={ props.onDelete} onAdd={ props.onAdd } onReset={ props.onReset} onMin = {props.onMin} {...p} /> }  />
            <Route path="/not-found" component={notFound} />
            <Route path="/" exact component={homeComponent} />
            <Redirect to="/not-found" />
        </Switch>
        
    )

}

export default Routes;