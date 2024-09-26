import React from 'react';

function InfoCard({item}) {
    return(
        <div>
            <a href={item.url} target='blank'>
                <h1>{item.title}</h1>
                <h2>{item.author}</h2>
            </a>
        </div>
    )
}

export default InfoCard;