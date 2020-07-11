import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';
import pinList from '../../components/pinList/pinList';

const authDiv = $('#auth');
const boardsDiv = $('#board');
const pinsDiv = $('#pin');
const boardPinDiv = $('#boardPin');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      boardPinDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      pinList.showPin();
      boardList.showBoards();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
      boardPinDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
