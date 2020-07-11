import boardData from '../../helpers/data/boardData';
import boardPinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildBoardPin = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;

      boardPinData.getBoardPinsbyBoardId(boardId)
        .then((res) => console.warn('got by board Id', res));

      const domString = `
        <h2 class="text-center">Featured Board</h2>
        <div class="col-12">
          <div class="card text-white bg-dark border-0 round-0">
            <div class="card-header">${board.name}</div>
            <div class="card-body"></div>
          </div>
        `;

      utils.printToDom('#boardPins', domString);
    })
    .catch((err) => console.error('no single board', err));
};

export default { buildBoardPin };
