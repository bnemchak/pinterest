import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import utils from '../../helpers/utils';

const showBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <div class="card">
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
