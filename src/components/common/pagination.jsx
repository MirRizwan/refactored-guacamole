import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
    
    const { currentPage, postsPerPage, movies, onClick } = props;
    

    const pagesCount = Math.ceil(movies.length / postsPerPage);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);


    return(
        <React.Fragment>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pages.map(page =>(
                           
                            <li key={page} className={page === currentPage ? "page-item active" : "page-item"} >
                                <button className="page-link" onClick={() => onClick(page)}>{page}</button>
                            </li>
                        ))
                    }

                   
                          
                </ul>
            </nav>
        </React.Fragment>
       
        
    )
}


Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    postsPerPage:PropTypes.number.isRequired,
    movies: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Pagination; 