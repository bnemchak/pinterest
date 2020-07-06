import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import utils from '../../helpers/utils';

const showBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      console.warn('here please');
      let domString = `
      <h2 class="text-center">Boards</h2>
      <div class="d-flex flex-wrap">
      `;

      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });

      domString += '</div>';

      utils.printToDom('#board', domString);
    })
    .catch((err) => console.error('it broke', err));
};

export default { showBoards };
