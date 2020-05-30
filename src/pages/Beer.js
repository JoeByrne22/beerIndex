import React from 'react';


function Beer({ match}) {
    const name = match.params.name;
        return(
            <h1>this is {name} beer</h1>
        )  
}

export default Beer;