import React from 'react';
import axios from 'axios';

const Result = () => {
  const [highScores, setHighScores] = React.useState([]);

  const fetchHighScores = () => {
    axios
      .get('/high-scores')
      .then(response => setHighScores(response.data.results))
      .catch(err => console.error(err));
  };
  
  return(
    <footer data-testid="result_footer">
      <h2>Waiting for your choice!</h2>
      <button
        data-testid="high-score-button"
        onClick={fetchHighScores}
      >Fetch High Scores</button>
      { highScores.map(score => (
        <div key={score.id}>{score.name}</div>
      )) }
    </footer>
  );
};

export default Result;
