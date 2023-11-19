import React from 'react';

export const NominationItem = ({ nominee, film, category, yearFilm, yearAward }) => {
    return (
        <li className='bg-white bg-opacity-75 rounded-3xl p-4 mb-4'>
            <h1 className="text-3xl font-bold underline text-center">{nominee}</h1>
            <h2 className="text-sm font-bold text-center">{film}</h2>
            <h3 className="text-center">{category}</h3>
            <h3 className="text-center">Created: {yearFilm}</h3>
            <h3 className="text-center">Nominated: {yearAward}</h3>
        </li>
    );
};
