import React from 'react';

function InfoCard({item}) {
    return(
        <div>
            <a href={item.url} target='blank' className='
            flex 
            flex-col 
            items-center 
            justify-center 
            w-96 
            h-56
            rounded-lg 
            bg-violet-300 
            text-center 
            p-4
            hover:shadow-xl duration-300'>
                <h1 className='text-2xl font-semibold bg-violet-300'>{item.title}</h1>
                <h2 className='text-lg font-normal bg-violet-300'>{item.author}</h2>
            </a>
        </div>
    )
}

export default InfoCard;