// /src/index.js
import './styles.css';
import { renderListZone, renderList } from './modules/leaderboardList';
import renderFormZone from './modules/leaderboardForm';

// Hardcoded scores
const scoreList = [];
const score1 = {};
score1.name = 'John';
score1.points = 100;
scoreList.push(score1);
const score2 = {};
score2.name = 'Jane';
score2.points = 333;
scoreList.push(score2);
const score3 = {};
score3.name = 'Joe';
score3.points = 7;
scoreList.push(score3);
const score4 = {};
score4.name = 'Jenny';
score4.points = 55;
scoreList.push(score4);

const displayStuff = () => {
  renderListZone();
  renderList(scoreList);
  renderFormZone();
};

// When content loads
document.addEventListener('DOMContentLoaded', displayStuff());