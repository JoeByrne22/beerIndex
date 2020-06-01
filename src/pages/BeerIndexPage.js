import React, {Component} from 'react';
import BeerList from '../components/BeerList'
import BeerData from './BeerContent';


class Index extends Component {
    render() {
        return(
            <div>        
                <h1>Index</h1>
                <BeerList beers={BeerData}/>
            </div>
        )  
    }
}

export default Index;