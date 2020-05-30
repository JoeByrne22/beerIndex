import React from 'react';
import BeerData from './beerContent'


function Beer({ match }) {
    const name = match.params.name;
    const beer = BeerData.find(beer => beer.name === name);

    if (!beer) return <h1>Sorry that beer is not is our database</h1>

        return(
            <div>
                <h1>{beer.name}</h1>
                <h3>This beer has a rating of {beer.taste} our of 10</h3>
                    {beer.location.map((beer, key) => (
                    <p key={key}>Found at: {beer}</p>
                    ))}
                <p>{beer.description}</p>
            </div>

        )  
}

export default Beer;