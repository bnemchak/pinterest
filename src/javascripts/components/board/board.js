import './board.scss';

const boardMaker = (board) => {
  const domString = `
  <div class="row">
    <div class="col-3" style="width: 70rem;">
      <div class="card" id="${board.id}">
        <div class="card-body board-card">
          <h5 class="card-title">${board.category}</h5>
        </div>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
