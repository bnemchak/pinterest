import pinData from '../../helpers/data/pinData';
import pinComponent from '../pin/pin';
import utils from '../../helpers/utils';

const showPin = () => {
  pinData.getPins()
    .then((pins) => {
      console.warn('We have pins', pins);
      let domString = `
      <h2 class="text-center">Pins</h2>
      <div class="d-flex flex-wrap">
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
