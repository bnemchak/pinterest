import pinData from '../../helpers/data/pinData';
import pinComponent from '../pin/pin';
import utils from '../../helpers/utils';

const changeClass = () => {
  $('#boards').addClass('hide');
  $('#pins').addClass('hide');
};

const showPin = (e) => {
  changeClass();
  const boardId = e.target.closest('.card').id;

  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      console.warn('We have pins', pins);
      let domString = `
        <div class="card ${boardId}">
        `;

      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pin', domString);
    })
    .catch((err) => console.error('no pins for you', err));
};

export default { showPin };
