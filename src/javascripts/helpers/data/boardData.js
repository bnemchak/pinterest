import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardObjects = response.data;
      const boards = [];
      Object.keys(boardObjects).forEach((boardId) => {
        boardObjects[boardId].id = boardId;
        boards.push(boardObjects[boardId]);
      });

      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getPinsByBoardId = (boardId) => axios.get(`${baseUrl}/boards/$boardId.json`);

export default { getBoards, getPinsByBoardId };
