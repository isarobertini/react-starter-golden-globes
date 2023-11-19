export const NominationItem = ({ nominee, film, category, yearFilm, yearAward }) => {
    return (
        <li className='bg-white bg-opacity-75 rounded-3xl'>
            <h1 className="mt-10 text-3xl font-bold underline text-center">{nominee}</h1>
            <h2 className="text-sm font-bold text-center">{film}</h2>
            <h3>{category}</h3>
            <h3>Created: {yearFilm}</h3>
            <h3>Nominated: {yearAward}</h3>
        </li>
    );
};

