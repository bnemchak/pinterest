import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"equalTo="${boardId}"`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      Object.keys(pinObjects).forEach((boardPinId) => {
        pinObjects[boardPinId].id = boardPinId;
        pins.push(pinObjects[boardPinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getBoardPinByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const boardPinObj = response.data;
      const boardPin = [];
      Object.keys(boardPinObj).forEach((boardPinId) => {
        boardPinObj[boardPinId].id = boardPinId;
        boardPin.push(boardPinObj[boardPinId]);
      });

      resolve(boardPin);
    })
    .catch((err) => reject(err));
});

export default { getPinsByBoardId, getBoardPinByBoardId };
