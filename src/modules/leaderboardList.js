// /src/modules/leaderboardList

const divList = document.querySelector('#list');

const listZone = `
<div id="listZone">
  <div id="titleLZ" class="subtitle d-flex flex-row justify-content-between align-items-center">
    <span id="recents" class="loMediano p-0 m-0">Recent scores</span>
    <a href="#" id="refresh">
      <button id="refresh" type="button" class=" loPeque btn btn-outline-primary">Refresh</button>
    </a>
  </div>
  <ul id="scoresList" class="p-0 m-0"></ul>
</div>
`;

const renderListZone = () => {
  divList.innerHTML = listZone;
};

const render1score = (score) => {
  const ulist = document.querySelector('#scoresList');

  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = `${score.name}: ${score.points}`;
  li.className = 'scoreLI d-flex flex-row align-items-center';
  p.className = 'loPeque p-0 m-0';

  li.appendChild(p);
  ulist.appendChild(li);
};

const renderList = (listOfScores) => {
  const ulist = document.querySelector('#scoresList');
  ulist.innerHTML = '';
  listOfScores.forEach((score) => render1score(score));
};

export { renderListZone, renderList };