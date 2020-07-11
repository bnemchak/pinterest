import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import boardPin from '../boardPin/boardPin';
import utils from '../../helpers/utils';

const showBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h2 class="text-center">Boards</h2>
      <div class="d-flex flex-wrap">
      `;

      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });

      domString += '</div>';

      utils.printToDom('#board', domString);

      $('body').on('click', '.board-card', boardPin.buildBoardPin);
    })
    .catch((err) => console.error('it broke', err));
};

export default { showBoards };
