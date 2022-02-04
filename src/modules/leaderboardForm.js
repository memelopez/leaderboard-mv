// /src/modules/leaderboardForm

const divForm = document.querySelector('#form');

const formZone = `
<div id="formZone">
  <div id="formTitle" class="subtitle d-flex flex-row justify-content-center align-items-center">
    <span class="loMediano">Add your score</span>
  </div>
  <form action="submit" id="addScore" class="d-flex flex-column justify-content-between align-items-center">
    <input type="text" id="name" placeholder="Your name" class="entreMyP">
    <input type="text" id="score" placeholder="Your score" class="entreMyP">
    <a href="#" id="submit" class="ms-auto">
      <button type="submit" class="loPeque btn btn-outline-primary">Submit</button>
    </a>
  </form>
</div>
`;

const renderFormZone = () => {
  divForm.innerHTML = formZone;
};

export default renderFormZone;