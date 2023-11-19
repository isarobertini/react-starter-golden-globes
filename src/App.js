import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NominationItem } from 'nominationItem';

export const App = () => {
  const [nominations, setNominations] = useState([]);
  const [showWinning, setShowWinning] = useState(true); // Initial state to show winning nominations

  useEffect(() => {
    // Fetch data from your Express.js API endpoint
    axios.get('https://project-express-api-30od.onrender.com/nominations/')
      .then((response) => {
        // Filter nominations based on whether they won or not
        const filteredNominations = showWinning
          ? response.data.filter((nomination) => nomination.win)
          : response.data;

        // Assuming nominations are ordered by date, you can use slice to get the latest 20
        setNominations(filteredNominations.slice(0, 20));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [showWinning]); // Update nominations when the showWinning state changes

  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="pt-10 text-3xl font-bold underline text-center">Golden Globes Nominations</h1>
      <div className="text-center mb-4">
        <button className="bg-white bg-opacity-75 rounded-3xl p-3" onClick={() => setShowWinning(!showWinning)}>
          {showWinning ? 'Show All Nominations' : 'Show Winning Nominations'}
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3 px-10">
        {nominations.map((nomination) => (
          <NominationItem
            key={nomination.nominee}
            nominee={nomination.nominee}
            film={nomination.film}
            category={nomination.category}
            yearFilm={nomination.year_film}
            yearAward={nomination.year_award}
          />
        ))}
      </ul>
    </div>
  );
};
