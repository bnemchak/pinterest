import './board.scss';

const boardMaker = (board) => {
  const domString = `
  <div class="row">
      <div class="card boardCard" id="${board.id}">
        <div class="card-body">
          <h5 class="card-title">${board.category}</h5>
        </div>
    </div>
  `;

  return domString;
};

export default { boardMaker };
