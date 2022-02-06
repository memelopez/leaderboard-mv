// /src/index.js
import './styles.css';
import { renderListZone, renderList } from './modules/leaderboardList';
import renderFormZone from './modules/leaderboardForm';
import Store from './modules/store';
import leaderAPI from './modules/leaderAPI';
import validateScore from './modules/helpfulFunctions';

// variables
let scoreList = [];
let gameKey;
const newGameURL = `
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;
const newGameName = { name: "Elmer's Glue" };

gameKey = Store.getGameKey();

const iniateLeaderboard = () => {
  renderFormZone();
  renderListZone();
  if (!gameKey) { // NO gameKey in localStorage
    leaderAPI.postName(newGameName, newGameURL).then((res) => {
      Store.setGameKey(res);
      gameKey = res;
      leaderAPI.getScores(newGameURL, gameKey).then((res) => {
        scoreList = res.result;
        renderList(scoreList);
      });
    });
  } else { // gameKey is in localStorage
    leaderAPI.getScores(newGameURL, gameKey).then((res) => {
      scoreList = res.result;
      renderList(scoreList);
    });
  }
};

// When content loads
document.addEventListener('DOMContentLoaded', iniateLeaderboard());

// Event: when form is submitted
document.querySelector('#addScore').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value.trim();
  if (validateScore(name, score)) {
    // post score
    leaderAPI.postScore(name, score, newGameURL, gameKey);
  }
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

// Event: when refresh button is clicked
document.querySelector('#refresh').addEventListener('click', () => {
  leaderAPI.getScores(newGameURL, gameKey).then((res) => {
    scoreList = res.result;
    renderList(scoreList);
  });
});
