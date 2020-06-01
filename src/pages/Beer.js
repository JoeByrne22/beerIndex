import React from 'react';
import BeerList from '../components/BeerList'
import BeerData from './BeerContent'



function Beer({ match }) {
    const name = match.params.name;
    const beers = BeerData.find(beer => beer.name === name);

    if (!beers) return <h1>Sorry that beer is not is our database</h1>;


    const otherBeer = BeerData.filter(beer => beer.name !== name)


        return(
            <div>
                <h1>{beers.name}</h1>
                <h3>This beer has a rating of {beers.taste} out of 10</h3>
                    {beers.location.map((beers, key) => (
                    <p key={key}>Found at: {beers}</p>
                    ))}
                <p>{beers.description}</p>
                <BeerList beers={otherBeer} />
            </div>

        )  
}

export default Beer;