import React from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
    const { items, onItemSelect, textProperty, keyProperty, selectedGenre } = props;
  
    return(
        <ul className="list-group">
            {
                items.map(item  =>(
                    <li onClick={ ()=> onItemSelect(item)} className={ item === selectedGenre ? "list-group-item d-flex justify-content-between align-items-center active" : "list-group-item d-flex justify-content-between align-items-center"} key={item[keyProperty] }>
                        { item[textProperty] }
                <span className="badge badge-dark badge-pill">{  }</span>
                    </li>
                ))      
            }

            
        </ul>
    )

}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    textProperty: PropTypes.string,
    keyProperty:PropTypes.string,
    selectedGenre: PropTypes.object
}
ListGroup.defaultProps = {
    textProperty: "name",
    keyProperty: "_id"
}

export default ListGroup;