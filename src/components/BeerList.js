
import React from 'react';
import { Link } from 'react-router-dom';

function BeerList({ beers }) {
    return(
        <div>        
                {beers.map((beer,key) => (
                    <Link to={`/beer/${beer.name}`} key={key}>
                     <h3>{beer.name}</h3>
                    </Link>           
                ))}
        </div>
    )  
}

export default BeerList