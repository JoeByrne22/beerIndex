import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import beerData from './beerContent'


class Index extends Component {
    render() {
        return(
            <div>        
                <h1>Index</h1>
                    {beerData.map((beer,key) => (
                        <Link to={`/beer/${beer.name}`} key={key}>
                         <h3>{beer.name}</h3>
                        </Link>
                   
                    ))}
            </div>


        )  
    }
}

export default Index;