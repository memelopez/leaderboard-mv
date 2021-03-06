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
  p.textContent = `${score.user}: ${score.score}`;
  li.className = 'scoreLI d-flex flex-row align-items-center';
  p.className = 'loPeque p-0 m-0';

  li.appendChild(p);
  ulist.appendChild(li);
};

const emptyListMsg = () => {
  const ulist = document.querySelector('#scoresList');
  ulist.innerHTML = '';
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = 'No scores yet!';
  p.className = 'loPeque p-0 m-0';
  li.className = 'scoreLI d-flex flex-row align-items-center justify-content-center m-0 p-0';

  li.appendChild(p);
  ulist.appendChild(li);
};

const renderList = (listOfScores) => {
  const ulist = document.querySelector('#scoresList');
  ulist.innerHTML = '';
  if (listOfScores.length === 0) {
    emptyListMsg();
  } else {
    listOfScores.forEach((score) => render1score(score));
  }
};

export { renderListZone, renderList };