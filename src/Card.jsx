import React from 'react';

function Card({ children }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                {children}
            </div>
        </div>
    );
}

export default Card;