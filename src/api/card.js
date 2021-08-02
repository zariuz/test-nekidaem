import axios from "axios";
import { actionsCards } from "../actions/cards";
import { initUser } from "../actions/users";

let instance = axios.create({
  baseURL: "https://trello.backend.tests.nekidaem.ru/api/v1/",
});

instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    if (!!token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      document.location.reload();
    }
    throw error;
  }
);

export const getCards = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`cards/`);
      dispatch(actionsCards.setCards(response.data));
      dispatch(initUser());
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};

export const addCard = (columnIndex, value) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`cards/`, {
        row: columnIndex,
        text: value,
      });
      dispatch(actionsCards.addCard(response.data));
    } catch (e) {
      alert(e.response.data.text[0]);
    }
  };
};

export const removeCard = (id, columnIndex, cardIndex) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/cards/${id}/`);
      dispatch(actionsCards.removeCard(columnIndex, cardIndex));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const updateCard = (
  id,
  destinationColumnIndex,
  destinationCardIndex,
  text
) => {
  return async (dispatch) => {
    try {
      await instance.patch(`/cards/${id}/`, {
        row: destinationColumnIndex,
        seq_num: destinationCardIndex,
        text: text,
      });
      dispatch(getCards());
    } catch (e) {
      alert(e.response.data);
    }
  };
};
